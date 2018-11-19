import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBGHPN2xIhiRAkHKiPxTXUtqxSIHonabs8",
  authDomain: "techbase-dc1407.firebaseapp.com",
  databaseURL: "https://techbase-dc1407.firebaseio.com",
  storageBucket: "techbase-dc1407.appspot.com"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const authentication=firebase.auth()
const database=firebase.database()

export function signin(user,password){
	return authentication.signInWithEmailAndPassword(user,password)
}
export function signup(user,password){
	return authentication.createUserWithEmailAndPassword(user,password)
}
export function create(collection){
	return database.ref(collection)
}
export function list(collection){
	return database.ref(collection)
}
