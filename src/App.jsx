import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Chisiamo from "./pages/Chisiamo"
import Posts from "./pages/Posts"
import Layout from "./layouts/Layout"
import Post from "./pages/Post"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Layout}>
            <Route path="/" Component={Home} />
            <Route path="/chisiamo" Component={Chisiamo} />
            <Route path="/posts" Component={Posts} />
            <Route path="/posts/:id" Component={Post} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

