import UserProfile from '../components/UserProfile.jsx'
import CreatePost from '../components/CreatePost.jsx'
import PostList from '../components/PostList.jsx'
import { usePosts } from '../context/PostsContext.jsx'

function HomePage() {
  const {
    posts,
    loading,
    error,
    refetch,
    addPost,
    likePost,
    removePost,
    currentUser,
  } = usePosts()

  return (
    <main className="main-content" id="feed">
      <section className="welcome-card" id="home">
        <p className="eyebrow">YOUR SPACE, YOUR PEOPLE</p>
        <h1>Welcome to your community.</h1>
        <p>
          A place to connect, share ideas, and keep up with the groups
          you care about.
        </p>
      </section>

      <UserProfile
        user={{
          name: 'Joseph Kinyanjui',
          username: 'Quantums-meruit',
          bio: 'CommunityHub team lead.',
        }}
      />

      <CreatePost onCreatePost={addPost} />

      {loading && <p role="status">Loading community posts...</p>}

      {error && (
        <section aria-label="Post loading error">
          <p role="alert">Could not load community posts: {error}</p>
          <button type="button" onClick={refetch}>Try again</button>
        </section>
      )}

      {!loading && !error && (
        <PostList
          posts={posts}
          currentUserId={currentUser.id}
          onToggleLike={likePost}
          onDeletePost={removePost}
        />
      )}
    </main>
  )
}

export default HomePage
