import * as firebase from 'firebase'

const config={
    apiKey: "AIzaSyDU0dCz5v6WTSreO54E7KwZ3r2RGw4xNYc",
    authDomain: "fir-4d90b.firebaseapp.com",
    databaseURL: "https://fir-4d90b.firebaseio.com",
    projectId: "fir-4d90b",
    storageBucket: "fir-4d90b.appspot.com",
}



if (!firebase.apps.length) {
   firebase.initializeApp(config);
}

export default firebase