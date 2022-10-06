import React, {useEffect,useState} from 'react'

export const Flasktry = () => {
    useEffect(() =>{
        fetchItemPeople()
    })

    const[people, setPeople] = useState([]);
    const fetchItemPeople = async () => {
        const data = await fetch(
            "http://127.0.0.1:5000/data"
        );
        const people = await data.json()
        console.log(people);
        setPeople(people);
    }
    
  
    return (
        <div className='flasktry'>
            {
                people.map((item)=>(
                    
                        <li key={item._id}>{item.name}</li>
                        
                    
                ))
            }
        </div>
    );
}
