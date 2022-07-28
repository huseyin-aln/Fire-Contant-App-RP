import React, { useState, useEffect } from "react";
import { ContactContext } from "../context/ContactContext";
import Form from "./Form";
import Table from "./Table";
import { db } from "../database/firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Main = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [users, setUsers] = useState([]);

  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      // console.log(data);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  const addUser = async () => {
    await addDoc(userCollectionRef, {
      name: name,
      phone: phone,
      gender: gender,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      name: name,
      phone: phone,
      gender: gender,
      id: new Date().getTime(),
    };
    console.log(newObj.id);
    setUsers([...users, newObj]);
    setName("");
    setPhone("");
    setGender("");
  };

  return (
    <div className="container d-flex flex-column justify-content-between align-items-center flex-md-row">
      <ContactContext.Provider
        value={{
          name,
          setName,
          phone,
          setPhone,
          gender,
          setGender,
          users,
          setUsers,
          handleSubmit,
          addUser,
        }}
      >
        <Form />
        <Table />
      </ContactContext.Provider>
    </div>
  );
};

export default Main;
