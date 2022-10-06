import Cookies from "cookies";
import httpProxy from "http-proxy";
import type { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
type Data = {
  name?: string;
  message?: string;
};

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy: httpProxy = httpProxy.createProxyServer();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await NextCors(req, res, {
    // Options
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });
  if (req.method !== "POST")
    return res.status(404).json({ message: "Method Not Supported" });

  return new Promise((resolve) => {
    const cookies = new Cookies(req, res);
    cookies.set("access_token");

    res.status(200).json({ message: "Logout successfully" });
    resolve(true);
  });
}
