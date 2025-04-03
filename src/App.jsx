import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import PostContext from "./contexts/PostContext"
import Home from "./pages/Home"
import Chisiamo from "./pages/Chisiamo"
import Posts from "./pages/Posts"
import Layout from "./layouts/Layout"
import Post from "./pages/Post"

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setPosts(data)
      })
  }, [])

  return (
    <>
      <PostContext.Provider value={{ posts: posts }} >
        <BrowserRouter>
          <Routes>
            <Route Component={Layout}>
              <Route path="/" Component={Home} />
              <Route path="/chisiamo" Component={Chisiamo} />
              <Route path="/posts" element={<Posts posts={posts} />} />
              <Route path="/posts/:id" Component={Post} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PostContext.Provider>

    </>
  )
}

export default App

