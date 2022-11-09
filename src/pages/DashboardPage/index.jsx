import React, { useContext } from "react";
import "./styles.css";

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

const DashboardPage = () => {
  return (
    <section className="page">
      <div>
        <h1 className="title">Dashboard</h1>
        <div className="grid">
          <div className="grid-item">
            <h1>Atividades Recentes</h1>

            <RecentActivities />
            <button className="button-container">Ver todas</button>

          </div>
          <div className="grid-item">
            <h1>Avaliações Pendentes</h1>

            <PendingReviews />
            <button className="button-container">Ver todas</button>

          </div>
          <div className="grid-item">
            <h1>Finalizados Recentemente</h1>

            <PendingReviews />
            <button className="button-container">Ver todas</button>

          </div>
          <div className="grid-item">
            <h1>Finalizados Recentemente</h1>

            <PendingReviews />
            <button className="button-container">Ver todas</button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
