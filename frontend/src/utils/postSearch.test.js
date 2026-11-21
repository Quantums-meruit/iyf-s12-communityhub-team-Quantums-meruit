import { describe, expect, it } from 'vitest'
import { filterPosts } from './postSearch.js'

const posts = [
  {
    id: 1,
    title: 'Water conservation',
    content: 'Ways to protect our water resources',
    author: { name: 'Evans' },
  },
  {
    id: 2,
    title: 'Community development',
    content: 'Working together to improve our neighbourhood',
    author: { name: 'Alex' },
  },
  {
    id: 3,
    title: 'Learning React',
    content: 'Building applications with components',
    author: { name: 'Sam' },
  },
]

describe('filterPosts', () => {
  it('returns all posts when the search query is empty', () => {
    expect(filterPosts(posts, '')).toHaveLength(3)
  })

  it('finds posts by title', () => {
    const result = filterPosts(posts, 'water')

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe(1)
  })

  it('finds posts by content', () => {
    const result = filterPosts(posts, 'components')

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe(3)
  })

  it('finds posts by author name', () => {
    const result = filterPosts(posts, 'alex')

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe(2)
  })

  it('ignores letter casing', () => {
    expect(filterPosts(posts, 'WATER')).toHaveLength(1)
  })

  it('ignores leading and trailing spaces', () => {
    expect(filterPosts(posts, '  react  ')).toHaveLength(1)
  })

  it('returns an empty array when nothing matches', () => {
    expect(filterPosts(posts, 'nonexistent')).toHaveLength(0)
  })
})