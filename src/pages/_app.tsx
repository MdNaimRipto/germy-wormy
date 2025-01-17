import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

// ? Styles Import
import "../styles/globals.css";
import "swiper/css";
import "swiper/css/pagination";
// import Loader from "@/components/common/Loader";

import banner from "@/assets/banner/banner.jpeg";
import Image from "next/image";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Germy Wormy</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Body Section */}
      <div className="relative">
        <Image
          src={banner.src}
          width={banner.width}
          height={banner.height}
          priority
          className="fixed w-full h-full object-cover z-0"
          alt="Banner-fixed-image"
        />
        {getLayout(<Component {...pageProps} />)}
      </div>
    </>
  );
}
