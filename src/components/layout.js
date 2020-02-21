import React from "react"
import Helmet from "react-helmet"
import Navigation from "./navigation"
import useSiteData from "./seo"
import "../styles/global.css"
const Layout = ({ children }) => {
  const { title, description } = useSiteData();
  return (
    <>
      <Helmet>
        <body className="font-sans bg-gray-900 text-white antialiased leading-relaxed text-lg" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Navigation />
      <main className="sm:max-w-screen-lg sm:m-auto p-5">{children}</main>
    </>
  )
}
export default Layout
