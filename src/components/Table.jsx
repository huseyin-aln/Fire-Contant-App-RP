import { MdOutlineDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Table = () => {
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
