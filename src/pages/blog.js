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
          description
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

                <Link key={node.id} to={node.frontmatter.path}>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-xl mb-2">{node.frontmatter.title}</div>
                            <p className="text-gray-700 text-base">{node.frontmatter.description}</p>
                        </div>
                    </div>
                </Link>

            ))}
        </Layout>
    )
}

export default Blog;
