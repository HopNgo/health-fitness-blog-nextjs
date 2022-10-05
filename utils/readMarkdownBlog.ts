import { sortMaxToMin } from "./sort";
import matter from "gray-matter";
import { convertContentToHtml } from "./convertContentToHtml";
import { Post } from "@/models";
import fs from "fs";
import path from "path";

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

  return postList;
}
