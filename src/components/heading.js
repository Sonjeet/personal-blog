import React from "react";
import styled from "styled-components";

const tag = (size) => {
  if(size < 1 || size > 6)
    return console.error("Please enter @param size of val between 1 and 6.");

  return "h" + size;
}

const Heading = ({ size, weight, children, margin, color }) => {    
  // TODO: color can have default props, consider using object instead of loads of params  
  const HeadingTag = styled[tag(size)]`
      font-family: var(--font-sans-serif);
      color: ${color || 'var(--blue-heading)'}; 
      font-weight: ${weight};
      margin: ${margin}
    `;

    return <HeadingTag>{children}</HeadingTag>;
}

export default Heading;