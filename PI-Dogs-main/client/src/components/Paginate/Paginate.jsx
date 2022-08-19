import { useState } from 'react';


export default function HomeDogs () {

    const [paginate, setPaginate] = useState(8);
    const [base, setBase] = useState(0);
    const [counter, setCounter] = useState(1)
    const [dogPages] = useState(8)
    
    const lastDog = counter * dogPages
    const firstDog = lastDog - dogPages
    const indexPages = Math.ceil(dogs.length / dogPages)
    

    const nextPage = () => {
        
        setPaginate((prevValue) => prevValue + 8);
        setBase((prevBase) => prevBase + 8)
        setCounter((prevValue) => prevValue +1)
    };
    

    const previousPage = () => {
        
        setPaginate((prevValue) => prevValue -8);
        setBase((prevBase) => prevBase -8)
        setCounter((prevValue) => prevValue -1)
      };
    
      return (
        <div>
            {
            counter > 1 && <>
                            <button onClick={previousPage}>Previous Page</button>
                            <button onClick={nextPage}>next Page</button>
                            </> 
            }
        </div>
        
      )
    }