import React from 'react';
import Tile from './tile';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.renderAllRows = this.renderAllRows.bind(this);
        this.renderAllSquares = this.renderAllSquares.bind(this);
    }

    render() {
      return (
          <div className="board">
              {this.renderAllRows()}
          </div>
      )
    }

    renderAllRows() {
      return this.props.board.grid.map((row, i) => {
        return (
          <div key={i} className="rows">
            {this.renderAllSquares(row, i)}
          </div>
        )
      })
    }

    renderAllSquares(row, i) {
      return row.map((tile, j) => {
        return (
          <Tile tile={tile} key={i * this.props.board.gridSize + j} updateGame={this.props.updateGame} />
        )
      })
    }
};

export default Board;