import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import './styles.css'

const CustomSlider = ({ showLabels, enable, values }) => {

  class VolumeSlider extends Component {
    constructor(props) {
      super(props)
      this.state = {
        volume: props.value | 50,
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
            onChange={enable && this.handleOnChange}
            labels={showLabels && { 0: '|', 50: '|', 100: '|' }}
          />
        </div>
      )
    }
  }

  return (
    <div className="area-slider">

      <div className={`line-volume-slider ${showLabels && 'with-labels'}`}>
        <h3 className='description-box description-bold'>Colaborativo</h3>
        <VolumeSlider value={values && values.independente * 50} />
        <h3 className='description-box description-bold'>Independente</h3>
      </div>

      <div className={`line-volume-slider ${showLabels && 'with-labels'}`}>
        <h3 className='description-box description-bold'>Reservado</h3>
        <VolumeSlider value={values && values.sociavel * 50} />
        <h3 className='description-box description-bold'>Sociável</h3>
      </div>
      <div className={`line-volume-slider ${showLabels && 'with-labels'}`}>
        <h3 className='description-box description-bold'>Intenso</h3>
        <VolumeSlider value={values && values.paciente * 50} />
        <h3 className='description-box description-bold'>Paciente</h3>
      </div>

      <div className={`line-volume-slider ${showLabels && 'with-labels'}`}>
        <h3 className='description-box description-bold'>Impulsivo</h3>
        <VolumeSlider value={values && values.vigilante * 50} />
        <h3 className='description-box description-bold'>Vigilante</h3>
      </div>

    </div>
  )
}

export default CustomSlider
