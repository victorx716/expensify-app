import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCDMs1HNBDOsTO6oClY9kzzAHwGl5r3IB0",
  authDomain: "expensify-13072.firebaseapp.com",
  databaseURL: "https://expensify-13072.firebaseio.com",
  projectId: "expensify-13072",
  storageBucket: "expensify-13072.appspot.com",
  messagingSenderId: "492271180077",
  appId: "1:492271180077:web:fbf0182d60bae28c405ba4"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref()
  .once('value')
  .then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
  })
  .catch((e) => {
    console.log('error fetching data, ', e)
  })

// database.ref().set({
//   name: 'Victor Liu',
//   age: 24,
//   isSingle: true,
//   job: {
//     title: 'software dev',
//     company: 'Google'
//   },
//   stressLevel: 6,
//   location: {
//     city: 'Los Angeles',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved')
// }).catch((e) => {
//   console.log('error: ', e)
// })

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// }).then(() => {
//   console.log('new job updated')
// }).catch((e) => {
//   console.log('error: ', e)
// })

// passing null is equivalent to setting remove
// database.ref('isSingle').set(null);
// let takeItOff = database.ref('isSingle');

// takeItOff.remove()
//   .then(() => {
//     console.log('remove succeeded')
//   }).catch(() => {
//     console.log('remove it aint work')
//   })

