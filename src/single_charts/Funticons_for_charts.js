export function check(status) {
    if(status == "Good"){
        return "bg-green-500";
    }else {return "bg-red-500";}
}

export function rounded(val) {
    if (!val) {
      return null;
    } else {
      return val.toFixed(2);
    }
  }