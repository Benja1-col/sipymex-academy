import { Link } from "react-router-dom";
import tutorials from "../data/tutorials";

function Tutorials() {
  return (
    <div className="container mt-5">

      <h1 className="mb-4">Tutoriales</h1>

      {tutorials.map((tutorial) => (
        <Link
          key={tutorial.id}
          to={`/tutorial/${tutorial.id}`}
          className="text-decoration-none"
        >
          <div className="card mb-3 shadow-sm">

            <div className="card-body">

              <h5 className="text-dark">
                {tutorial.title}
              </h5>

              <p className="text-dark">
                {tutorial.description}
              </p>

              <span className="badge bg-primary">
                {tutorial.duration}
              </span>

            </div>

          </div>
        </Link>
      ))}

    </div>
  );
}

export default Tutorials;