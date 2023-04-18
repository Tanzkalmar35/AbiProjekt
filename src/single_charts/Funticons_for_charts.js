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