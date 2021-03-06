module.exports = {
  siteMetadata: {
    title: 'Dev Blog',
    author: 'Sonjeet Paul',
    location: 'Birmingham, UK',
    description: `My name is Sonjeet and I write code for all ends of the tech stack. I
          do a lot of independent learning and want to share my experiences
          through my blog. If you’re interested in learning with me then stay
          tuned as I share my thoughts,`,
    siteUrl: 'https://sonjeetpaul.tech',
    social: {
      twitter: 'sonj_98',
      github: 'sonjeet',
      linkedin: 'sonjeet',
      youtube: 'UCMFpLCg1s1GtdBLGri_XgNQ',
    },
    slogan: {
      italics: 'sharing my thoughts',
      pixelated: 'bit by bit',
    },
  },
  plugins: [
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    'gatsby-plugin-fontawesome-css',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog',
      },
    },
    //{
    //resolve: 'gatsby-source-filesystem',
    //options: {
    //path: `${__dirname}/content/assets`,
    //name: 'assets',
    //},
    //},
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/assets/fonts/`,
      },
    },
    //{
    //resolve: 'gatsby-plugin-mdx',
    //options: {
    //extensions: ['.mdx', '.md'],
    //gatsbyRemarkPlugins: [
    //{
    //resolve: 'gatsby-remark-images',
    //options: {
    //maxWidth: 590,
    //},
    //},
    //{
    //resolve: 'gatsby-remark-responsive-iframe',
    //options: {
    //wrapperStyle: 'margin-bottom: 1.0725rem',
    //},
    //},
    //{
    //resolve: 'gatsby-remark-vscode',
    //},
    //{
    //resolve: 'gatsby-remark-copy-linked-files',
    //},
    //{
    //resolve: 'gatsby-remark-smartypants',
    //},
    //],
    //},
    //},
    //{
    //resolve: 'gatsby-plugin-manifest',
    //options: {
    //name: 'Sonj | Dev Blog',
    //short_name: 'Sonj',
    //start_url: '/',
    //background_color: '#ffffff',
    //theme_color: '#31a178',
    //display: 'minimal-ui',
    //// edit below
    //icon: 'content/assets/code-icon.png',
    //},
    //},
  ],
};
