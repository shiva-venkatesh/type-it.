import React, { Component } from 'react'
import axios from 'axios'
import { Input } from 'semantic-ui-react'

import './input-box.css'

export default class InputBox extends Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {

  }

  render() {
    <Input placeholder='Start typing...' onChange={this.props.changeHandler} />
  }
}
