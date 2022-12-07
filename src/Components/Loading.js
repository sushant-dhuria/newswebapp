
import React, { Component } from 'react'
import spin from './spin.gif'
export default class Loading extends Component {


  render() {
    return (
      <div className='text-center'>
        <img src={spin} alt="spinner" />
      </div>
    )
  }
}
