import { initializeApp } from "firebase/app";
import "firebase/app";

import { getDatabase, ref, set, update, onValue } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0PjT0hCV-9QpmwxNeWz0QZwdh4iPdYQQ",
  authDomain: "meister-mimi.firebaseapp.com",
  databaseURL:
    "https://meister-mimi-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "meister-mimi",
  storageBucket: "meister-mimi.appspot.com",
  messagingSenderId: "876451638333",
  appId: "1:876451638333:web:2097cc532d2234434f4e54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
//is the blueprint for the Firebase structured data

//Adds a basic set of data overall
const add_data_overall_vorlage = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let time;
  if (minutes < 10) {
    time = `${hours}:${"0" + minutes}`;
  } else {
    time = `${hours}:${minutes}`;
  }

  return {
    [time]: {
      H20: 0.1,

      CO2: 0.04,

      O2: 0.2,

      N2: 0.78,
    },
  };
};
//Basic data
const data = {
  H20: Math.random() * (0.02 - 0.01) + 0.02,

  CO2: Math.random() * (0.0005 - 0.0003) + 0.0005,

  O2: 0.2,

  N2: Math.random() * (0.8 - 0.65) + 0.8,
};

//Adds the vorlage
export function add_vorlage() {
  set(ref(db, "Arduino/"), {
    devices: blueprint,
  })
    .then(() => {
      console.log("data inserted");
    })
    .catch(() => {
      console.log("data not inserted...");
    });
}

//First check if a day is already in the database
//under data_overall if yes the programm will
//add data with a timestamp else the programm will
//create a new object with the current date as key
//and the data as value

export function new_data_overall(random_id, date_now) {
  console.log("startet writing...");
  let TRUE = false;
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let time;
  if (minutes < 10) {
    time = `${hours}:${"0" + minutes}`;
  } else {
    time = `${hours}:${minutes}`;
  }
  if (!TRUE) {
    //Date already in the database just add the data
    update(
      ref(
        db,
        "Arduino/devices/" + random_id + "/data_overall/" + date_now + "/"
      ),
      {
        [time]: data,
      }
    );
  } else {
    //Create a new object with the current date as key
    set(ref(db, "Arduino/devices/" + random_id + "/data_overall"), {
      [date_now]: add_data_overall_vorlage(),
    });
  }

  console.log("finished writing...");
}
//Fetches data from the database further comments will be added later
export function get_current_data(randomId, callback) {
  const starCountRef = ref(db, "Arduino/devices/" + randomId + "/current_data");
  onValue(starCountRef, (snapshot) => {
    let data = snapshot.val();

    let current_data = [data.O2, data.N2, data.CO2 * 1000];
    callback(current_data);
  });
}

function calculate(temp, rh) {
  let a = 17.27;

  let b = 237.7;
  /*
  The values for a and b are commonly used 
  in the equation to calculate the dew point. 
  These values come from the Magnus-Tetens approximation formula, 
  which is commonly used in meteorology and weather forecasting.
  */

  let gamma = (a * temp) / (b + temp) + Math.log(rh / 100);
  let dp = (b * gamma) / (a - gamma);
  return dp.toFixed(2);
}

export function get_CO2_overtime(callback) {
  let statref = ref(db, "/Arduino/devices/random_id/co2ppm/pmm");

  let data = [];

  onValue(statref, (snapshot) => {
    let t = snapshot.val();
    t = t * 1000
    
    data.push(
      t ,
      t,
      t,t,t
    );
  });

  callback(data);
}

export function future_values() {
  let statref = ref(db, "/Arduino/devices/random_id/current_data/CO2");
  let CO;
  onValue(statref, (snapshot) => {
    CO = snapshot.val() * 1000;
  });

  const neededValues = 3;

  const rise = CO - (CO - 0.01);
  let results = [];
  results.push(CO - 0.01, CO);
  for (let i = 0; i < neededValues; i++) {
    let test = results[1 + i] + rise;
    results.push(test);
  }
  return results;
}

export async function get_AirQualtiy(callback) {
  const statref = ref(db, "/Arduino/devices/random_id/current_data/AirQualtiy");
  let airQualtiy = [];
  onValue(statref, (snapshot) => {
    airQualtiy.push(snapshot.val());
    airQualtiy.push(AirQualityCheck(airQualtiy));
  });

  callback(airQualtiy);
}

function AirQualityCheck(AirQuality) {
  switch (AirQuality[0]) {
    case 1:
      return "Good";
    case 2:
      return "Medium";
    case 3:
      return "Bad";
    default:
      return "Really Bad";
  }
}

