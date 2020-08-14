import Rebase from 're-base';
import firebase from 'firebase';


// API isn't hidden currently, so isn't secure
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCljo197J2V2Y3uRvHsE9SCrN-VUaNd8qI',
  authDomain: 'ebwesbos.firebaseapp.com',
  databaseURL: 'https://ebwesbos.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

//named export
export { firebaseApp };

//default export

export default base;
