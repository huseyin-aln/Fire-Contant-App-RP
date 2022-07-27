import { MdOutlineDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useState, useEffect } from "react";
import { db } from "../database/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const Table = () => {
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

  return (
    <div className=" text-center rounded-2">
      <h1
        className="text-center bg-white rounded-2 fs-3 mb-2 p-2"
        style={{ width: "35rem" }}
      >
        CONTACTS
      </h1>

      <table className="table bg-white rounded-2" style={{ width: "35rem" }}>
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Gender</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>

        {users.map((user) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.gender}</td>
              <td>
                <MdOutlineDeleteForever color="red" size={35} />
              </td>
              <td>
                <FaEdit color="lightblue" size={35} />
              </td>
            </tr>
          );
        })}

        <tbody>
          <tr>
            <td>Mark</td>
            <td>9012345678920</td>
            <td>Male</td>
            <td>
              <MdOutlineDeleteForever color="red" size={20} />
            </td>
            <td>
              <FaEdit color="lightblue" size={20} />
            </td>
          </tr>
          <tr>
            <td>Admin</td>
            <td>9012388877755</td>
            <td>Male</td>
            <td>
              <MdOutlineDeleteForever color="red" size={20} />
            </td>
            <td>
              <FaEdit color="lightblue" size={20} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
