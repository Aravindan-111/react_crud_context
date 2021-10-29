import axios from "axios";
import React, { useState } from "react";
import EditCreateTemplate from "../components/Edit_create_template";

export default function Createuser(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  // Updating the API
  const handleSubmit = async () => {
    console.log("submitted");
    const data = await axios.post(
      "https://6177d55e9c328300175f5ba1.mockapi.io/CRUD-mock",
      {
        name: name,
        email: email,
        company: company,
        country: country,
        state: state,
        city: city,
      }
    );
    console.log("ih");
    // console.log("data");
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <h2>Create New User</h2>
      </div>
      <EditCreateTemplate
        setName={setName}
        setEmail={setEmail}
        setCompany={setCompany}
        setCountry={setCountry}
        setState={setState}
        setCity={setCity}
        handleSubmit={handleSubmit}
      />
    </>
  );
}
