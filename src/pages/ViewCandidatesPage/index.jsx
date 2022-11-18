import './styles.css';

import { JobsContext } from '../../contexts/jobs';
import { useContext } from 'react';

const ViewCandidatesPage = ({job}) => {

  const { jobs } = useContext(JobsContext);

  return (
    <section className='page'>
      <h1 className='title center page-title'>Visualizar Candidatos</h1>
      <div className='content'>

        <div className="content-view-candidates">
          <h1 className='component-title'>a</h1>
          <h3 className='description-font description-job'>a</h3>
        </div>

      </div>
    </section>
  );
}

export default ViewCandidatesPage;
