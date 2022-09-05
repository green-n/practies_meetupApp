
import react, { useState } from 'react';
import Navbar from './components/Navbar';

import { auth } from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Chat from './components/chat';
import PleaseLogIn from './components/PleaseLogIn';


const styles = {
  appContainer: 'max-w-[728px] mx-auto text-center',
  sectionContainer: 'flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative'}


  function App() {

    const [checkUser] = useAuthState(auth);
    // const [scroll, setScroll] = useState({})
    // const returnScroll =(scroll)=>{
    //   setScroll(scroll)
    //   return scroll
    // }

  return (
    <div className= {styles.appContainer} >
      <section className={styles.sectionContainer}>
        <Navbar />
        {checkUser == undefined?<PleaseLogIn/> : <Chat />}
      </section>
      
    </div>
  );
}



export default App;
