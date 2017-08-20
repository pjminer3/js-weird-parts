// long running function
function waitThreeSeconds() {
    var ms = 3000 + new Date().getTime();
    while (new Date() < ms){}
    console.log('finished function');
}

function clickHandler() {
    console.log('click event!');   
}

// listen for the click event
document.addEventListener('click', clickHandler);

waitThreeSeconds();  // this runs the 3 second wait when the file is loaded
console.log('finished execution');

/* 
  The when there are clicks made while the page is loading (the 3 seconds spent in the while loop) 
  console will not log 'click event!'.  It waits until the while loop is complete.  All the click
  events get in a line que until the JS is done running.  Only after JS is done, the global execution
  context is collapsed, will it start processing events in the queue.  
*/ 