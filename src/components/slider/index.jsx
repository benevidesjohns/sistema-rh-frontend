import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import './styles.css'

const CustomSlider = ({ showLabels, enable, values, candidateValues }) => {

  class VolumeSlider extends Component {
    constructor(props) {
      super(props)
      this.state = {
        volume: props.value,
        volume2: props.valueExtra
      }
    }

    handleOnChange = (value) => {
      if (value < 12.5) {
        value = 0;
      } else if (value > 12.5 && value < 37.5) {
        value = 25;
      } else if (value > 37.5 && value < 62.5) {
        value = 50;
      } else if (value > 62.5 && value < 87.5) {
        value = 75;
      } else {
        value = 100;
      }
      this.setState({
        volume: value
      })
    }

    render() {
      let { volume, volume2 } = this.state
      return (
        <div className="slider">
          <Slider
            value={volume}
            tooltip={false}
            orientation="horizontal"
            onChange={enable && this.handleOnChange}
            labels={showLabels && { 0: '|', 25: '|', 50: '|', 75: '|', 100: '|' }}
          />
          {candidateValues &&
            <div className='candidate-slider'>
              <Slider
                value={volume2}
                tooltip={false}
                orientation="horizontal"
              />
            </div>
          }
        </div>
      )
    }
  }

  return (
    <div className="area-slider">

      <div className={`line-volume-slider ${showLabels && 'with-labels'}`}>
        <h3 className='description-box description-bold'>Colaborativo</h3>
        <VolumeSlider
          value={values.independente * 25}
          valueExtra={candidateValues && candidateValues.independente * 25}
        />
        <h3 className='description-box description-bold'>Independente</h3>
      </div>

      <div className={`line-volume-slider ${showLabels && 'with-labels'}`}>
        <h3 className='description-box description-bold'>Reservado</h3>
        <VolumeSlider
          value={values.sociavel * 25}
          valueExtra={candidateValues && candidateValues.sociavel * 25}
        />
        <h3 className='description-box description-bold'>Sociável</h3>
      </div>
      <div className={`line-volume-slider ${showLabels && 'with-labels'}`}>
        <h3 className='description-box description-bold'>Intenso</h3>
        <VolumeSlider
          value={values.paciente * 25}
          valueExtra={candidateValues && candidateValues.paciente * 25}
        />
        <h3 className='description-box description-bold'>Paciente</h3>
      </div>

      <div className={`line-volume-slider ${showLabels && 'with-labels'}`}>
        <h3 className='description-box description-bold'>Impulsivo</h3>
        <VolumeSlider
          value={values.vigilante * 25}
          valueExtra={candidateValues && candidateValues.vigilante * 25}
        />
        <h3 className='description-box description-bold'>Vigilante</h3>
      </div>

    </div>
  )
}

export default CustomSlider
