import { useState } from 'react'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import UserProfile from './components/UserProfile.jsx'
import CreatePost from './components/CreatePost.jsx'
import PostList from './components/PostList.jsx'
import { createPost, deletePost, toggleLike } from './utils/posts.js'
import './App.css'

const communityMember = {
  name: 'Joseph Kinyanjui',
  username: 'Quantums-meruit',
  bio: 'CommunityHub team lead.',
}

const currentUser = {
  id: 'WairimuEvans',
  name: 'Evans Wairimu',
}

function App() {
  const [posts, setPosts] = useState([])

  function handleCreatePost(content) {
    const newPost = createPost({
      content,
      author: currentUser,
    })

    if (newPost) {
      setPosts((currentPosts) => [newPost, ...currentPosts])
    }
  }

  function handleToggleLike(postId) {
    setPosts((currentPosts) =>
      toggleLike(currentPosts, postId, currentUser.id),
    )
  }

  function handleDeletePost(postId) {
    setPosts((currentPosts) => {
      const selectedPost = currentPosts.find(
        (post) => post.id === postId,
      )

      if (selectedPost?.author.id !== currentUser.id) {
        return currentPosts
      }

      return deletePost(currentPosts, postId)
    })
  }

  return (
    <section className="app" aria-label="CommunityHub application">
      <Header />

      <section className="app-layout" aria-label="Community feed layout">
        <Sidebar user={communityMember} />

        <main className="main-content" id="feed">
          <section className="welcome-card" id="home">
            <p className="eyebrow">YOUR SPACE, YOUR PEOPLE</p>
            <h1>Welcome to your community.</h1>
            <p>
              A place to connect, share ideas, and keep up with the groups
              you care about.
            </p>
          </section>

          <UserProfile user={communityMember} />

          <CreatePost onCreatePost={handleCreatePost} />

          <PostList
            posts={posts}
            currentUserId={currentUser.id}
            onToggleLike={handleToggleLike}
            onDeletePost={handleDeletePost}
          />
        </main>
      </section>

      <Footer />
    </section>
  )
}

export default App
