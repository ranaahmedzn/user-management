import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-users')
        .then(res => res.json())
        .then(data => {
            setUsers(data)
        })
    }, [])

    return (
        <div className='my-5 w-75 mx-auto'>
        <Link to='/add-user'><p className='px-3 py-2 text-info fw-semibold rounded border shadow-sm d-inline-block'>New User</p></Link>
        <table className='w-100 my-3'>
          <thead>
            <tr className='text-white'>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {
                users.map((user, index) => <tr className='border-bottom'
                key={user._id}
                >
                <td>{index + 1}</td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.gender}</td>
                <td>{user?.status}</td>
                <td>
                    <button className="me-2 py-2 px-3 rounded shadow-sm text-info bg-white border fw-semibold">Edit</button>
                    <button className=" py-2 px-3 rounded shadow-sm text-info bg-white border fw-semibold">Delete</button>
                </td>
              </tr>)
              }
          </tbody>
        </table>
        </div>
    );
};

export default Home;