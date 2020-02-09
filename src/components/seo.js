import { graphql, useStaticQuery } from "gatsby"

const useSiteData = () => {
  const siteData = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)
  return siteData.site.siteMetadata
}

export default useSiteData
