import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

import { Container, Header, Button } from 'semantic-ui-react'
import TextContainer from './components/text-container.js'
import InputBox from './components/input-box.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: '',
      showTimerBlock: false,
      wordCount: 0
    }
    this.strip = this.strip.bind(this)
    this.getWordCount = this.getWordCount.bind(this)
    this.renderTimerBlock = this.renderTimerBlock.bind(this)
  }

  strip(html) {
     var tmp = document.createElement("DIV");
     tmp.innerHTML = html;
     return tmp.textContent || tmp.innerText || "";
  }

  getWordCount(content) {
    console.log('The word count is : ' + content.split(" ").length)
    return content.split(" ").length;
  }

  componentDidMount() {
    axios.get('http://www.randomtext.me/api/')
      .then((response) => {
        console.log(response.data.text_out)
        this.setState({
          content: this.strip(response.data.text_out),
          wordCount: this.getWordCount(response.data.text_out)
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  renderTimerBlock() {
    if(!this.state.showTimerBlock) {
      return false
    }
    else {
      return(
        <div className="timer-block">
          <div className="word-count">
            {'Word count : '  + this.state.wordCount}
          </div>
          <div className="typing-box">
            <InputBox changeHandler={(e, data) => { console.log('Handled change : ' + e.key) }} />
          </div>
        </div>
      )
    }
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
          <div className={"start-button-block " + (this.state.showTimerBlock ? "hide" : "visible")}>
            <Button primary onClick={() => { this.setState({ showTimerBlock: true }) }}>Start timer</Button>
          </div>
          {this.renderTimerBlock()}
        </Container>
      </div>
    );
  }
}

export default App;
