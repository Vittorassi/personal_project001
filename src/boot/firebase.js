// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnQPvDvgO4Bs8hu7xcCRARoIU8xhGBNN0",
  authDomain: "personal-project-90b53.firebaseapp.com",
  projectId: "personal-project-90b53",
  storageBucket: "personal-project-90b53.appspot.com",
  messagingSenderId: "907747246451",
  appId: "1:907747246451:web:998981fef952af575ec506"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db

/**
 * ! import db from 'src/boot/firebase'
 * * Usar o comando acima em todo e qualquer arquivo que for fazer alguma conexão com o firebase
 * ? O projeto não será inicializado com o firebase em escopo global, por isso é necessário o import do database
 * */