export async function getRH(callback) {
  const statref = ref(db, "/Arduino/devices/random_id/RH/Now");
  let RH = [];
  onValue(statref, (snapshot) => {
    RH.push(snapshot.val());
  });

  callback(RH);
}

export function getLastWeek(callback) {
  const statref = ref(db, "/Arduino/devices/random_id/LastWeek");
  let LastWeek = {};

  onValue(statref, (snapshot) => {
    let alldata = snapshot.val();
    LastWeek["Monday"] = alldata.Monday;
    LastWeek["Tuesday"] = alldata.Tuesday;
    LastWeek["Wednesday"] = alldata.Wednesday;
    LastWeek["Thursday"] = alldata.Thursday;
    LastWeek["Friday"] = alldata.Friday;
    LastWeek["Saturday"] = alldata.Saturday;
    LastWeek["Sunday"] = alldata.Sunday;
  });

  callback(LastWeek);
}

export function getTempLast5Min(callback) {
  const statref = ref(db, "/Arduino/devices/random_id/TempOverTime");
  let TempOvertime = [];

  onValue(statref, (snapshot) => {
    let alldata = snapshot.val();
    TempOvertime.push(alldata.zero);
    TempOvertime.push(alldata.one);
    TempOvertime.push(alldata.two);
    TempOvertime.push(alldata.three);
    TempOvertime.push(alldata.four);

  });

  callback(TempOvertime);
}

export function getTempNow(callback) {
  const statref = ref(db, "/Arduino/devices/random_id/Temp/Now");
  let getTempNow;

  onValue(statref, (snapshot) => {
    getTempNow = snapshot.val();
  });

  callback(getTempNow);
}

export function setDay() {
  
  set(ref(db, "/Arduino/devices/random_id/Today"),checkDay(new Date()))
  
}

function checkDay(Date){
  
  switch (Date.getDay()) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4: 
      return "Thursday";
    case 5: 
      return "Friday";
    default:
      return "Saturday";
  }
 
}

export function future_data () {


let b = (ty-Tyt)/(t2-Tt2);
let ty = 1 * data1 + 2 * data2 + 3 * data3 + 4 * data4 + 5* data5;
let Tyt = 5 * y *3;
let y = 1/5 * (data1 + data2 + data3 + data4 + data5);
let t2 = 55;
let Tt2 = 5 * 9;
let a = y - b * 3;
let mt = a + b*minute;
}

export function makeTimeStamp(data){
  //Make func for Temp




  set(ref(db, "/Arduino/devices/random_id/CO2OverTime/zero"),data.zero )
  set(ref(db, "/Arduino/devices/random_id/CO2OverTime/one"),data.one)
  set(ref(db, "/Arduino/devices/random_id/CO2OverTime/two"),data.two )
  set(ref(db, "/Arduino/devices/random_id/CO2OverTime/three"),data.three )
  set(ref(db, "/Arduino/devices/random_id/CO2OverTime/four"),data.four )

}

export function makeTimeStampTemp(data){
  //Make func for Temp




  set(ref(db, "/Arduino/devices/random_id/TempOverTime/zero"),data.zero )
  set(ref(db, "/Arduino/devices/random_id/TempOverTime/one"),data.one)
  set(ref(db, "/Arduino/devices/random_id/TempOverTime/two"),data.two )
  set(ref(db, "/Arduino/devices/random_id/TempOverTime/three"),data.three )
  set(ref(db, "/Arduino/devices/random_id/TempOverTime/four"),data.four )

}

export async function getCO2FB(callback) {
  const statref = ref(db, "/Arduino/devices/random_id/current_data/CO2");
  let co2 = [];
  onValue(statref, (snapshot) => {
    co2 = snapshot.val()
  });

  callback(co2)
}

export async function getCO2OverTimeFB(callback) {
  const statref = ref(db, "/Arduino/devices/random_id/CO2OverTime/");
  let CO2OverTime = [];
  onValue(statref, (snapshot) => {
      let data = snapshot.val();
      CO2OverTime = [data.zero, data.one, data.two, data.three, data.four]
  });

  callback(CO2OverTime)
}

export async function getSingleData( callback) {
  const startref = ref(db, "/Arduino/devices/random_id/Temp/Now")
  let data1 = []
  onValue(startref, (snapshot) => {
    data1 = snapshot.val();
  })

  callback(data1)
}