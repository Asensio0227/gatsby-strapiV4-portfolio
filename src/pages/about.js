import { graphql } from "gatsby"
import React from "react"
import Seo from "../components/Seo"
import Title from "../components/Title"

const About = ({ data }) => {
  const {
    strapiAbout: { title, info, stack, image },
  } = data

  return (
    <>
      <Seo title="About" />
      <section className="about-page">
        <div className="section-center about-center">
          <img
            src={image.localFile.publicURL}
            alt={title}
            className="about-img-svg"
          />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export const query = graphql`
  query {
    strapiAbout {
      title
      stack {
        id
        title
      }
      info
      image {
        localFile {
          publicURL
        }
      }
    }
  }
`

export default About
