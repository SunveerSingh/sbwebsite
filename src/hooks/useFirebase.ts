import { useState, useEffect } from 'react';
import { auth, db } from '../firebase/config';
import { onAuthStateChanged, User } from 'firebase/auth';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  query, 
  where, 
  orderBy,
  onSnapshot 
} from 'firebase/firestore';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { user, loading };
}

export function useContacts() {
  const [contacts, setContacts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const contactsRef = collection(db, 'contacts');
    const q = query(contactsRef, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const contactsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setContacts(contactsData);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { contacts, loading };
}

export function useDeals() {
  const [deals, setDeals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dealsRef = collection(db, 'deals');
    const q = query(dealsRef, orderBy('updatedAt', 'desc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const dealsData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDeals(dealsData);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { deals, loading };
}

// Firestore helper functions
export const createContact = async (contactData: any) => {
  try {
    const docRef = await addDoc(collection(db, 'contacts'), {
      ...contactData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};

export const createDeal = async (dealData: any) => {
  try {
    const docRef = await addDoc(collection(db, 'deals'), {
      ...dealData,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating deal:', error);
    throw error;
  }
};

export const updateDeal = async (dealId: string, updates: any) => {
  try {
    await updateDoc(doc(db, 'deals', dealId), {
      ...updates,
      updatedAt: new Date()
    });
  } catch (error) {
    console.error('Error updating deal:', error);
    throw error;
  }
};

export const createActivity = async (activityData: any) => {
  try {
    const docRef = await addDoc(collection(db, 'activities'), {
      ...activityData,
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating activity:', error);
    throw error;
  }
};