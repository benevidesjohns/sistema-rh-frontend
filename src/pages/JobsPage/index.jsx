import { useContext, useEffect } from 'react';

import './styles.css';
import { ROUTES } from '../../routes/paths'
import { JobsContext } from '../../contexts/jobs';

import ItemVaga from '../../components/item-vaga';
import EmptyPage from '../../components/empty-page';

const JobsPage = () => {
  const { list, updated, setUpdated, jobs } = useContext(JobsContext);

  useEffect(() => {
    if (!updated) {
      list()
      setUpdated(true)
    }
  }, [])

  const JobsList = () => {
    return (
      <ul className='jobs-list'>{
        jobs.map((job) => {
          return (
            <div key={job.id}>
              <ItemVaga job={job} />
              <div className='horizontal-separator'></div>
            </div>
          )
        })
      }</ul>

    )
  }

  return (
    <section className='page'>
      <h1 className='title center page-title'>Vagas</h1>
      <div className='content'>{
        jobs.length > 0
          ? <JobsList />
          : <EmptyPage
            title="Nenhuma Vaga Cadastrada"
            label="Cadastrar Vaga"
            path={ROUTES.CREATE_JOB}
          />
      }</div>
    </section>
  );
}

export default JobsPage;
