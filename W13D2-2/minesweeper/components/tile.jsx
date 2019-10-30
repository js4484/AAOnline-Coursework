import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
      const isFlagged = event.altKey ? true : false;
      this.props.updateGame(this.props.tile, isFlagged);
    }

    render (){
        const tile = this.props.tile;
        let klass, symbol, number;
        if (tile.explored) {
          if (tile.bombed) {
              klass = 'bombed';
              symbol = '💣';
          } else {
            klass = 'explored';
            number = tile.adjacentBombCount();
            symbol = (number > 0 ? `${number}` : '');
          }
         
        } else if (tile.flagged) {
          klass = 'flagged';
          symbol = '\u2691';
        } else {
          klass = 'null';
        }
        klass += ' tile';
        klass += ` num-${number}`
        return (
          <div className={klass} onClick={this.handleClick}>{symbol}</div>
        );
    }
};

export default Tile;