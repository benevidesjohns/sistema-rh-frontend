import * as MdIcon from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { differenceInDays } from 'date-fns';

import { ThreeDots } from 'react-loader-spinner';

import './styles.css';
import { JobsContext } from '../../../contexts/jobs';
import { ROUTES } from '../../../routes/paths';

import Button from '../../../components/button';
import TextIconButton from '../../../components/text-icon-button';

const Card = ({ title, showList = true }) => {
  const navigate = useNavigate()

  const { list, jobs } = useContext(JobsContext);

  const [jobsList, setJobsList] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      if (!jobsList) {
        list().then(_ => {
          setJobsList(true);
          setLoading(false)
        })
      }
    }, 500);
  }, [jobsList]);

  const PendingReviews = () => {
    return (
      <div className="area-pending-jobs">

        <div className="pending-job">
          <MdIcon.MdPerson />
          <p>João da Silva</p>
          <p>Operador</p>
          <TextIconButton leading={<MdIcon.MdSend />} title='Reenviar' />
        </div>

        <div className="pending-job">
          <MdIcon.MdPerson />
          <p>João da Silva</p>
          <p>Operador</p>
          <TextIconButton leading={<MdIcon.MdQueryBuilder />} title='Reenviar' />
        </div>

        <div className="pending-job">
          <MdIcon.MdPerson />
          <p>João da Silva</p>
          <p>Operador</p>
          <TextIconButton leading={<MdIcon.MdSend />} title='Reenviar' />
        </div>
      </div>
    );
  }

  const JobCard = ({ job }) => {
    const showJobCandidates = () => {
      localStorage.setItem("currentJob", JSON.stringify(job));
      localStorage.removeItem("currentCandidate");
      navigate(ROUTES.JOB_CANDIDATES);
    }

    const diasAbertura = differenceInDays(new Date(), new Date(job.createdAt));

    return (
      <div className="job-office">
        <h1 className='title center component-title'>{job.title}</h1>
        <div className="description">
          <div className="area-number-candidate-job">
            <MdIcon.MdPerson />
            <p><strong>Candidatos: {job.candidates.length}</strong></p>
          </div>
          <p>
            {diasAbertura == 0 && "Aberta Hoje"}
            {diasAbertura == 1 && "Aberta Ontem"}
            {diasAbertura > 1 && `Aberta há ${diasAbertura} dias`}
          </p>
        </div>

        <div className="button-job">
          <TextIconButton
            title='Acessar'
            onClick={showJobCandidates}
          />
        </div>
      </div>
    )
  }

  const RecentActivities = ({ jobs }) => {
    return (
      <div className="container-job">
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={false}
        />
        {jobs.length > 0 && <JobCard job={jobs[0]} />}
        {jobs.length > 1 && <JobCard job={jobs[1]} />}
        {jobs.length == 0 &&
          <h1 className='title center component-title'>
            Não há vagas cadastradas
          </h1>
        }
      </div>
    );
  }

  return (
    <div className="grid-item">
      <h1 className="section-title">{title}</h1>
      {showList
        ?
        <PendingReviews />
        : !loading &&
        <RecentActivities jobs={jobs} />
      }
      <Button label='Ver todas' event={() => navigate(ROUTES.JOBS)} />
    </div>
  );
}

export default Card;
