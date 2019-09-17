class HanoiView {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupTowers();
    // this.render();
  }

  setupTowers() {
    for (let towerIdx = 0; towerIdx < 3; towerIdx++) {
      const $tower = $("<ul>").addClass("tower").data("id", towerIdx);
      $tower.appendTo(this.$el);
      for (let levelIdx = 0; levelIdx < 3; levelIdx++) {
        $("<li>").addClass("level").data("id", levelIdx).data("disc-size", 0).appendTo($tower);
      }
    }
    
    $(".tower")
      .filter( idx => idx === 0)
      .children(".level")
      .each( (idx, level) => $(level).data("disc-size", idx + 1) );
  }

  // render() {
  //   this.game.towers.forEach((tower, towerIdx) => {
  //       const $tower = $(".tower").filter((idx) => idx === towerIdx);
  //       this.tower.forEach((disc, levelIdx) => {
  //          const $level = $tower.children(".level").filter((idx) => idx === (2 - levelIdx)); 
  //       });
  //   });
  // }
  // this.game.towers[$tower.data("towerIdx")][$level.data("levelIdx")]
}

module.exports = HanoiView;