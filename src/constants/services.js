import React from "react"
import { FaAndroid, FaCode, FaSketch } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `Some of the most popular programming languages for web development include HTML/CSS, PHP, Python, JavaScript, Java, Ruby, and Swift. But this list is not an exhaustive ones, and there are several others to turn to when needed.`,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "web design",
    text: `A web designer is responsible for creating the design and layout of a website or web pages. Unlike web developers, who specialise in creating new websites' structures and the code that forms these, web designers tend to focus on the visual aspects of a site, such as its layout and its usability`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "native app design",
    text: `Native design adheres to platform-specific guidelines, providing familiarity and optimized performance. Custom design offers unique visual identities and brand experiences. This blog post explores the characteristics, advantages, and considerations of each approach to help you make an informed decision.`,
  },
]

export default services
