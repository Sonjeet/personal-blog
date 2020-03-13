import React from 'react';
import Layout from './layout';

const ComingSoon = ({ page }) => (
  <Layout location={{pathname: `/${page}`}}>
    <div
      style={{
        minWidth: "100%",
        maxWidth: "100%",
        minHeight: "100%",
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "var(--font-sans-serif"
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          color: "var(--blue-heading)",
        }}
      >
        {page} page is coming soon <span role="img">&#8230;</span>
      </h1>
      <p
        style={{
          fontSize: "2rem",
          color: "var(--blue-heading)",
        }}
      >
        Please bare with me on this. I'm not sure how this page should be
        designed/what content I should put here. Things that I could be busy
        with right now are:
      </p>
      <ul
        style={{
          color: "var(--blue-text)",
          listStyle: "none",
          fontSize: "1.4rem",
        }}
      >
        <li>
          Completing the last few months of uni{" "}
          <span role="img" aria-label="heart-eyes">&#128525;</span>
        </li>
        <li>
          Working on other projects (1 individual & 1 collaborative project
          pending) <span role="img" aria-label="upside-down-smiley-face">&#128579;</span>
        </li>
        <li>
          Sleeping. <span role="img" aria-label="sleepy-face">&#128564;</span>
        </li>
      </ul>
    </div>
  </Layout>
)

export default ComingSoon;