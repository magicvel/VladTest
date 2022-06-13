import { useState } from 'react'
import Axios from 'axios';

function Post() {
    
    const [data, setData] = useState({
        name: ''
        }) 

    function submit(e) {
        e.preventDefault();
        Axios.get(`https://api.agify.io/?name=${data.name}`)
        .then(res=>{
            console.log(res.data)
        }); 
        Axios.get(`https://api.genderize.io/?name=${data.name}`)
        .then(res=>{
            console.log(res.data)
        });
        Axios.get(`https://api.nationalize.io/?name=${data.name}`)
        .then(res=>{
            console.log(res.data)
        });
    } 
    
    function get(e) {
        // setIsLoading(true);
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    // const  [isLoading, setIsLoading] = useState(true);
    

    
    return  <>
    <form onSubmit={(e)=> submit(e)}>
        <input onChange={(e)=>get(e)} id="name" value={data.name} placeholder="Vel" type='text'></input>
        <button >отправить</button>
    </form>
    <div></div>
    </>
}
export default Post;