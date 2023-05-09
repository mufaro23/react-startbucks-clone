import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDFPOEapzE2otnYAjcgGRf-gc7tbK0MX00',
  authDomain: 'starbucks-clone.firebaseapp.com',
  projectId: 'starbucks-clone',
  storageBucket: 'starbucks-clone.appspot.com',
  messagingSenderId: '852007719923',
  appId: '1:852007719923:web:4c57f4ef9782f81026f886',
})

const auth = firebaseApp.auth()

export { auth }
