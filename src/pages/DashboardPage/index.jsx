import React, { useContext } from "react";
import { AuthContext } from '../../contexts/auth'
import "./styles.css";

import Sidebar from '../../components/sidebar';

const DashboardPage = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <section className="page">

      <Sidebar onLogout={handleLogout}/>

      <div>
        <h1 className="title">Dashboard</h1>
        <div className="grid">
          <div className="grid-item">
            <h1>Atividades Recentes</h1>
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

            <button className="button-container">Ver todas</button>
          </div>
          <div className="grid-item">
            <h1>Avaliações Pendentes</h1>
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
            <button className="button-container">Ver todas</button>
          </div>
          <div className="grid-item">
            <h1>Finalizados Recentemente</h1>

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
            <button className="button-container">Ver todas</button>
          </div>
          <div className="grid-item">
            <h1>Finalizados Recentemente</h1>

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
            <button className="button-container">Ver todas</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
