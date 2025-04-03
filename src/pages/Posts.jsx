import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Posts() {

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

            <main>
                <section className="my-5">
                    <div className="container">

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
                    </div>
                </section>
            </main>

        </>
    )
}