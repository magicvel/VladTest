import { useEffect, useState } from 'react';


function Cat() {
    const _api = "https://catfact.ninja/fact"
    // https://dog.ceo/api/breeds/image/random

function kotik() {
    setIsLoading(true);
    fetch(_api) 
        .then(response => response.json())
        .then(data => {
            setCat([...cat, data.fact]);
            setIsLoading(false)
        });
}

    const [cat, setCat] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {kotik()}, [])

    if(cat === 0){
        return <p>Подожди</p>
    }

        return (
            <>
                <ul>
                    {cat.map((kyty) => {
                        return <li >
                                {kyty}
                            </li>
                    })}
                </ul>
                <button disabled={isLoading} onClick={kotik}> Следующий лучше</button>
            </>

        )
}
export default Cat;