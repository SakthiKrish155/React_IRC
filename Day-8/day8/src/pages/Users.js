import { useState, useEffect } from "react";
import { getUser, deleteUser } from "../services/api";
import { useNavigate } from "react-router-dom";
const Users = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState([])
    const fetchData = async () => {
        try {
            const res = await getUser()
            setUser(res.data);
            console.log(res.data)
        }
        catch (e) {
            // console.log(e)
        }
    }
    // console.log(user)

    useEffect(() => {
        fetchData()
    }, [])


    const handleDelete = async (id) => {
        try {
            const res = await deleteUser(id)
            if (res.status === 200)
                alert('deleted')
            fetchData();

        }
        catch (e) {
            console.log(e);
        }
    }
        const handleEdit = (id) => {
            navigate(`/edit/${id}`)
        }
        useEffect(()=>{
            fetchData();
        })
    // const handleAdd = async(id,password) =>{

    // }    
    return (
        <div class=" table-container">
            <table className="user-table">
                <thead>
                    <tr>
                        <th>
                            Username
                        </th>
                        <th>
                            Password
                        </th>
                        <th>
                            Edit
                        </th>
                        <th>
                            Delete
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                            <tr key={user.id}>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td><button class ="add-btn" onClick={() => handleAdd(user.id,user.password)}>Add</button></td>
                                <td><button class="edit-btn" onClick={()=>handleEdit(user.id)}>Edit</button></td>
                                <td><button class="delete-btn" onClick={()=>handleDelete(user.id)}>Delete</button></td>
                            </tr>

                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Users;