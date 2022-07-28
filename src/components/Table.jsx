import { MdOutlineDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";

const Table = () => {
  const { users, updateUser, deleteUser } = useContext(ContactContext);

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

        {users.length > 0 ? (
          users.map((user) => {
            return (
              <tbody>
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.gender}</td>
                  <td>
                    <MdOutlineDeleteForever
                      color="red"
                      size={20}
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteUser(user.id)}
                    />
                  </td>
                  <td>
                    <FaEdit
                      color="lightblue"
                      size={20}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        updateUser(user);
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })
        ) : (
          <tr>
            <td colSpan={6} className="fs-5">
              Please add a new contact
            </td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default Table;
