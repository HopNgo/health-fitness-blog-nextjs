import { cloneDeep } from "lodash";
import { Post } from "@/models";
import { getBlogListFromMDBlog } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";

type DataError = {
  message?: string;
};
type DataSuccess = {
  postDetail: Post | undefined;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataError | DataSuccess>
) {
  //get page query
  const slug: string = req.query.slug as string;

  //get postList from MarkdownBlog file
  getBlogListFromMDBlog().then((data: Post[]) => {
    const postListClone = cloneDeep(data);
    if (!postListClone)
      return res.status(500).json({ message: "Post list is empty!" });

    //get post Detail by slug field.
    const postDetail: Post | undefined = postListClone.find(
      (post: Post) => post.slug === slug
    );

    const dataRes = {
      postDetail: postDetail,
    };

    return res.status(200).json(dataRes);
  });
}
