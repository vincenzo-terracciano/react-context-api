import PostsList from "../components/posts/PostsList";
import PostContext from "../contexts/PostContext";
import { useContext } from "react";

export default function Home() {

    const { posts } = useContext(PostContext)

    return (
        <>

            <main>
                <section>
                    <div className="container">
                        <div className="row align-items-md-stretch my-5">
                            <div className="col-md-6">
                                <div
                                    className="h-100 p-5 text-black bg-info border rounded-3">
                                    <h2>Benvenuti nel nostro blog!</h2>
                                    <p>
                                        "Ogni storia merita di essere raccontata"
                                        Unisciti alla nostra comunità di lettori appassionati e scopri nuovi mondi attraverso le parole.
                                        Ogni settimana pubblichiamo nuovi post per ispirarti, informarti e intrattenerti. Unisciti a noi in questo viaggio di scoperta!
                                    </p>
                                    <button
                                        className="btn btn-outline-dark"
                                        type="button">
                                        Scopri di più
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <h3>Best sellers</h3>
                        <PostsList posts={posts.slice(0, 3)} />
                    </div>
                </section>
            </main>
        </>
    )
}