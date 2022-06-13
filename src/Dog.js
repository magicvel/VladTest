import { useEffect, useState } from 'react';

function Dog() {
    function dogy() {
     setIsLoading(true);
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            setDog(data.message);
            setIsLoading(false)
        } )
    }
    const [dog, setDog] = useState([]),
        [isLoading, setIsLoading] = useState(true);
    useEffect(() => {dogy()}, [])    
    if(dog === 0){
        return <p>Подожди</p>
    }

    return  <>
        <img 
        style={{height: '200px', width: '200px'}} 
        src={dog} 
        alt='dog'/> 
    
    <button 
    disabled={isLoading} 
    onClick={dogy}>
          другой пёс?
    </button>
    </> 
    
}
export default Dog;