import { axiosClient } from "@/apis";
import { Loading } from "@/components/common";
import { usePageLoading } from "@/hooks";
import { AppPropsWithLayout } from "@/models";
import { createEmotionCache, theme } from "@/utils";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AxiosResponse } from "axios";
import { EmptyLayout } from "components/layout";
import Head from "next/head";
import { SWRConfig } from "swr";
import "../styles/globals.css";

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  const { isPageLoading }: { isPageLoading: boolean } = usePageLoading();
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: (url) =>
              axiosClient
                .get(url)
                .then((res: AxiosResponse<any, any>) => res.data),
            shouldRetryOnError: false,
          }}
        >
          <Layout>
            {isPageLoading && <Loading />}
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
