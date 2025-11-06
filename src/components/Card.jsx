export default function Card({ comic }) {
    return (
        <div key={comic.id} className="col-6 col-md-4 col-lg-2">
            <div className="card mt-3 bg-dark border-0">
                <div className="card-img-container mb-3">
                    <img className="card-img-top" src={comic.thumb} alt="" />
                </div>
                <h3 className="card-title text-white mb-4">{comic.series.toUpperCase()}</h3>
            </div>
        </div>
    )
}