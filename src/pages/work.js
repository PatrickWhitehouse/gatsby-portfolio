import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"

const Work = () => {
  const queryCall = useStaticQuery(graphql`
    query {
      allWorkJson {
        edges {
          node {
            id
            name
            description
            link
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  `)
  const queryData = queryCall.allWorkJson.edges

  return (
    <Layout title="Work">
      <h1 className="text-4xl mb-3">My Work</h1>
      <p>
        Have a look at my latest projects. I'm always on the lookout to expand
        my portfolio, so give me a shout if you're interested in working with
        me.
      </p>
      <div className="sm:flex sm:justify-between my-5">
        {queryData.map(({ node }) => (
          <Card
            key={node.id}
            name={node.name}
            description={node.description}
            link={node.link}
            image={node.image.childImageSharp.fluid}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Work
