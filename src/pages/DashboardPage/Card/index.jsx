import './styles.css'

const PendingReviews = () => {
  return (
    <div className="area-peding-jobs">

      <div className="pending-job">
        <p>João da Silva</p>
        <p>Operador</p>
        <button>Reenviar</button>
      </div>

      <div className="pending-job">
        <p>João da Silva</p>
        <p>Operador</p>
        <button>Reenviar</button>
      </div>

      <div className="pending-job">
        <p>João da Silva</p>
        <p>Operador</p>
        <button>Reenviar</button>
      </div>

      <div className="pending-job">
        <p>João da Silva</p>
        <p>Operador</p>
        <button>Reenviar</button>
      </div>

    </div>
  );
}

const RecentActivities = () => {
  return (
    <div className="container-job">

      <div className="job-office">
        <p>Gerente de Projetos</p>
        <div className="description">
          <p>Aberto há 23 dias</p>
          <p>Candidatos: 6</p>
        </div>

        <div className="button-job">
          <button>Acessar</button>
        </div>
      </div>

      <div className="job-office">
        <p>Designer</p>
        <div className="description">
          <p>Aberto há 23 dias</p>
          <p>Candidatos: 6</p>
        </div>

        <div className="button-job">
          <button>Acessar</button>
        </div>
      </div>

    </div>
  );
}

const Card = ({ title, showList = true }) => {
  return (
    <div className="grid-item">
      <h1 className="section-title">{title}</h1>

      {showList ? <PendingReviews /> : <RecentActivities />}
      <button className="button-container">Ver todas</button>

    </div>
  );
}

export default Card;
