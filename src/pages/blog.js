import React from 'react';
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from 'gatsby';

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
        }
      }
    }
  }
}
`
    );
    const { allMdx: { edges } } = blogCall;
    return (
        <Layout>
            <h1 className="text-4xl mb-3">Blog Posts</h1>
            <p>Have a read of my latest blog posts about web development, cars and the odd ramble about general life stuff.</p>
            {edges.map(({ node }) => (
                node.id
            ))}
        </Layout>
    )
}

export default Blog;
