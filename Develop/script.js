// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
//it will print on html pag
    // ashlinganson app
    // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

  
//   // makes a little clock that shows current time, updates every second
// var timeDisplayEl = $("#time-display");
// function displayTime() {
//   var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
//   timeDisplayEl.text(rightNow);
// }
// setInterval(displayTime, 1000);


// 1. refresh function to get time
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);
 // create list of hours-list/array
  var Hours = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
  

// 2. to delete everything lines 46-74

//   // variable to div class -container to create time blocks
//   var planner = $('.container');
//   var Hours = [
// "9",
// "10",
// "11",
// "12",
// "13",
// "14",
// "15",
// "16",
// "17",
// ];
// // function to display hrs
// function displayhours() {
//   const d = new Date();
//   let hour = d.getHours();
//   // alert(hour);
//   for (let i=0; i<Hours.length; i++) {
//   }
// }
// // function to create time column
// function createTimeColumn() {
//   // var timeEl = 
// }
// 3. create divs to poputate the HTML file, a new element w are going to append/add to html document, hour replaced with id
// hr replaced  with ${id}, it will be id1, 2,3 ,4, etc
// also replace div class future with div class-${divClass}
// in the text area - we give a class , unique class, when we get elements form this area description${id}, we will use this class
// at the very end of the button, we will create an eventListener function- when button clicked onclick="saveme(${id})", we are going to perform action

function createDiv(id, divClass) {
    return '<div id="hour-'+id+'" class="row time-block '+divClass+'"><div class="col-2 col-md-1 hour text-center py-3">'+id+'</div><textarea class="col-8 col-md-10 description description'+id+'" rows="3"></textarea><button class="btn saveBtn col-2 col-md-1" area-label="save" onclick="saveme('+id+')"><i class="fas fa-save" aria-hidden="true"></i></button></div>'
}
// 4. create function to display hours( past present or future)
function desplayHours() {
  // initialize date
  const d = new Date();
  // create new variable-hr, get hr in a date 24 hr format
  let hour = d.getHours();
  // for loop-as long as i les then list length, we do i++ , 1 , then 2 etc
  // alert(hour);
  for (let i=0; i < Hours.length; i++) {
    // console.log(i)
    if (i < hour){
      // console.log('past')
      div = createDiv(Hours[i],'past')
    }else if (i == hour){
      div = createDiv(Hours[i],'present')
    }else{
      div = createDiv(Hours[i],'future')
    }
    // create new variable - get container out of html body, to append /add div to html
    var main = document.getElementById('mainContent')
    main.innerHTML += div
  }
  
}
// 5. create function to save schedule in local storage
function saveme (id) {
  divclass = '.description'+id;
  var task = $(divclass).val();
  if (task.length >3) {
    localStorage.setItem(id, task)
  }
}
// 6.  create function to get schedule form local storage
function getList(){
  for (let i=0; i<Hours.length; i++) {
    divclass = '.description'+i;
    if (localStorage.getItem(i) != null) {
      $(divclass).val(localStorage.getItem(i))
    }
  }
}

