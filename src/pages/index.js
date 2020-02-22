import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "portrait.png" }) {
        childImageSharp {
          fluid(
            maxWidth: 500
            
            ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:w-1/2 sm:pr-5 order-2 sm:order-none">
          <h1 className="text-4xl mb-3">Hi, I'm Patrick Whitehouse <span role="img" aria-label="wave">👋🏼</span></h1>
          <h2 className="text-2xl mb-3">
            I'm a Manchester based Front End Web Developer who specialises in constructing niche, pixel perfect websites.
          </h2>
        </div>
        <div className="sm:w-1/2 order-1 sm:order-none mb-3 sm:mb-0">
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Patrick Whitehouse in front of lights"
          />
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-3xl">Where it all began...</h3>
        <p className="mt-3">Computers and anything tech related has always interested me. My dad, a Cisco engineer, has had a huge impact on my life choices so far. From an early age I watched him dismantle and reassemble computers, diagnose network issues and install 50 more WiFi access points in our home <span role="img" aria-label="laughing face">😆</span>!</p>
        <p className="mt-3">I currently work as a Front End Developer for an e-commerce agency in Manchester. Here I develop Magento 2 stores, which sometimes have the occasional WordPress integration.</p>
        <p className="mt-3">
          I'm always keeping up to date with the latest tech trends by following industry leaders on Twitter <a href="https://twitter.com/patrickdoesweb" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-300 underline font-medium">(here's my profile <span role="img" aria-label="wink face">😉</span>)</a>. I also scope the explore page on GitHub too, I often find some hidden gems here.
        </p>
      </div>
    </Layout>
  )
}

export default Index
