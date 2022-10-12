import { Post, PostOmitForBlogListPage } from "@/models";
import { getBlogListFromMDBlog, sortMaxToMin } from "@/utils";
import { cloneDeep } from "lodash";
import { NextApiRequest, NextApiResponse } from "next";

type DataError = {
  message?: string;
};
type DataSuccess = {
  postList: PostOmitForBlogListPage[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataError | DataSuccess>
) {
  //get page query
  const _page: number = Number(req.query._page as string);
  const _limit: number = Number(req.query._limit as string);

  //get postList from MarkdownBlog file
  const postList = await getBlogListFromMDBlog();

  //clone and get some necessary field in postListClone
  const postListClone: PostOmitForBlogListPage[] = cloneDeep(postList).map(
    (post: Post) => ({
      id: post.id,
      title: post.title,
      tagList: post.tagList,
      description: post.description,
      slug: post.slug,
      publishedDate: post.publishedDate,
    })
  );

  if (!postListClone)
    return res.status(500).json({ message: "Post list is empty!" });

  //get all postListClone when not exist _page & _limit
  if (!_page && !_limit)
    return res.status(200).json({ postList: postListClone });

  const start = _page === 1 ? 0 : (_page - 1) * _limit;

  //divide postListClone into four item per page
  const postListPerPage: PostOmitForBlogListPage[] = postListClone.splice(
    start,
    _limit
  );

  const totalPage = Math.ceil(postList.length / _limit);

  //get postListClone when exist _page & _limit
  const dataRes = {
    postList: postListPerPage,
    pagination: {
      total: totalPage,
      limit: _limit,
    },
  };
  return res.status(200).json(dataRes);
}
