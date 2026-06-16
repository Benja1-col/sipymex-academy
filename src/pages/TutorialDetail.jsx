import { useParams } from "react-router-dom";
import tutorials from "../data/tutorials";

function TutorialDetail() {
  const { id } = useParams();

  const tutorial = tutorials.find(
    (t) => t.id === Number(id)
  );

  if (!tutorial) {
    return (
      <div className="container mt-5">
        <h1>Tutorial no encontrado</h1>
      </div>
    );
  }

  const handleComplete = () => {
    const current = Number(
      localStorage.getItem("completedTutorials") || 0
    );

    localStorage.setItem(
      "completedTutorials",
      current + 1
    );

    alert("Tutorial completado correctamente");
  };

  return (
    <div className="container mt-5">

      <div className="card shadow border-0">

        <div className="card-body p-4">

          <h1>{tutorial.title}</h1>

          <p className="text-muted">
            {tutorial.description}
          </p>

          <div className="ratio ratio-16x9 my-4">

            <iframe
              src="https://www.youtube.com/embed/ATXMJOEt6zc"
              title="Video Tutorial"
              allowFullScreen
            ></iframe>

          </div>

          <div className="row">

            <div className="col-md-6">

              <h4>Información</h4>

              <ul>
                <li>Duración: 5 minutos</li>
                <li>Nivel: Básico</li>
                <li>Modalidad: Video Tutorial</li>
              </ul>

            </div>

            <div className="col-md-6">

              <h4>Objetivos</h4>

              <ul>
                <li>Comprender el proceso.</li>
                <li>Aplicarlo en Nova.</li>
                <li>Realizar la tarea correctamente.</li>
              </ul>

            </div>

          </div>

          <hr />

          <h4>Pasos</h4>

          <ol>
            <li>Ingresar al sistema Nova.</li>
            <li>Seleccionar el módulo correspondiente.</li>
            <li>Completar la operación.</li>
            <li>Guardar cambios.</li>
          </ol>

          <button
            className="btn btn-success btn-lg mt-3"
            onClick={handleComplete}
          >
            ✓ Marcar como completado
          </button>

        </div>

      </div>

    </div>
  );
}

export default TutorialDetail;