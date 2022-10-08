import { sortMaxToMin } from "./sort";
import { Post } from "@/models";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { convertContentToHtml } from "./convertContentToHtml";

const BLOG_FOLDER = path.join(process.cwd(), "blogMarkdown");

export async function getBlogListFromMDBlog(): Promise<Post[]> {
  let postList: Post[] = [];

  const fileNameList = fs.readdirSync(BLOG_FOLDER);

  for (const fileName of fileNameList) {
    const filePath = path.join(BLOG_FOLDER, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data, excerpt, content } = matter(fileContents, {
      excerpt_separator: "<!-- truncate-->",
    });
    postList.push({
      id: fileName,
      title: data.title,
      publishedDate: data.date,
      tagList: data.tags,
      description: excerpt || "",
      slug: data.slug,
      author: {
        name: data.author,
        avatarUrl: data.author_image_url,
      },
      htmlContent: await convertContentToHtml(
        content.replace(excerpt || "", "") || ""
      ),
    });
  }
  //sort postList by recent publishedDate field.
  const sortedPostList = sortMaxToMin(postList, "publishedDate");

  return sortedPostList;
}
