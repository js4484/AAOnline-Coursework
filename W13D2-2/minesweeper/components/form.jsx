import React from 'react';

class Difficulty extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="setup">
        <h3>Choose Your Difficulty:</h3>
        
        <label>
          Easy 
          <input type="radio" name="difficulty" value="Easy" checked={this.props.game.state.difficulty === "Easy"} onChange={this.props.game.handleChange}></input>
        </label>
        <label>
          Medium 
          <input type="radio" name="difficulty" value="Medium" checked={this.props.game.state.difficulty === "Medium"} onChange={this.props.game.handleChange}></input>
        </label>
        <label>
          Hard
          <input type="radio" name="difficulty" value="Hard" checked={this.props.game.state.difficulty === "Hard"} onChange={this.props.game.handleChange}></input>
        </label>

        <button onClick={this.props.game.handleSetup}>Play</button>
      </form>
    )
  }
}

export default Difficulty