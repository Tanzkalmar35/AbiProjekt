export function check(status) {
    if(status == "Good"){
        return "pl-10 bg-green-500";
    }else {return "pl-10 bg-red-500";}
}

export function rounded(val) {
    if (!val) {
      return null;
    } else {
      return val.toFixed(2);
    }
  }