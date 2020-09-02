import React from "react"
import Helmet from "react-helmet"
import Navigation from "./navigation"
import "../styles/global.css"
const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <body className="font-sans bg-gray-900 text-white antialiased leading-relaxed text-lg" />
        <title>
          {title ? title + " |" : ""} Patrick Whitehouse | Freelance developer
          based in Tameside, Manchester
        </title>
      </Helmet>
      <Navigation />
      <main className="sm:max-w-screen-lg sm:m-auto p-5">{children}</main>
    </>
  )
}
export default Layout
