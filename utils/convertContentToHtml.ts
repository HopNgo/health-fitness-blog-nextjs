import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";

import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

export const convertContentToHtml = async (content: string) => {
  const file = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeDocument, { title: "Blog Detail Page" })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(content || "");
  return file.toString();
};
