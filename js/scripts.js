var ideaCount = 100;
var $title = $('#title-input');
var $body = $('#body-input');

//creating new ideabox
function NewIdea() {
  this.id = ideaCount;
  this.title = $title.val();
  this.body = $body.val();
  /*jshint multistr: true */
  this.html =
    "<article class='idea-box' id=" + "'" + this.id + "'" + ">\
        <div class='flexer'>\
          <h2>" + this.title + "</h2>\
          <button type='button' name='button' class='delete-button'></button>\
        </div>\
        <p>" + this.body + "</p>\
        <div class='quality-container'>\
          <article class='quality'>" + 1 + "</article>\
          <button type='button' name='button' class='up-button'></button>\
          <button type='button' name='button' class='down-button'></button>\
          <h4 class='quality-rating'>quality : swill</h4>\
        </div>\
    </article>";
    ideaCount++;
}

//storage functionality
function setIdeaStorage(id, object) {
  localStorage.setItem(id, JSON.stringify(object));
}

function ideaCountStorage(id) {
  localStorage.setItem('ideaCountTracker', id);
}

function getStorage(id) {
  return JSON.parse(localStorage.getItem(id));
}

function deleteIdeaStorage(id) {
  localStorage.removeItem(id);
}

function loadStorage () {
  for (var i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) === 'ideaCountTracker') {
      ideaCount = localStorage.getItem(i);
    }
    else {
      var ideaInfo = getStorage(localStorage.key(i));
      $('.idea-container').prepend(ideaInfo.html);
    }
  }
}

//button functionality
$('#save-button').on('click', function() {
    var newIdeaBox = new NewIdea();
    setIdeaStorage(newIdeaBox.id, newIdeaBox);
    ideaCountStorage(newIdeaBox.id);
    $('#title-input').val('');
    $('#body-input').val('');
    $('.idea-container').prepend(newIdeaBox.html);
  });

$('.idea-container').on('click', '.delete-button', function() {
    $(this).parent().parent().remove();
});

$('.idea-container').on('click', '.up-button', function() {
    var qualitynumber = $(this).siblings('.quality').val();
    var qualitynumbernew = qualitynumber++;
    $(this).siblings('.quality').text(qualitynumbernew);
});

$(document).ready(function() {
  loadStorage();
});
