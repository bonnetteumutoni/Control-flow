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
    if(status=="Ready"){
        console.log("Ready to lend");
    }else if(status=="Available"){
        console.log("Available");
    }else{
        console.log("Borrowed")
    }
   }
   bookStatuses(["Ready","Available","Borrowed"])

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