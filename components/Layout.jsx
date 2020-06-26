import React from "react";
import Head from "next/head";
import Navigations from "./Navigations";
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children, title, headText }) {
 return (
  <div className="container">
   <Head>
      <title>{title}</title>
   </Head>
      <Navigations />
      <Header headText={headText} />

      <main>{children}</main>

      <Footer/>
  </div>
 );
}
