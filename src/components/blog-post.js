import React from "react"
import { graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Helmet from "react-helmet"
export default function PageTemplate({ data: { mdx } }) {
  return (
    <>
      <Helmet>
        <body className="font-sans bg-gray-900 text-white antialiased leading-relaxed text-lg" />
        <title>{mdx.frontmatter.title} - Patrick Whitehouse</title>
      </Helmet>
      <main className="sm:max-w-screen-lg sm:m-auto p-5">
        <h1 className="text-4xl mb-3">{mdx.frontmatter.title}</h1>
        <MDXRenderer>{mdx.body}</MDXRenderer>
        <Link to={"/blog"} className="block my-5">
          &larr; Back to the posts
        </Link>
      </main>
    </>
  )
}

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
