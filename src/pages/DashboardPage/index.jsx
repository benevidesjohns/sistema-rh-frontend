import React from "react";
import Card from "./Card";
import "./styles.css";

const DashboardPage = () => {
  return (
    <section className="page">
      <h1 className="title center page-title">Dashboard</h1>
      <div className="content">
        <div className="grid">
          <Card title='Atividades Recentes' showList={false} />
          <Card title='Avaliações Pendentes' />
          <Card title='Finalizados Recentemente' />
          <Card title='Finalizados Recentemente' />
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
