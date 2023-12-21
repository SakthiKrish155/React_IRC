import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { editUser } from "../services/api"
import { getUser } from "../services/api"

const Edituser = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const fetchUser = async () => {
        try {
            const res = await getUser()
            setData(res.data);
        }
        catch (e) {
            console.log(e);
        }
    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res1 = await editUser(id, data)
            if (res1.status === 200) 
                alert("user updated")
            navigate('/');
    
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        fetchUser()
    })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' id='username' value = {data.username} placeholder='Username' onChange={handleChange} />
                <input type='password' id='password' value = {data.password} placeholder='Password' onChange={handleChange} />
                <button type='submit'>Update</button>

            </form>
        </>
    )
}
export default Edituser;