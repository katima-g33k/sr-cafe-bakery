import React, { PropsWithChildren } from "react";
import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  pageTitle: string;
}

export default function RootLayout({ children, pageTitle }: PropsWithChildren<LayoutProps>) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
