import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

import { Container, Header } from 'semantic-ui-react'
import TextContainer from './components/text-container.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
    this.strip = this.strip.bind(this)
  }

  strip(html) {
     var tmp = document.createElement("DIV");
     tmp.innerHTML = html;
     return tmp.textContent || tmp.innerText || "";
  }

  componentDidMount() {
    axios.get('http://www.randomtext.me/api/')
      .then((response) => {
        console.log(response.data.text_out)
        this.setState({
          content: this.strip(response.data.text_out)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2 className="heading">
            Type-it.
          </h2>
        </header>
        <Container text>
          <p className="App-intro">
            A game to measure your typing speed.
          </p>
          <TextContainer content={this.state.content} />
        </Container>
      </div>
    );
  }
}

export default App;
