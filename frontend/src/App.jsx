import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PostsProvider } from './context/PostsContext.jsx'
import AppLayout from './components/AppLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import PostsPage from './pages/PostsPage.jsx'
import PostDetailPage from './pages/PostDetailPage.jsx'
import CreatePostPage from './pages/CreatePostPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <PostsProvider>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:postId" element={<PostDetailPage />} />
            <Route path="/create" element={<CreatePostPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </PostsProvider>
    </BrowserRouter>
  )
}

export default App
