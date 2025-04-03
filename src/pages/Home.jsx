export default function Home() {
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


                        <div className="row">
                            <h2 className="mb-3">Scopri i post più letti</h2>
                            <div className="col-4">
                                <div className="card">
                                    <img src="https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE" className="card-img-top" alt="Post Image" />
                                    <div className="card-body">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam distinctio quod omnis blanditiis tenetur alias nulla, ipsa similique doloribus temporibus repudiandae porro rerum fugit maiores debitis atque. Perspiciatis, a accusamus!
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <img src="https://fastly.picsum.photos/id/62/2000/1333.jpg?hmac=PbFIn8k0AndjiUwpOJcfHz2h-wPCQi_vJRTJZPdr6kQ" className="card-img-top" alt="Post Image" />
                                    <div className="card-body">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam distinctio quod omnis blanditiis tenetur alias nulla, ipsa similique doloribus temporibus repudiandae porro rerum fugit maiores debitis atque. Perspiciatis, a accusamus!
                                    </div>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="card">
                                    <img src="https://fastly.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8" className="card-img-top" alt="Post Image" />
                                    <div className="card-body">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam distinctio quod omnis blanditiis tenetur alias nulla, ipsa similique doloribus temporibus repudiandae porro rerum fugit maiores debitis atque. Perspiciatis, a accusamus!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}