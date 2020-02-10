import React from "react"
import Layout from "../components/layout"
import workData from "../components/workData"
import Card from "../components/card"
const Work = () => (
  <Layout>
    <h1 className="text-4xl mb-3">My Work</h1>
    <p>
      Have a look at my latest projects. I'm always on the lookout to expand my
      portfolio, so give me a shout if you're interested in working with me.
    </p>
    <div className="sm:flex sm:justify-between my-5">
      {workData.map(item => (
        <Card
          key={item.id}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  </Layout>
)

export default Work
