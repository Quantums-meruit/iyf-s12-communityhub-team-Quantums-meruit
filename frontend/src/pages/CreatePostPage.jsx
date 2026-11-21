import { Link, useNavigate } from 'react-router-dom'
import CreatePost from '../components/CreatePost.jsx'
import { usePosts } from '../context/PostsContext.jsx'
import styles from './CreatePostPage.module.css'

function CreatePostPage() {
  const { addPost } = usePosts()
  const navigate = useNavigate()

  function handleCreatePost(content) {
    const newPost = addPost(content)

    if (newPost) {
      navigate(`/posts/${newPost.id}`)
    }
  }

  return (
    <main className={styles.page}>
      <header className={styles.intro}>
        <p className="eyebrow">COMMUNITY VOICES</p>
        <h1>Create a post</h1>
        <p>
          Share an update, ask a question, or start a conversation with
          the CommunityHub members.
        </p>
      </header>

      <div className={styles.editor}>
        <CreatePost onCreatePost={handleCreatePost} />
      </div>

      <p className={styles.guidance}>
        Your post is saved in this browser, so it will still be here when
        you return on the same device.
      </p>

      <Link className={styles.backLink} to="/posts">
        ← Browse community posts
      </Link>
    </main>
  )
}

export default CreatePostPage
