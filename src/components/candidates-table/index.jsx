import { useState } from 'react';
import * as MdIcon from 'react-icons/md';

import './styles.css';

import TextIconButton from '../text-icon-button';

const CandidatesTable = ({ candidates, all = false, onClickCompare }) => {
  const [selectedCandidates, setSelectedCandidates] = useState([])
  const [checked, setChecked] = useState(
    new Array(candidates.length).fill(false)
  );

  const values = ["", "Nome", "Email", "Telefone"]

  const allValues = [
    "Nome", "Email", "Telefone", "Questionário", "Nota", "Afinidade", "Requisitos"
  ]

  const changeSelectedCandidates = (candidate) => {
    const listCandidates = [...selectedCandidates];
    const index = listCandidates.indexOf(candidate);
    if (index === -1) {
      listCandidates.push(candidate);
    } else {
      listCandidates.splice(index, 1);
    }
    setSelectedCandidates(listCandidates);
    localStorage.setItem(
      "selectedCandidates",
      JSON.stringify(listCandidates)
    );
  }

  const Cabecalho = ({ values }) => {
    return (
      <div className={`table-row ${all ? 'w1200' : 'w800'}`}>
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

  const CandidateRow = ({ candidate, index }) => {
    const handleChange = () => {
      changeSelectedCandidates(candidate);
      const tempChecked = [...checked]
      tempChecked[index] = !tempChecked[index]
      setChecked(tempChecked)
    }

    const Afinity = () => {
      const job = JSON.parse(localStorage.getItem("currentJob"));
      const reqsJob = [];
      for (let req in job.requisites) {
        reqsJob.push(job.requisites[req])
      }

      const reqsCand = [];
      for (let req in candidate.VagasCandidates.requisites) {
        reqsCand.push(candidate.VagasCandidates.requisites[req])
      }

      const percent = reqsJob.map((reqJob, i) => {
        return (100 - Math.abs(reqJob - reqsCand[i]) * 25)
      })

      const result = percent.reduce((prev, value) => prev + value) / 40;

      return (
        <p className='table-row-item'>
          {candidate.VagasCandidates.requisites
            ? Math.round(result)
            : "-"
          }
        </p>
      );
    }

    return (
      <div className={`table-row ${all ? 'w1200' : 'w800'}`}>
        {!all &&
          <input
            className='table-row-checkbox'
            type='checkbox'
            name='check-candidate'
            id={`checkbox-${candidate.id}`}
            onChange={handleChange}
            checked={checked[index]}
          />
        }
        <p className='table-row-item'>{candidate.name}</p>
        <p className='table-row-item'>{candidate.email}</p>
        <p className='table-row-item'>{candidate.phone}</p>
        {all && <p className='table-row-item'>
          {candidate.VagasCandidates.quizStatus}
        </p>}
        {all && <p className='table-row-item'>
          {candidate.VagasCandidates.quizNote || "-"}
        </p>}
        {all && <Afinity />}
        {all && <div className='table-row-item'>
          <TextIconButton
            center={false}
            title='Comparar'
            leading={<MdIcon.MdRadioButtonChecked />}
            onClick={
              () => {
                candidate.VagasCandidates.requisites &&
                onClickCompare(candidate)
              }
            }
          />
        </div>}
      </div>
    )
  }

  return (
    <div className={`column jobcandidates-table ${all ? 'w1200' : 'w800'}`}>
      <Cabecalho values={all ? allValues : values} />
      {candidates.map((candidate, index) => {
        return <CandidateRow
          key={candidate.id}
          index={index}
          candidate={candidate}
        />
      })}
    </div>
  );
}

export default CandidatesTable;
