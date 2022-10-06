import NextCors from "nextjs-cors";
import Cookies from "cookies";
import httpProxy from "http-proxy";
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

const proxy = httpProxy.createProxyServer();

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
  return new Promise((resolve) => {
    //convert cookies to Authorization header
    const cookies = new Cookies(req, res);
    const tokenFromCookies = cookies.get("access_token");
    if (tokenFromCookies)
      req.headers.authorization = `Bearer ${tokenFromCookies}`;

    //don't send cookie to API sever
    req.headers.cookie = "";

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: false,
    });
    proxy.once("proxyRes", () => resolve(true));
  });
}
