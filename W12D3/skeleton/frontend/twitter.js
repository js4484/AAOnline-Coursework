const followToggle = require('./follow_toggle');

$(function (){
  const $toggles = $("button.follow-toggle")
  $toggles.each((i, button) => new followToggle(button));

})
