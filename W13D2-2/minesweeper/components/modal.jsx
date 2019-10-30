import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.game = this.props.game;
  }

  
    
  render() {
    let text = this.game.state.board.won() ? 'Congrats! You survived!' : 'Yay! You died!';
    return (
      <div className="modal-screen" onClick={this.game.toggleModal}>
          <div className="modal-content">
              <p>{text}</p>
              <button onClick={this.game.restartGame}>Play Again?</button>
          </div>
      </div>
    );
  }
};



export default Modal;
