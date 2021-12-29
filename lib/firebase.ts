import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlXveCl_n2l2Uep19M0AAawM6CWj6Ju74",
    authDomain: "nextfire-27123.firebaseapp.com",
    projectId: "nextfire-27123",
    storageBucket: "nextfire-27123.appspot.com",
    messagingSenderId: "228199091126",
    appId: "1:228199091126:web:09b8d0c771bde7b5078f17"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const firestore = firebase.firestore();

// Storage exports
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
 export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
  }
  
  /**`
   * Converts a firestore document to JSON
   * @param  {DocumentSnapshot} doc
   */
  export function postToJSON(doc) {
    const data = doc.data();
    return {
      ...data,
      // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
      createdAt: data.createdAt.toMillis(),
      updatedAt: data.updatedAt.toMillis(),
    };
  }

  export const fromMillis = firebase.firestore.Timestamp.fromMillis;
  export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
  export const increment = firebase.firestore.FieldValue.increment;
  