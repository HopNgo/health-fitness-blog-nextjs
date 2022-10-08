import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  revalidated?: Boolean;
  message?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
 
  if (req.query.secret !== process.env.MY_SECRET_REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }
  const BLOG_SLUG = req.query.slug;

  try {
    await res.revalidate(`/blog/${BLOG_SLUG}`);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).json({ message: "Error revalidating" });
  }
}
