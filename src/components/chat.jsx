import { onSnapshot, orderBy, query } from 'firebase/firestore'
import React, {useState,useEffect, useRef} from 'react'
import Message from './message'
import {collection,} from 'firebase/firestore'
import { auth, db } from '../firebase'
import Sendmesage from './Sendmesage'

const style = {
    main: `flex flex-col h-[90vh] bg-gray-100 mt-[1vh] shadow-xl border relative overflow-y-scroll mb-[9vh]`,
    
}

const Chat = (props) => {
    const scroll = useRef()

    const [messages,setMessages] = useState([])
   
    useEffect(()=>{
      
      const q = query(collection(db, 'messages'), orderBy('timestamp'))
      const unsubscribe = onSnapshot(q,(quarySnapshot)=>{
        let messages = []
        quarySnapshot.forEach((doc) => {
          messages.push({...doc.data(),id:doc.id})
        } )
        setMessages(messages)
      })
      
      return () => unsubscribe()
    },[])
    
  return (
    <>
    <main className={style.main}>

        {messages && messages.map((m)=>(
          <Message key={m.id} message={m}/>
        ))}

        <span ref={scroll}></span>
    </main >
    <Sendmesage scroll={scroll}/>
    
    </>
  )
}




export default Chat