// declaring the variables refering to the buttons'ID
const btEntry = document.getElementById('bt-entry');
const btExit = document.getElementById('bt-exit');
const btReload = document.getElementById('bt-reload');


// declaring the variables refefing to the paragraphs's ID
const pEntry = document.getElementById('p-entry');
const pExit = document.getElementById('p-exit');
const pResult = document.getElementById('p-result');
const pLog = document.getElementById('p-log');



// decalring 2 global variables for the counters
let counterEntry = 0 ;
let counterExit = 0 ;


// variable that stores the results every 2 seconds
const storeResult = setInterval(showResult, 1000);



// function that returns the time
function getTime()
{
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const time = `${hours}:${minutes}:${seconds}`;

  return time;
}



// function that shows the results
function showResult()
{
  pLog.innerHTML = `${getTime()} : ${result()} people`; 
}




// functions that calculate the entries and the exists
const entry = () =>
 {

   counterEntry += 1;
   pEntry.innerHTML = counterEntry;
   return counterEntry;
};

const exit = () =>
 {
    counterExit += 1;
    pExit.innerHTML = counterExit;
    return counterExit;
  };




// function that calculates the number of people in the building
const result = () =>
  {
    const res = counterEntry - counterExit;
    pResult.innerHTML = `<strong>${res}</strong> people in the building.`;
    return res;
  }; 


 
// event listener for the buttons
btEntry.addEventListener('click', ()=>
{
  entry();
  result();
});

btExit.addEventListener('click', () =>
{
  exit();
  result();
});

btReload.addEventListener('click', () =>
{
  const answer = confirm("Are you sure ?");

  if(answer)
  {
    document.location.reload(true);
  }
});
