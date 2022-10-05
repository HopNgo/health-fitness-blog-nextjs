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
    //don't send cookie to API sever
    req.headers.cookie = "";

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = "";

      proxyRes.on("data", (chunk) => {
        body += chunk;
      });

      proxyRes.on("end", () => {
        try {
          const { accessToken, expiredAt } = JSON.parse(body);

          //convert Token to Cookies
          const cookies = new Cookies(req, res, {
            secure: process.env.NODE_ENV !== "development",
          });
          cookies.set("access_token", accessToken, {
            httpOnly: true,
            sameSite: "lax",
            expires: new Date(expiredAt),
          });
          
          (res as NextApiResponse)
            .status(200)
            .json({ message: "Login Successfully" });
        } catch (error) {
          (res as NextApiResponse)
            .status(500)
            .json({ message: "Something went wrong" });
        }

        resolve(true);
      });
    };

    proxy.once("proxyRes", handleLoginResponse);

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
