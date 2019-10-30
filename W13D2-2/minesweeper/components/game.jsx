import React from 'react';
import * as Minesweeper from '../minesweeper';
import Board from './board';
import Modal from './modal';
import Difficulty from './form';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.numbers = [];
        this.state = {
          board: new Minesweeper.Board(...this.numbers),
          showModal: false,
          difficulty: "Easy"
        };
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSetup = this.handleSetup.bind(this);
        this.handleChange = this.handleSetup.bind(this);
    }

    updateGame(tile, isFlagged) {
        if(isFlagged) {
          tile.toggleFlag();
        } else {
            tile.explore();
        };
        this.setState({board: this.state.board}, () => {
            const {board, showModal} = this.state
            if ((board.won() || board.lost()) && !showModal) {
                this.toggleModal();
            }
        });
    }

    restartGame(e) {
      e.stopPropagation();
      this.setState({
        board: new Minesweeper.Board(...this.numbers),
        showModal: false
      });
    }

    toggleModal() {
      this.setState({showModal: !this.state.showModal});
    }
    
    handleChange(e) {
      e.preventDefault();
      this.setState({difficulty: e.target.value});
    }
    
    handleSetup(e) {
      e.preventDefault();
      let difficulty = this.state.difficulty;
      if (difficulty === "Easy") {
        this.numbers = [9, 9, 10];
      } else if (difficulty === "Medium") {
        this.numbers = [9, 19, 20];
      } else {
        this.numbers = [9, 29, 30];
      }
    }

    render() {
      let modal = null;
      if (this.state.showModal) {
        modal = <Modal game={this}/>;
      }

      let setup = null;
      if (this.state.difficulty) {
        setup = (
          <Board board={this.state.board} updateGame={this.updateGame}/>
        )
      } else {
        setup = <Difficulty game={this}/>;
      }
        
      return (
        <div className="board">
          {modal}
          {setup}
        </div>
      );
    }
}

export default Game;