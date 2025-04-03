import { Link } from "react-router-dom"

export default function PostsList({ posts }) {
    return (
        <div className="row g-4">
            {
                posts.map(post => (
                    <div className="col-4" key={post.id}>
                        <div className="card">
                            <img src={`${post.image}`} className="card-img-top" alt={post.title} />
                            <div className="card-body">
                                <h3>{post.title}</h3>
                                <Link to={`/posts/${post.id}`} className="btn btn-primary mt-3">Scopri di più</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}