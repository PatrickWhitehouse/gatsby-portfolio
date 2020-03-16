import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"

const Blog = () => {
  const blogCall = useStaticQuery(graphql`
    query blogCall {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              title
              path
              date
              description
              css
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
      {edges.map(({ node }, i) => (
        <Link key={i} to={node.frontmatter.path}>
          <div
            className={`w-1/2 my-5 text-${node.frontmatter.css}-400 border border-${node.frontmatter.css}-400 rounded p-4 flex flex-col justify-between leading-normal`}
          >
            <div className="mb-8">
              <div className="font-bold text-xl mb-2">
                {node.frontmatter.title}
              </div>
              <p className="text-base">{node.frontmatter.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default Blog
