function filterPosts(posts, query) {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return posts
  }

  return posts.filter((post) => {
    const searchableText = [
      post.title,
      post.content,
      post.author?.name,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    return searchableText.includes(normalizedQuery)
  })
}

export { filterPosts }