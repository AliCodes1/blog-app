import React from 'react'
import { app } from './firebase'
import { getFirestore,collection, addDoc,deleteDoc,doc,getDocs} from "firebase/firestore";

const db = async (data, TorF) => {
    const db = getFirestore(app);
    //const blogs = useSelector(state => state.blog.blogs)
    if(TorF==='initiate'){
        const querySnapshot = await getDocs(collection(db, "blogs"));
        querySnapshot.forEach((doc) => {
            console.log(doc)
            return doc.data
        });
    }
    else if (TorF === 'delete') {
        await deleteDoc(doc(db, data));

    } else if(TorF==='add'){
        try {
            const docRef = await addDoc(collection(db, "blogs"), data);
            
            console.log("Document written with ID: ", docRef);
            return docRef
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
   

    



}

export default db

