import React, { useState } from "react";
// import { Sidenav } from "../../components/Sidenav/Sidenav";
const Userslist = () => {
  let user = [
    {
      name: "bala",
      id: 1,
      age: 21,
    },
    {
      name: "raja",
      id: 2,
      age: 21,
    },
    {
      name: "leni",
      id: 3,
      age: 61,
    },
  ];

  const [userDetials, setUserDetials] = useState(user);
  const [name, setName] = useState("");

  const nameChangeHandeler = (e) => {
    setName(e.target.value);
  };

  const addUser = () => {
    let localuser = {
      name: name,
      id: Math.random(),
      age: 20,
    };

    setUserDetials([...userDetials, localuser]);
  };
  let user2 = [];

  const [favuserDetials, favsetUserDetials] = useState(user2);
  const [favname, favsetName] = useState("");

  const addFav = (e) => {
    favsetName(e.target.value);

    let localFavList = {
      name: favname,
      id: 10,
      age: 20,
    };

    console.log(favname);
    favsetUserDetials((favuserDetials) => [...favuserDetials, localFavList]);
  };
  const removeUser =(id)=>{
    const newUser = userDetials.filter((user)=>user.id!==id)
    setUserDetials(newUser)
  }

  return (
    <div className="parent__temp">
      
    <div className="parent">
      
      <div className="wrapper">
        <h1 className="main__hed">User List</h1>
        <input placeholder="enter the name" className="name__inp" value={name} onChange={nameChangeHandeler} />
        <button className="btn" onClick={addUser}>Add</button>
        {userDetials.map((user) => {
          return (
            <>
              <li>
                {user.name}
                <button className="btn-fav" value={user.name} onClick={addFav}>
                  Fav
                </button>
                <button  className="btn-fav btn_remove" onClick={()=>{removeUser(user.id)}}> X</button>
              </li>
            </>
          );
        })}
        <h1 className="main__hed1">my fav list</h1>
        {
          favuserDetials.length === 0 ?(
            <><p>no fav use Found!</p></>
          ):(
            <>
            {favuserDetials.map((user1) => {
          return (
            <>
              <li className="list__items">{user1.name} </li>
            </>
          );
        })}
            </>
          )
        }

        
      </div>
    </div>
    </div>
  );
};

export default Userslist;
