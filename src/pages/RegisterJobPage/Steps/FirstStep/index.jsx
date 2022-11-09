import Input from "../../../../components/input";

// const Validator = () => {
//   console.log('Step 1 - OK');
// }

const FirstStep = () => {
  return (
    <section>
      <div className="step-area first-step-area">
        <h1 className='title' >Escolha um título de uma descrição para a vaga</h1>
        <div className="area-geral-inf">
          <Input label='Título da vaga' typeInput='title-job' onChange={() => { }} />
          <Input label='Descrição da vaga' typeInput='description-job' onChange={() => { }} />
        </div>

      </div>
    </section>
  );
}

// export function Validator();

export default FirstStep;
