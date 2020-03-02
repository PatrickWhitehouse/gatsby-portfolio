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
        image
        name
        description
        link
      }
    }
  }
}
  `);
  const queryData = queryCall.allWorkJson.edges;


  return (
    <Layout>
      <h1 className="text-4xl mb-3">My Work</h1>
      <p>
        Have a look at my latest projects. I'm always on the lookout to expand my
        portfolio, so give me a shout if you're interested in working with me.
    </p>
      <div className="sm:flex sm:justify-between my-5">
        {queryData.map(({ node }) => (
          <Card
            key={node.id}
            name={node.name}
            description={node.description}
            link={node.link}
          />
        ))}
      </div>
    </Layout>
  )
}

export default Work
