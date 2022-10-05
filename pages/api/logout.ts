import Cookies from "cookies";
import httpProxy, { ProxyResCallback } from "http-proxy";
import type { NextApiRequest, NextApiResponse } from "next";
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST")
    return res.status(404).json({ message: "Method Not Supported" });

  return new Promise((resolve) => {
    const cookies = new Cookies(req, res);
    cookies.set("access_token");

    res.status(200).json({ message: "Logout successfully" });
    resolve(true);
  });
}
