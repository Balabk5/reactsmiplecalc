import React, { useState, useEffect } from "react";
import {  Text, Input } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag,faStar,faVoteYea} from '@fortawesome/free-solid-svg-icons'
// import { Sidenav } from "../../components/Sidenav/Sidenav";


const Apifetch = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/store/get"
    );
      console.log(data)
    const items = await data.json();
    console.log(items);
    setItems(items.data);
  };
  const [name, setName] = useState("");
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = items.filter((user) => {
        console.log(user.item.name);
        return user.item.name.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setItems(results);
    } else {
      setItems(items);
    }

    setName(keyword);
  };

  return (
    <div className="main__wrapper">
      {/* <Sidenav/> */}
      <Text
        h1
        size={60}
        className="main__heding"
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Find your favirote Fortnite Character here!
      </Text>
      <div className="input__cont">
        <Input
          type="search"
          size="xl"
          bordered
          color="secondary" 
          shadow
          defaultValue={name}
          onChange={filter}
          className="input fortnite__input"
          labelPlaceholder="Search Here"
        />
      </div>

      <section className="listItem__section">
        {items.map((item) => (
          <div key={item.itemId} className="wrapper__list">
            <img
              className="item__img"
              src={item.item.images.information}
              alt=""
            />
            <h5>
              <span className="list__subhed">Name: </span>
              {item.item.name}
            </h5>
            <p>
              <span className="list__subhed">Description: </span>{" "}
              {item.item.description}{" "}
            </p>
            <p>
              <span className="list__subhed"><FontAwesomeIcon icon={faFlag} /> &nbsp; Total Points </span>{" "}
              {item.item.ratings.totalPoints}
            </p>
            <p>
              <span className="list__subhed"><FontAwesomeIcon icon={faStar} /> &nbsp; AvgStars </span>{" "}
              {item.item.ratings.avgStars}
            </p>
            <p>
              <span className="list__subhed"><FontAwesomeIcon icon={faVoteYea} /> &nbsp; NumberVotes </span>{" "}
              {item.item.ratings.numberVotes}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Apifetch;
