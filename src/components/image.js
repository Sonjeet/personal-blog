import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ path }) => {
  //TODO: destructure things from 'data'
  const data = useStaticQuery(
    graphql`
      {
        allImageSharp {
          edges {
            node {
              id
              fluid(maxWidth: 150, maxHeight: 150) {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    `
  )
  console.log("DATA OF IMG IS: ", data)
  return <p>Hello</p>
}

export default Image
