import Input from "../../../../components/input";
import './styles.css';

// const Validator = () => {
//   console.log('Step 1 - OK');
// }

const FirstStep = () => {
  return (
    <section>
      <div className="step-area first-step-area">
        <h1 className='title section-title' >Escolha um título de uma descrição para a vaga</h1>
        <div className="area-form">
          <div className="form">
            <Input label='Título da vaga' typeInput='title-job' onChange={() => { }} />
            <Input label='Descrição da vaga' typeInput='description-job' onChange={() => { }} />
          </div>
        </div>

      </div>
    </section>
  );
}

// export function Validator();

export default FirstStep;
