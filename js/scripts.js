var ideaCount = 100;
var $title = $('#title-input');
var $body = $('#body-input');

function NewIdea() {
  this.id = 'UID' + ideaCount;
  this.title = $title.val();
  this.body = $body.val();
  this.quality = 3;
  /*jshint multistr: true */
  this.html = "<article class='idea-box'>\
      <h2>" + this.title + "</h2>\
      <div class='quality-container'>\
      <button type='button' name='button' id='delete-button'></button>\
      <p>" + this.body + "</p>\
      <button type='button' name='button' id='up-button'></button>\
      <button type='button' name='button' id='down-button'></button>\
      <h4 id='quality-rating'>quality : swill</h4>\
      </div>\
    </article>";
  ideaCount++;
}

function setStorage(object) {
  localStorage.setItem(object.id, JSON.stringify(object));
}

function getStorage(id) {
  return JSON.parse(localStorage.getItem(id));
}

$('#save-button').on('click', function() {
    var newIdeaBox = new NewIdea();
    setStorage(newIdeaBox);
    $('#title-input').val('');
    $('#body-input').val('');
    $('.idea-container').append(newIdeaBox.html);
  });
