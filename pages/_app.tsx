import '../styles/globals.css'
import { UserContext } from '../lib/context';
import { useUserData } from '../lib/hooks';

import Navbar from '../components/Navbar';
import {Toaster} from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  const userData = useUserData();

  return (
    <UserContext.Provider value={userData}>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </UserContext.Provider>
  );
}

// Below statement fixes: Error: The default export is not a React Component in page: "/_app"
export default MyApp;