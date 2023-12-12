import {useState} from 'react';
const TempComp = () => {
    const [data,setData] = useState(
        {
            username:' ',
            password:' '
        })
    const HandleChange = (e) => {
       setData({...data,[e.target.id]:e.target.value})
       console.log(data)
    }
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log("final data");
        console.log(data);
        alert('input submitted');
    }
    return(
        <form onSubmit={HandleSubmit}>
            <input type = "text" id = "username" placeholder = "username" onChange = {HandleChange}/>
            <input type = "password" id = "password" placeholder = "password" onChange = {HandleChange}/>
            <input type = "submit" value = "Login"/>
        </form>
    )
}
export default TempComp;