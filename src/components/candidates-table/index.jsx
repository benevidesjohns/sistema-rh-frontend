import './styles.css';

const CandidatesTable = ({ candidates }) => {

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
      </div>
    )
  }

  return (
    <div className="jobcandidates-table">
      <Cabecalho values={["", "Nome", "Email", "Telefone"]} />
      {candidates.map((candidate) => {
        return <CandidateRow key={candidate.id} candidate={candidate} />
      })}
    </div>
  );
}

export default CandidatesTable;
