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
      <div>
        <h1>24 Game</h1>

        <div>
          <button onClick={this.random}>Generate!</button>
        </div>

        <ul>
          <li>{i1}</li>
          <li>{i2}</li>
          <li>{i3}</li>
          <li>{i4}</li>
        </ul>

        <ul>{solutions.map(solution => <li key={solution}>{solution}</li>)}</ul>
      </div>
    )
  }
}

render(<App />, document.getElementById('app'))
