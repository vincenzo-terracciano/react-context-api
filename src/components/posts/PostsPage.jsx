import PostsList from "./PostsList"
import PostContext from "../../contexts/PostContext"
import { useContext } from "react"

export default function PostsPage() {

    const { posts } = useContext(PostContext)

    return (
        <section className="my-5">
            <div className="container">

                <h1>My posts</h1>
                <PostsList posts={posts} />

            </div>
        </section>
    )
}