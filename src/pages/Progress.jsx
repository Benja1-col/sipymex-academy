function Progress() {
  const completed = Number(
    localStorage.getItem("completedTutorials") || 0
  );

  const total = 4;

  const percentage = (completed / total) * 100;

  const resetProgress = () => {
    localStorage.removeItem("completedTutorials");
    window.location.reload();
  };

  return (
    <div className="container mt-5">

      <h1>Mi Progreso</h1>

      <p>
        Tutoriales completados: {completed}/{total}
      </p>

      <div className="progress mb-3">

        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${percentage}%` }}
        >
          {Math.round(percentage)}%
        </div>

      </div>

      <button
        className="btn btn-danger"
        onClick={resetProgress}
      >
        Reiniciar progreso
      </button>

    </div>
  );
}

export default Progress;