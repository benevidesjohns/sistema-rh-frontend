import { useContext, useEffect } from 'react';

import './styles.css';

import ItemVaga from '../../components/item-vaga';
import { JobsContext } from '../../contexts/jobs';

const JobPage = () => {
  const { list, updated, setUpdated, jobs } = useContext(JobsContext);

  useEffect(() => {
    if (!updated) {
      list()
      setUpdated(true)
    }
  }, [])

  const jobList = jobs.map((job) => {
    return <ItemVaga key={job.id} job={job} isClosed={false} />
  });

  return (
    <section className='page'>
      <h1 className='title center page-title'>Vagas</h1>
      <div className='content'>
        <ul className='jobs-list'>
          {jobList}
        </ul>
      </div>
    </section>
  );
}

export default JobPage;
