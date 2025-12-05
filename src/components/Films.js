
import { Link } from "react-router-dom";
function Card({ titre, img }) {
  return (
    <div className="movie-card card border-0 shadow-sm h-100">
      <div className="position-relative overflow-hidden">
        <img
          src={img}
          className="card-img-top movie-card-img"
          alt={titre}
        />

        {/* petit badge en haut à gauche, tu peux l'enlever si tu veux */}
        <span className="badge bg-dark bg-opacity-75 text-white position-absolute top-0 start-0 m-2">
          HD
        </span>
      </div>

      <div className="card-body p-3">
        <h6 className="card-title text-center fw-semibold mb-0 text-truncate">
          {titre}
        </h6>
      </div>
    </div>
  );
}

export default function Films({Filter}) {
const anyArray = Filter();
  return (
   <div className="container mt-4">
  <div className="row g-4">
   {anyArray.map((elem, index) => (

  <div className="col-md-4 col-lg-3 col-sm-6" key={index}>

    <Link
      to={`/Film/${elem.imdbID}`}      
      state={{ film: elem }}            
      
    >
      <Card titre={elem.Title} img={elem.Poster} />
    </Link>
  </div>
))}
  </div>
</div>

  );
}
