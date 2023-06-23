"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "@/redux/features/create";

const page = () => {

    const dispatch = useDispatch();
    
      const [formData, setFormData] = useState({
        dni: 123123,
        name: "Juan",
        username: "aaafgghdga",
        email: "aaa@mail.com",
        password: "asdasd3434asdasd",
        birthDate: "1900-01-01",
        adress: "Mi casa",
        city: "Mi ciudad",
        phoneNumber: 2313,
      });
    
    const handleClick = () => {
    dispatch(createUser(formData));
    }
    return(
        <div><button onClick={handleClick}  >asd</button></div>
        )
    }
    export default page;