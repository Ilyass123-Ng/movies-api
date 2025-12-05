import { useLocation, useNavigate } from "react-router-dom";

export default function FilmDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  // On récupère le film passé dans le state
  const film = location.state?.film;

  // Si l'utilisateur arrive sans state (refresh, accès direct), on le renvoie à l'accueil
  if (!film) {
    return (
      <div className="container py-5">
        <p className="text-light">Aucune donnée du film trouvée.</p>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>
          ⬅ Retour
        </button>
      </div>    
    );
  }

  return (
    <div className="container py-5">
      <button className="btn btn-outline-secondary mb-4" onClick={() => navigate(-1)}>
        ⬅ Retour aux films
      </button>

      <div className="row g-4 align-items-center">
        {/* Image du film */}
        <div className="col-md-4">
          <div className="card shadow-sm border-0">
            <img
              src={film.Poster}
              alt={film.Title}
              className="card-img-top rounded"
            />
          </div>
        </div>

        {/* Infos du film */}
        <div className="col-md-8">
          <div className="card border-0 shadow-sm p-4">
            <h1 className="h3 mb-3">{film.Title}</h1>

            <div className="d-flex flex-wrap gap-2 mb-3">
              {film.Year && (
                <span className="badge bg-primary rounded-pill">
                  Année : {film.Year}
                </span>
              )}
              {film.Type && (
                <span className="badge bg-dark rounded-pill text-uppercase">
                  {film.Type}
                </span>
              )}
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
}
