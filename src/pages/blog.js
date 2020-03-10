import React from 'react';
import Layout from "../components/layout";
import { graphql, Link } from 'gatsby';

const Blog = ({ data: { allMdx } }) => (
    <Layout>
        <h1 className="text-4xl mb-3">Blog Posts</h1>
        <p>Have a read of my latest blog posts about web development, cars and the odd ramble about general life stuff.</p>
        {allMdx.edges.map(({ node }) => (
            <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
        ))}
    </Layout>
)

export default Blog;

export const blogCall = graphql`
query blogCall {
  allMdx {
    edges {
      node {
        id
        frontmatter {
          title
          path
          date
        }
      }
    }
  }
}

`