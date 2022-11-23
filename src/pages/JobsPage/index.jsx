import { useContext, useEffect, useState } from 'react';

import './styles.css';
import { ROUTES } from '../../routes/paths'
import { JobsContext } from '../../contexts/jobs';

import ItemVaga from '../../components/item-vaga';
import EmptyPage from '../../components/empty-page';

const JobsPage = () => {
  const { list, jobs } = useContext(JobsContext);

  const [jobsList, setJobsList] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(async () => {
      if (!jobsList) {
        await list()
        setJobsList(true);
      }
      setLoading(false)
    }, 500);
  }, [jobsList]);

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
      <div className='content row center'>{
        jobs.length > 0
          ?
          !loading && <JobsList />
          :
          !loading && <div className="area-empty-table">
            <EmptyPage
              title="Nenhuma Vaga Cadastrada"
              label="Cadastrar Vaga"
              path={ROUTES.CREATE_JOB}
            />
          </div>
      }</div>
    </section>
  );
}

export default JobsPage;
