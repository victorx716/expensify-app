import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default}
// child_removed event

// database.ref('expenses').on('child_removed', () => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());  
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());  
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((expense) => {
//       expenses.push({
//         id: expense.key,
//         ...expense.val()
//       })
//     });
//     console.log(expenses)
//   });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((expense) => {
//     expenses.push({
//       id: expense.key,
//       ...expense.val()
//     })
//   });  
//   console.log(expenses)
// })

// database.ref('expenses').push({
//   description: 'rent',
//   note: '',
//   amount: 8888,
//   createdAt: 39533
// })

// database.ref('expenses').push({
//   description: 'boba',
//   note: '',
//   amount: 878,
//   createdAt: 3953343
// })

// database.ref('expenses').push({
//   description: 'fewd',
//   note: '',
//   amount: 1111838,
//   createdAt: 3434333
// })



// database.ref('notes/-LpBiSwV-gDxikTT9dGj').remove();

// database.ref('notes').push({
//   title: 'course topics',
//   body: 'react native, angular'
// });
// const notes = [{
//   id: '12',
//   body: 'this is my note',
//   title: 'first note:',
// }, {
//   id: '13',
//   body: 'this is my 2nd note',
//   title: 'second note:',  
// }]

// database.ref('notes').set(notes)
// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })
// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('error fetching data, ', e)
//   })

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

