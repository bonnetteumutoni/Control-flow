//Write a program that takes an array of days like "Mon", "Tue", and "Fri" and uses a switch statement to print what type of delivery is scheduled on each day.
const deliveryType=(deliveries)=>{
    deliveries.forEach(delivery=> {
        switch(delivery){
        case "Monday":
            console.log("Pancake delivery");
            break;
            case "Tuesday":
                console.log("Milk delivery");
                break;
            case "Wednesday":
                console.log("Food delivery");
                break;
            case "Thursday":
                console.log("Icecream delivery");
                break;
            case "Friday":
                console.log("Pancake delivery");
                 break;
            default:
                console.log("delivery not found");
                break;
        }})
    }
    const daysArray=["Monday","Tuesday","Wednesday","Thursday","Friday"];
    deliveryType(daysArray);

   // Create a program that loops through an array of book statuses and prints "Ready to lend" if the status is "available" or 
   // "Checked out" if the status is "borrowed".
   function bookStatuses(status){
    for(let i=0;i<status.length;i++){
    if(status[i]=="available"){
        console.log("Ready to lend");
    }else {
        console.log("Checked out");
    }
   }}
   bookStatuses(["available","Borrowed"])

   //Given an array of customer ages, write a program that checks each age and prints "Adult" if the age is 18 or above, and "Minor" otherwise.

   function checkAge(age){
    if(age>18){
        console.log("Adult")
    }else{
        console.log("Minor")
    }
   }
   checkAge(23);
   checkAge(12);

  // Write a program using a while loop that simulates a countdown of lives in a game starting from 5 and prints "You have X lives left" on each loop until it reaches 0.
  function countdownLives(){
    let lives=5;
    while(lives>=0){
        console.log(`You have ${lives} left`);
        lives--;
    }
  }
  countdownLives();

  //Using a do...while loop, write a program that loops through an array of user feedback and prints each comment until the array is empty.
  function printComment(comments){
    let i=0;
    do{
        console.log(comments[i]);
         i++;
    }while(i<comments.length)
  }
  printComment(["Fun","Weird","Good"]);

  //Write a program that loops through an array of user login statuses and prints "Welcome back!" if the user is "logged in" or "Please log in" otherwise.
  function loginStatus(statusDetails){
  for(let i=0;i<statusDetails.length;i++){
    if(statusDetails[i]=="logged in"){
        console.log("Welcome back!")
    }else{
        console.log("Please log in")
    }
  }
  }
loginStatus(["logged in","not logged in"])


 // Write a program that processes an array of support ticket priorities using a switch statement to print how quickly each one should be addressed 
 // based on whether the priority is "low", "medium", or "high".
 const ticketPriorities=(priorities)=>{
    priorities.forEach(priority=>{
        switch(priority){
            case "high":
                console.log("High priority ticket");
                break;
            case "medium":
                console.log("Medium priority ticket");
                break;
            case "low":
            console.log("Low priority ticket");
            break;
            default:
            console.log("Invalid ticket");
            break;
        }
    }

    )
 }
 const priorityType=["high","medium","low"];
 ticketPriorities(priorityType);


 //Create a while loop that simulates a quiz countdown from 10 seconds, printing each number until it reaches 0.
 const quizCountdown=()=>{
    let seconds=10;
    while(seconds>=0){
        console.log(`Remaining ${seconds} seconds`);
        seconds--;
    }
 }
 quizCountdown();