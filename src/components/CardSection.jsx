import Card from "./Card";

export default function CardSection({ comics }) {
    return (
        <section className="bg-dark">
            <div className="container position-relative">
                <div className="row py-5">
                    {
                        comics.map(comic => (
                            <Card comic={comic} />
                        ))
                    }
                    <div className="title-card-container">CURRENT SERIES</div>
                    <button className="btn btn-primary text-center m-auto mt-4">LOAD MORE</button>

                </div>
            </div>
        </section>
    )
}