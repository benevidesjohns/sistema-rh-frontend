import React, { useState, Component } from 'react';

import './styles.css';
import Sidebar from '../../components/sidebar';
import Input from '../../components/input';

import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

const ContentStep1 = ({ titleStep }) => {
  return (
    <section>
      <div className="area-step1">
        <h1 className='title' >{titleStep}</h1>
        <div className="area-geral-inf">

          <Input label='Título da vaga' typeInput='title-job' onChange={() => { }} />
          <Input label='Descrição da vaga' typeInput='description-job' onChange={() => { }} />
        </div>

      </div>
    </section>
  );
}

const ContentStep2 = ({ titleStep }) => {

  class VolumeSlider extends Component {
    constructor(props) {
      super(props)
      this.state = {
        volume: 0
      }
    }

    handleOnChange = (value) => {
      if (value < 25) {
        value = 0;
      } else if (value >= 25 && value < 75) {
        value = 50;
      } else {
        value = 100;
      }
      this.setState({
        volume: value
      })
    }

    render() {
      let { volume } = this.state
      return (
        <div className="slider">
          <Slider
            value={volume}
            tooltip={false}
            orientation="horizontal"
            onChange={this.handleOnChange}
            labels={{ 0: '|', 50: '|', 100: '|' }}
          />
        </div>
      )
    }
  }

  return (
    <section>
      <div className="area-step2">
        <h1 className='title' >{titleStep}</h1>
        <div className="area-slider">

          <div className="line-volume-slider">
            <h3>Colaborativo</h3>
            <VolumeSlider />
            <h3>Independente</h3>
          </div>

          <div className="line-volume-slider">
            <h3>Reservado</h3>
            <VolumeSlider />
            <h3>Sociável</h3>
          </div>
          <div className="line-volume-slider">
            <h3>Intenso</h3>
            <VolumeSlider />
            <h3>Paciente</h3>
          </div>

          <div className="line-volume-slider">
            <h3>Impulsivo</h3>
            <VolumeSlider />
            <h3>Vigilante</h3>
          </div>

        </div>
      </div>
    </section>
  );
}

const JobPage = () => {
  const step1Content = <ContentStep1 titleStep="Escolha um título de uma descrição para a vaga" />;
  const step2Content = <ContentStep2 titleStep="Objetivo dos candidatos para a vaga" />;
  const step3Content = <ContentStep1 titleStep="Link do formulário da vaga para os candidatos" />;

  function step1Validator() { }

  function step2Validator() { }

  function step3Validator() { }

  function onFormSubmit() { }

  return (
    <section className='page'>
      <Sidebar />
      <div className="step-progress">
        <StepProgressBar
          startingStep={0}
          onSubmit={onFormSubmit}
          steps={[
            {
              label: 'Informações gerais',
              name: 'Etapa 1',
              content: step1Content,
              // validator: step1Validator
            },
            {
              label: 'Objetivos',
              name: 'Etapa 2',
              content: step2Content,
              // validator: step2Validator
            },
            {
              label: 'Link',
              name: 'Etapa 3',
              content: step3Content,
              // validator: step3Validator
            }
          ]}
          previousBtnName="Voltar"
          nextBtnName="Avançar"
          submitBtnName='Finalizar'
        />;
      </div>
    </section>
  );
}

export default JobPage;
