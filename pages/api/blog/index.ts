import { sortMaxToMin } from "@/utils";
import { Post } from "@/models";
import { getBlogListFromMDBlog } from "@/utils";
import { cloneDeep } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

type DataError = {
  message?: string;
};
type DataSuccess = {
  postList: Post[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataError | DataSuccess>
) {
  //get page query
  const _page: number = Number(req.query._page as string);
  const _limit: number = Number(req.query._limit as string);

  //get postList from MarkdownBlog file
  getBlogListFromMDBlog()
    .then((data: Post[]) => {
      //clone and get some necessary field in postListClone
      const postListClone: Post[] = cloneDeep(data).map((post: Post) => ({
        id: post.id,
        description: post.description,
        title: post.title,
        tagList: post.tagList,
        publishedDate: post.publishedDate,
        slug: post.slug,
        author: post.author,
      }));

      if (!postListClone)
        return res.status(500).json({ message: "Post list is empty!" });

      //get all postListClone when not exist _page & _limit
      if (!_page && !_limit)
        return res.status(200).json({ postList: postListClone });

      //sort postListClone by recent publishedDate field.
      const sortedPostListClone = sortMaxToMin(postListClone, "publishedDate");

      const start = _page === 1 ? 0 : (_page - 1) * _limit;

      //divide postListClone into four item per page
      const postListPerPage: Post[] = sortedPostListClone.splice(start, _limit);

      const totalPage = Math.ceil(postListClone.length / _limit);

      const dataRes = {
        postList: postListPerPage,
        pagination: {
          total: totalPage,
          limit: _limit,
        },
      };
      return res.status(200).json(dataRes);
    })
    .catch((error) =>
      res.status(500).json({ message: "Error Internet Sever" })
    );
}
