// Creates a post after validating its content.
export function createPost({
  content,
  author,
  id = crypto.randomUUID(),
  createdAt = new Date().toISOString(),
}) {
  const trimmedContent = content.trim()

  if (!trimmedContent) {
    return null
  }

  return {
    id,
    content: trimmedContent,
    author,
    createdAt,
    likes: [],
  }
}

// Adds or removes a user's like from a post.
export function toggleLike(posts, postId, userId) {
  if (!userId) {
    return posts
  }

  return posts.map((post) => {
    if (post.id !== postId) {
      return post
    }

    const alreadyLiked = post.likes.includes(userId)

    return {
      ...post,
      likes: alreadyLiked
        ? post.likes.filter((id) => id !== userId)
        : [...post.likes, userId],
    }
  })
}

// Removes a post by its ID.
export function deletePost(posts, postId) {
  return posts.filter((post) => post.id !== postId)
}
