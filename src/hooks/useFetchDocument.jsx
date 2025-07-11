import { useState, useEffect } from 'react'

import { collection, onSnapshot, query, orderBy, where, doc, getDoc } from 'firebase/firestore'

import { db } from '../../firebase/config'

//FETCHING A ONE DOCUMENT BY ID

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    const loadDocument = async () => {
      setLoading(true);

      try {
        const docRef = await doc(db, docCollection, id);
        const docSnap = await getDoc(docRef);

        setDocument(docSnap.data());
      } catch (error) {
        console.log(error);
        setError(error.message);
      }

      setLoading(false);
    };

    loadDocument();
  }, [docCollection, id]);



  return { document, loading, error };
};

//FETCHING ALL DOCUMENTS 
export const useFetchDocuments = (docCollection, search = null, uid = null) => {

  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [cancelled, setCancelled] = useState(false)



  useEffect(() => {

    const fetchPosts = async () => {
      if (cancelled) return

      setLoading(true)

      const collectionRef = await collection(db, docCollection)

      try {
        let q

        if (search) {
          q = await query(collectionRef, where("tagsArray", "array-contains", search),
            orderBy("createdAt", "desc"))
        }
        else if (uid) {
          q = await query(collectionRef,
            where("uid", "==", uid),
            orderBy('createdAt', "desc"))
        }
        else {
          q = await query(collectionRef, orderBy('createdAt', "desc"))
        }




        await onSnapshot(q, (querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

          setDocuments(data);

        });

        setLoading(false)
      } catch (error) {
        console.error("Error fetching items:", error);
        setError(error.message)

        setLoading(false)
      }
    };

    fetchPosts();


  }, [docCollection, search, uid, cancelled]);


  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return { documents, loading, error }
}