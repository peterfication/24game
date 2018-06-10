import React from 'react'
import { render } from 'react-dom'

import { random, solve } from './24Solver'

type Props = {}
export class App extends React.Component<Props> {
  constructor() {
    super()
    this.random = this.random.bind(this)
    this.state = {
      game: [0, 0, 0, 0],
      solutions: [],
    }
  }

  random() {
    const game = random()
    this.setState({
      game,
      solutions: solve(game),
    })
  }

  render() {
    const { game, solutions } = this.state
    const [i1, i2, i3, i4] = this.state.game
    return (
      <div class="ui container">
        <h1 class="ui header">24 Game</h1>

        <div class="ui two column grid">
          <div class="row">
            <div class="column">
              <center>
                <div class="ui green massive label">{i1}</div>
              </center>
            </div>
            <div class="column">
              <center>
                <div class="ui green massive label">{i2}</div>
              </center>
            </div>
          </div>
          <div class="row">
            <div class="column">
              <center>
                <div class="ui green massive label">{i3}</div>
              </center>
            </div>
            <div class="column">
              <center>
                <div class="ui green massive label">{i4}</div>
              </center>
            </div>
          </div>
        </div>

        <div class="ui divider" />

        <button onClick={this.random} class="ui fluid primary button massive">
          Generate!
        </button>

        <div class="ui segment">
          <div class="ui relaxed divided list">
            {solutions.map(solution => (
              <div class="item" key={solution}>
                <div class="content">
                  <div class="header">{solution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
