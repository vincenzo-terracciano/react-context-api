export default function Footer() {
    return (
        <>
            <footer className="p-3 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="card bg-info">
                                <div className="card-body">
                                    <h3>Home</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="">Blog</a></li>
                                        <li><a href="">Categorie</a></li>
                                        <li><a href="">Archivio</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card bg-info">
                                <div className="card-body">
                                    <h3>Chi siamo</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="">Il nostro team</a></li>
                                        <li><a href="">La nostra missione</a></li>
                                        <li><a href="">Collabora con noi</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card bg-info">
                                <div className="card-body">
                                    <h3>Contacts</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="">Email</a></li>
                                        <li><a href="">Telefono</a></li>
                                        <li><a href="">Social</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="card bg-info">
                                <div className="card-body">
                                    <h3>FAQ</h3>
                                    <ul className="list-unstyled">
                                        <li><a href="">Guida</a></li>
                                        <li><a href="">Assistenza tecnica</a></li>
                                        <li><a href="">Privacy e sicurezza</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}