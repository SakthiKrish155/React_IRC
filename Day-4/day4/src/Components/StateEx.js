import { useState } from 'react';
const StateEx = () => {
    const[visible,setVisible] = useState(false);
    const toggle = () => {
        setVisible(!visible);
    }
    return(
        <>
            {visible ? <div>Visible</div> : ' '}
            <button onClick = {toggle}>
                {visible ? 'hide' : 'show'}
            </button>
        </>
    )
}
export default StateEx;