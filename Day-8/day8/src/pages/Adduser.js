import { useEffect, useState } from "react"
import { addUser } from "../services/api"
import { useNavigate } from "react-router-dom"

const Adduser = () => {
    const navigate = useNavigate()

    const [data, setData] = useState({
        username: '',
        password: ''
    })

    // const fetchData = async () => {
    //     try {
    //         const res = await addUser()
    //         setData(res.data);
    //         console.log(res.data)
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }
    // }
    // useEffect(() => {
    //     fetchData()
    // })

    const handleChange = (e) => {
        setData({ ...data, [e.target.id]: e.target.value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await addUser(data);
            if (res.status === 201)
                alert("user added");
            navigate('/');
        }
        catch (e) {
            console.log(e);
        }
    }
    // useEffect(() => {
    //     fetchData();
    // })
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' id='username' placeholder='Username' onChange={handleChange} />
                <input type='password' id='password' placeholder='Password' onChange={handleChange} />
                <button type='submit'>Add</button>

            </form>
        </>
    )
}
export default Adduser;