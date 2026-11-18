import { useState } from 'react'
import Button from './Button.jsx'

function CreatePost({ onCreatePost }) {
  const [content, setContent] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedContent = content.trim()

    if (!trimmedContent) {
      return
    }

    onCreatePost(trimmedContent)
    setContent('')
  }

  return (
    <section className="create-post" aria-labelledby="create-post-heading">
      <h2 id="create-post-heading">Create a post</h2>

      <form onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="post-content">
          What's on your mind?
        </label>

        <textarea
          id="post-content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Share something with your community..."
          required
        />

        <footer className="create-post__footer">
          <span>{content.length} characters</span>

          <Button type="submit" disabled={!content.trim()}>
            Publish post
          </Button>
        </footer>
      </form>
    </section>
  )
}

export default CreatePost
