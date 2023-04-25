export function check(status) {
    if(status == "Good"){
        return "ml-10 bg-green-500";
    }else if(status == "Medium"){
      return "ml-10 bg-yellow-400";
    }else if(status == "Really Bad"){
      return "ml-10 bg-red-700";
    }
    else {return "ml-10 bg-red-500";}
}

export function rounded(val) {
    if (!val) {
      return null;
    } else {
      return val.toFixed(2);
    }
  }

export function TempCheck(val){
  if(val >= 18 && val <= 24 ){
    return "ml-10 bg-green-500";
  }else if(val < 18 || val > 24){
    return "ml-10 bg-red-500";

  }
}

export function checkDay(index, value){

  switch(index){
    case 0:
      return "Monday: " + rounded(value * 100) + "%";
    case 1:
      return "Tuesday: " + rounded(value * 100) + "%";
    case 2:
      return "Wednesday: " + rounded(value * 100) + "%";
    case 3:
      return "Thursday: " + rounded(value * 100) + "%";
    case 4:
      return "Friday: " + rounded(value * 100) + "%";
    case 5:
      return "Saturday: " + rounded(value * 100) + "%";
    default:
      return "Sunday: " + rounded(value * 100) + "%";

  }

}