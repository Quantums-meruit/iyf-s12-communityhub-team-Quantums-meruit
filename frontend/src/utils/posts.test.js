import { describe, expect, it } from 'vitest'
import { createPost, deletePost, toggleLike } from './posts.js'

const author = {
  id: 'WairimuEvans',
  name: 'Evans Wairimu',
}

const samplePost = {
  id: 'post-1',
  content: 'Learning React',
  author,
  createdAt: '2026-11-18T10:00:00.000Z',
  likes: [],
}

describe('createPost', () => {
  it('creates a post with valid content', () => {
    const post = createPost({
      content: 'Hello CommunityHub',
      author,
      id: 'post-2',
      createdAt: '2026-11-18T10:00:00.000Z',
    })

    expect(post.content).toBe('Hello CommunityHub')
    expect(post.author).toEqual(author)
    expect(post.likes).toEqual([])
  })

  it('trims unnecessary spaces', () => {
    const post = createPost({
      content: '  Hello everyone  ',
      author,
      id: 'post-3',
    })

    expect(post.content).toBe('Hello everyone')
  })

  it('rejects empty content', () => {
    const post = createPost({
      content: '   ',
      author,
    })

    expect(post).toBeNull()
  })
})

describe('toggleLike', () => {
  it('adds a like', () => {
    const updatedPosts = toggleLike(
      [samplePost],
      'post-1',
      'user-2',
    )

    expect(updatedPosts[0].likes).toContain('user-2')
  })

  it('removes an existing like', () => {
    const likedPost = {
      ...samplePost,
      likes: ['user-2'],
    }

    const updatedPosts = toggleLike(
      [likedPost],
      'post-1',
      'user-2',
    )

    expect(updatedPosts[0].likes).not.toContain('user-2')
  })

  it('does not modify another post', () => {
    const secondPost = {
      ...samplePost,
      id: 'post-2',
    }

    const updatedPosts = toggleLike(
      [samplePost, secondPost],
      'post-1',
      'user-2',
    )

    expect(updatedPosts[1]).toEqual(secondPost)
  })
})

describe('deletePost', () => {
  it('removes the selected post', () => {
    const posts = [
      samplePost,
      { ...samplePost, id: 'post-2' },
    ]

    const updatedPosts = deletePost(posts, 'post-1')

    expect(updatedPosts).toHaveLength(1)
    expect(updatedPosts[0].id).toBe('post-2')
  })
})
