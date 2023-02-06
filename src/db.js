import { initializeApp } from "firebase/app";
import "firebase/app";

import { getDatabase, ref, set } from "firebase/database";

/* 

  random_id: {
    current_data: {
      H20: "",

      CO2: "",

      O2: "",

      N2: "",
    },

    data_overall: {
      "01.01.01": {
        "12:01": {
          H20: "",

          CO2: "",

          O2: "",

          N2: "",
        },

        "12:02": {
          H20: "",

          CO2: "",

          O2: "",

          N2: "",
        },

        "12:03": {
          H20: "",

          CO2: "",

          O2: "",

          N2: "",
        },

        "12:04": {
          H20: "",

          CO2: "",

          O2: "",

          N2: "",
        },
      },
    },
  },
*/
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

export function store() {
  set(ref(db, "CO2/"), {
    CO2: Math.random() * (0.05 - 0.03) + 0.05,
  })
    .then(() => {
      console.log("data inserted");
    })
    .catch(() => {
      console.log("data not inserted...");
    });
}
