import * as MdIcon from 'react-icons/md';

import './styles.css';

import IconButton from '../icon-button';

const CandidatesTable = ({ candidates, all = false }) => {
  const values = [
    "", "Nome", "Email", "Telefone"
  ]

  const allValues = [
    "", "Nome", "Email", "Telefone", "Questionário", "Nota", "Afinidade", "Detalhes"
  ]

  const setCurrentCandidate = (candidate) => {
    localStorage.setItem("currentCandidate", JSON.stringify(candidate))
  }

  const Cabecalho = ({ values }) => {
    return (
      <div className='table-row'>
        {values.map((value) => {
          return (
            <p
              key={value}
              className={`table-row-${value ? 'item' : 'checkbox'}`}
            >{value}</p>
          )
        })}
      </div>
    )
  }

  const CandidateRow = ({ candidate }) => {
    return (
      <div className='table-row'>
        <input className='table-row-checkbox' type='checkbox' name='check-candidate' />
        <p className='table-row-item'>{candidate.name}</p>
        <p className='table-row-item'>{candidate.email}</p>
        <p className='table-row-item'>{candidate.phone}</p>
        {all && <p className='table-row-item'>{candidate.quizStatus}</p>}
        {all && <p className='table-row-item'>
          {candidate.quizNote || "-"}
        </p>}
        {all && <p className='table-row-item'>-</p>}
        {all && <div className='table-row-item'>
          <IconButton
            icon={<MdIcon.MdAdd />}
            onClick={() => setCurrentCandidate(candidate)}
          />
        </div>}
      </div>
    )
  }

  return (
    <div className="column jobcandidates-table">
      <Cabecalho values={all ? allValues : values} />
      {candidates.map((candidate) => {
        return <CandidateRow key={candidate.id} candidate={candidate} />
      })}
    </div>
  );
}

export default CandidatesTable;
