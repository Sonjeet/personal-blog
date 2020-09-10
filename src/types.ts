// Shared types
export interface BlogNode {
  node: {
    excerpt: string
    fields: {
      slug: string
    }
    frontmatter: {
      date: string
      title: string
      description: string
    }
  }
}
