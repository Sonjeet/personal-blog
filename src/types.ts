// Shared types
//export interface BlogNode {
//node: {
//excerpt: string
//fields: {
//slug: string
//}
//frontmatter: {
//date: string
//title: string
//description: string
//}
//}
//}

export interface BlogNode {
  html: string;
  frontmatter: {
    date: string;
    description: string;
    path: string;
    title: string;
  };
}
