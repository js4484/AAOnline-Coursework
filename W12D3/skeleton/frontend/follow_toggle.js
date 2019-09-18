const APIUtil = require ('./APIUtil')

  class followToggle { 
    constructor(el){
      this.$el = $(el);
      this.userId = this.$el.data("user-id");
      this.followState = this.$el.data('initial-follow-state');
      this.render();

      this.$el.on("click", this.handleClick.bind(this));
      }


    render() {
      console.log(this.followState);
        if(this.followState === "unfollowed"){
            this.$el.text("follow");
            this.$el.prop('disabled', false);
        } else {
            this.$el.text("unfollow");
            this.$el.prop('disabled', false);
        }
    }

    handleClick(e) {
      // debugger;
      const fT = this;
        e.preventDefault(); 
        if (fT.followState === 'unfollowed'){
          this.followState = 'following'
          this.$el.prop('disabled', true);
          APIUtil.followUser(fT.userId).then(
          () => this.successFollow());
          } else {
            this.followState = 'unfollowing'
            this.$el.prop('disabled', true);
            APIUtil.unfollowUser(fT.userId).then(
            () => this.successUnfollow());
          }
      }

    successFollow() {
      console.log('Follow Success');
      const fT = this;
      fT.followState = 'followed';
      fT.render()
    }
    successUnfollow() {
        console.log('Unfollow Success');
        const fT = this;
        fT.followState = 'unfollowed';
        fT.render()}

    error() {
      console.log('Follow Unsuccessful');
    }
  };

module.exports = followToggle;