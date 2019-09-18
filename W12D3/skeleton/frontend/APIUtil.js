// const followToggle = require('./follow_toggle')
 

const APIUtil = {
  followUser: id => {
    return $.ajax({
        url: `/users/${id}/follow`,
        method: "POST",
        dataType: 'json'
        // success: () => {
        //   console.log('Follow Success');
          
        //   followToggle.followState = 'followed';
        //   followToggle.render();
        // },
        // error() {
        //   console.log('Follow Unsuccessful');
        // }
    })},

  unfollowUser: id => {
    return $.ajax({
          url: `/users/${id}/follow`,
          method: "DELETE",
          dataType: 'json'
          
          // success: () => {
          //   console.log('Unfollow Success');
          //   followToggle.followState = 'unfollowed';
          //   followToggle.render();
          // },
          // error() {
          //   console.log('Unsucessful!')
          // }
        })}}
module.exports = APIUtil;
