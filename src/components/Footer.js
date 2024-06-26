import React from "react"
import socialLinks from "../constants/social_links"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {socialLinks.map(link => {
            return (
              <a href={link.url} target="blank" className="social-links">
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>
          copyright&copy; {new Date().getFullYear()} <span>webDev</span> all
          rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
