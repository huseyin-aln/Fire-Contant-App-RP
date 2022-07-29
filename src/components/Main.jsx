import React, { useState, useEffect } from "react";
import { ContactContext } from "../context/ContactContext";
import Form from "./Form";
import Table from "./Table";
import { db } from "../database/firebaseConfig";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastSuccessNotify } from "../utils/customTostify";

const Main = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [users, setUsers] = useState([]);
  const [editActive, setEditActive] = useState(false);
  const [editId, setEditId] = useState("");

  const userCollectionRef = collection(db, "users");

  const getUsers = async () => {
    const data = await getDocs(userCollectionRef);
    // console.log(data);
    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  useEffect(() => {
    getUsers();
  }, []);

  const addUser = async () => {
    await addDoc(userCollectionRef, {
      name: name,
      phone: phone,
      gender: gender,
    });
  };

  const updateUser = async (user) => {
    setEditActive(true);
    setName(user.name);
    setEditId(user.id);
    setPhone(user.phone);
    setGender(user.gender);
  };

  const editUser = async (e) => {
    e.preventDefault();
    const userDoc = doc(db, "users", editId);
    const newUser = { name: name, phone: phone, gender: gender };
    await updateDoc(userDoc, newUser);
    getUsers();
    setName("");
    setPhone("");
    setGender("");
    setEditId("");
    setEditActive(false);
    toastSuccessNotify("Changed successfully");
  };

  const deleteUser = async (id) => {
    setUsers(users.filter((user) => user.id !== id));
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      name: name,
      phone: phone,
      gender: gender,
      id: new Date().getTime(),
    };
    // console.log(newObj.id);

    setUsers([...users, newObj]);
    setName("");
    setPhone("");
    setGender("");
    toastSuccessNotify("You added successfully");
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
          updateUser,
          deleteUser,
          editUser,
          editActive,
          setEditActive,
        }}
      >
        <Form />
        <Table />
        <ToastContainer />
      </ContactContext.Provider>
    </div>
  );
};

export default Main;
