import { graphql } from "gatsby"
import React from "react"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Services from "../components/Services"

const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data

  return (
    <>
      <Seo title="Home" />
      <main>
        <Hero />
        <Services />
        <Jobs />
        <Projects title="Featured projects" showLink projects={projects} />
      </main>
    </>
  )
}

export const query = graphql`
  query {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        description
        featured
        github
        id
        slug
        title
        url
        stack {
          id
          title
        }
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
      }
      totalCount
    }
  }
`

export default IndexPage
