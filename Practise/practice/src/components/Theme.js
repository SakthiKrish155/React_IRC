import { useDispatch,useSelector } from "react-redux";
import {toggleTheme} from '../redux/ThemeAction'

const Theme = () => {
    const dispatch = useDispatch();
    const  theme = useSelector((state) => state.theme)

    const style = {
        backgroundColor:theme,
        width:'100%',
        height:'100vh',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    }
    const btn = {
        padding:"10px",
        backgroundColor:"grey",
        color:"white",
        cursor:"pointer",
        width:"120px"

    }
    return(
        <div style={style}>
            <button style = {btn} onClick = {()=>dispatch(toggleTheme())}>Theme</button>
        </div>

    )
}
export default Theme