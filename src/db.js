import { initializeApp } from "firebase/app";
import "firebase/app";

import { getDatabase, ref, set, update } from "firebase/database";
const blueprint = {
  random_id: {
    current_data: {
      H20: 0.1,

      CO2: 0.04,

      O2: 0.2,

      N2: 0.78,
    },

    data_overall: {
      "01-01-23": {
        "12:01": {
          HH20: 0.1,

          CO2: 0.04,

          O2: 0.2,

          N2: 0.78,
        },

        "12:02": {
          H20: 0.1,

          CO2: 0.04,

          O2: 0.2,

          N2: 0.78,
        },

        "12:03": {
          H20: 0.1,

          CO2: 0.04,

          O2: 0.2,

          N2: 0.78,
        },

        "12:04": {
          H20: 0.1,

          CO2: 0.04,

          O2: 0.2,

          N2: 0.78,
        },
      },
    },
  },
};

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

const data = {
  H20: 0.1,

  CO2: 0.04,

  O2: 0.2,

  N2: 0.78,
};

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
    update(ref(db, "Arduino/devices/" + random_id + "/data_overall/" + date_now +"/"), {
      [time]: data,
      
    });

    
  } else {
    //Create a new object with the current date as key
    set(ref(db, "Arduino/devices/" + random_id + "/data_overall"), {
      [date_now]: add_data_overall_vorlage(),
    });
  }

  console.log("finished writing...");
}
