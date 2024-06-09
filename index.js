import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, Timestamp } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

import express from 'express';
const port = process.env.PORT || 3000; 

const firebaseConfig = {
  apiKey: "AIzaSyD66K86K1z9f6yfHYXuBVaMBidIvp28IR4",
  authDomain: "obd2-testing.firebaseapp.com",
  projectId: "obd2-testing",
  storageBucket: "obd2-testing.appspot.com",
  messagingSenderId: "770647700560",
  appId: "1:770647700560:web:dc8d88aaaf383cacf08d55"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const collection = "obd-data";

const app = express()
app.use(express.json());

app.get('/', function (req, res) {
    res.send({ hello: "World" })
});

app.post('/', async (req, res) => {
    const { body } = req;
    console.log(body);
    await setDoc(doc(db, collection, uuidv4()), body);
    res.send(req.body);
})

app.listen(port)