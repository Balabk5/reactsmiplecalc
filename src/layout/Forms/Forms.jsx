import { Button } from "@nextui-org/react";
import Form from "react-bootstrap/Form";

import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const Forms = () => {
  // handleSubmit(event) {
  //   event.preventDefault();
  //   const data = new FormData(event.target);

  //   console.log(data.get('email')); // reference by form input's `name` tag

  //   fetch('/api/form-submit-url', {
  //     method: 'POST',
  //     body: data,
  //   });
  // }

  // const handleSubmit = (event)=>{
  //   event.preventDefault();
  //   const data = new FormData(event.target);

  //   console.log(data.get('email'));

  //   let localData = [
  //     {
  //       name:data.get('uname'),
  //       age:data.get('age'),

  //     }

  //   ]
  //   console.log(localData);
  //   let req = {
  //     method: 'POST',
  //     body: data
  // }
  // fetch("/http://127.0.0.1:5000/add", req).then((res) => res.json()).then((res) => { })

  // Swal.fire({
  //   title: 'Success',
  //   type: 'success',
  //   text: `Thankyou for submiting ${data.get('uname')} ✨`,
  // });

  // }

  // const handleSubmit = event => {

  //   event.preventDefault();
  //   const data = new FormData(event.target);

  //   const user = {
  //     name:data.get('uname') ,
  //     age: data.get('age')
  //   };
  //   console.log(user)

  //   axios.post(`http://127.0.0.1:5000/add`, { user })
  //     .then(res => {
  //       console.log(res);
  //       console.log(res.data);
  //     })
  // }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    let name = data.get("uname");
    
    let date = data.get("date");
    // let file = e.target.files[0];

    const res = await fetch("http://127.0.0.1:5000/add1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        date
      }),
    });
    await res.json();
  };

  return (
    <div className="parent__temp">
      <div className="parent">
        <div className="wrapper">
          <h1 className="main__head">DigiTech sigin up form</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="uname"
                placeholder="Enter your full name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter your full name"
              />
            </Form.Group>
            <div
              id="date-picker-example"
              class="md-form md-outline input-with-post-icon datepicker"
              inline="true"
            >
              <Form.Label>date</Form.Label>
              <input
                placeholder="Select date"
                type="date"
                id="example"
                name="date"
                class="form-control"
              />
              
            </div>

            {/* <div class="mb-3">
              <label for="formFileMultiple" class="form-label">
                Multiple files input example
              </label>
              <input
                class="form-control"
                type="file"
                name="file"
                

                id="formFileMultiple"
                multiple
              ></input>
            </div> */}
            <Button size="sm" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Forms;
