import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import PostsPage from './pages/PostsPage.jsx'
import PostDetailPage from './pages/PostDetailPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function CreatePostPlaceholder() {
  return (
    <main className="main-content">
      <h1>Create a post</h1>
      <p>This page is being implemented by the team.</p>
    </main>
  )
}

function AboutPlaceholder() {
  return (
    <main className="main-content">
      <h1>About CommunityHub</h1>
      <p>Learn more about our community.</p>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:postId" element={<PostDetailPage />} />
          <Route path="/create" element={<CreatePostPlaceholder />} />
          <Route path="/about" element={<AboutPlaceholder />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
