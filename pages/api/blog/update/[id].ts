import { cloneDeep } from "lodash";
import { Post } from "@/models";
import { getBlogListFromMDBlog } from "@/utils";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs";
type Data = {
  message: string;
};
const BLOG_FOLDER = path.join(process.cwd(), "blogMarkdown");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const fileName: string = req.query.id as string;
  const filePath: string = path.join(BLOG_FOLDER, fileName);

  try {
    fs.unlinkSync(filePath);
    return res.status(200).json({ message: "Deleted Successfully..." });
  } catch (error) {
    return res.status(500).json({ message: "Error in deleting the file..." });
  }
}
