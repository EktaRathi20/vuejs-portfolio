
import { initializeApp, } from "firebase/app";
import { getDatabase} from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCwa6QeWUYJSVerYkhWLVEzhPpxP-LyLe0",
  authDomain: "vuejs-chat-app-c2827.firebaseapp.com",
  databaseURL: "https://vuejs-chat-app-c2827-default-rtdb.firebaseio.com",
  projectId: "vuejs-chat-app-c2827",
  storageBucket: "vuejs-chat-app-c2827.appspot.com",
  messagingSenderId: "294278282627",
  appId: "1:294278282627:web:ea0351d0656ed8405c4ab6"
};

var fire = initializeApp(firebaseConfig);
const db = getDatabase(fire)
export default db


