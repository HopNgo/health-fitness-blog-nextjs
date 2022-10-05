import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy, { ProxyResCallback } from "http-proxy";
import Cookies from "cookies";

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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
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
