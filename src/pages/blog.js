import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"

const Blog = () => {
  const blogCall = useStaticQuery(graphql`
    query blogCall {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
            frontmatter {
              title
              path
              date
              description
              css
              published
            }
          }
        }
      }
    }
  `)
  const {
    allMdx: { edges },
  } = blogCall
  return (
    <Layout>
      <h1 className="text-4xl mb-3">Blog Posts</h1>
      <p>
        Have a read of my latest blog posts about web development, cars and the
        odd ramble about general life stuff.
      </p>
      <div className="flex">
        {edges
          .filter(({ node }) => node.frontmatter.published === true)
          .map(({ node }) => {
            return (
              <Link
                key={node.id}
                to={node.frontmatter.path}
                className="lg:w-1/2 p-4"
              >
                <div
                  className={`w-full h-full text-${node.frontmatter.css}-400 border border-${node.frontmatter.css}-400 rounded p-4 flex flex-col justify-between leading-normal`}
                >
                  <div className="mb-8">
                    <div className="font-bold text-xl mb-2">
                      {node.frontmatter.title}
                    </div>
                    <p className="text-base">{node.frontmatter.description}</p>
                    <p className="text-base mt-5">
                      Posted on {node.frontmatter.date}
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
      </div>
    </Layout>
  )
}

export default Blog
