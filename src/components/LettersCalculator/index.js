// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: ''}

  onEnterLetters = event => {
    this.setState({lettersCount: event.target.value})
  }

  render() {
    const {lettersCount} = this.state

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="text-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label className="label" htmlFor="letter">
                Enter the phrase
              </label>
              <br />
              <input
                className="input"
                type="text"
                placeholder="Enter the phrase"
                id="letter"
                onChange={this.onEnterLetters}
              />
            </div>
            <div className="result-container">
              <p className="result" type="button">
                No.of letters: {lettersCount.length}
              </p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
