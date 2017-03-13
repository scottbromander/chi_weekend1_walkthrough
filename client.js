var currentPerson = 0;
var elementArray = [];

var timer;

$(document).ready(function (){
  for(var i = 0; i < peopleArray.length; i++){
    appendPeople(peopleArray[i], i);
  }

  showPerson();

  $(".prev").on("click", prevPerson);
  $(".next").on("click", nextPerson);
  timer = setInterval(interval, 3000);
});

function interval(){
  nextPerson();
}

function prevPerson(){
  clearInterval(timer);
  $(".container").fadeOut(2000, function(){
    currentPerson -= 1;
    if(currentPerson < 0){
      currentPerson = peopleArray.length - 1;
    }
    showPerson();
    $(".container").fadeIn(2000);
    timer = setInterval(interval, 3000);
  });
}

function nextPerson(){
  clearInterval(timer);
  $(".container").fadeOut(2000, function(){
    currentPerson += 1;
    if(currentPerson >= peopleArray.length){
      currentPerson = 0;
    }
    showPerson();
    $(".container").fadeIn(2000);
    timer = setInterval(interval, 3000);
  });
}

function showPerson(){
  for(var i = 0; i < elementArray.length; i++){
    if(elementArray[i].data("id") === currentPerson){
      elementArray[i].show();
    } else {
      elementArray[i].hide();
    }
  }

  $("#personShown").text("Chiyak: " + (currentPerson + 1) + "/" + peopleArray.length);
}

function appendPeople(person, index){
  $(".container").append("<div></div>");
  var $el = $(".container").children().last();
  $el.append("<p>" + person.name + "</p>");
  $el.append("<p>" + person.shoutout + "</p>");
  $el.hide();
  $el.data("id", index);
  elementArray.push($el);
  console.log($el.data());
}
