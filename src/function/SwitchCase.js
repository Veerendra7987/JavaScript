let dayOfWeek = 2;
 let dayName;
 switch (dayOfWeek) {
   case 1:      dayName = "Sunday";
      break;
   case 2:      dayName = "Monday";
      break;
   default:
      dayName = "Invalid Day";
 }
 console.log(`Today is ${dayName}`);
