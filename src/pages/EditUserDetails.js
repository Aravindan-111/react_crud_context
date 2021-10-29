import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../components/Context";
import EditCreateTemplate from "../components/Edit_create_template";

export default function Edituserdetails({ match }) {
  const id = match.params.id;
  let context = useContext(Context);
  const selected_data = context.data[id];
  const temp_name = selected_data.name;
  console.log(context.data);
  const [name, setName] = useState(selected_data.name);
  const [email, setEmail] = useState(selected_data.email);
  const [company, setCompany] = useState(selected_data.company);
  const [country, setCountry] = useState(selected_data.country);
  const [state, setState] = useState(selected_data.state);
  const [city, setCity] = useState(selected_data.city);
  const [profileNotCreated, setprofileNotCreated] = useState(true);

  const handleSubmit = async () => {
    const { data } = await axios.put(
      `https://6177d55e9c328300175f5ba1.mockapi.io/CRUD-mock/${id}`,
      {
        name: name,
        email: email,
        company: company,
        country: country,
        state: state,
        city: city,
      }
    );
    const dummy_data = [...context.data];
    const temp = context.data.filter((a) => a.id === id);
    dummy_data[temp] = data;
    context.setData(dummy_data);
    setprofileNotCreated(false);
  };
  return (
    <div className="d-flex flex-column align-items-center mt-3">
      {profileNotCreated ? (
        <>
          <h1 className="mb-3">Edit the user {temp_name}</h1>
          <EditCreateTemplate
            setName={setName}
            setEmail={setEmail}
            setCompany={setCompany}
            setCountry={setCountry}
            setState={setState}
            setCity={setCity}
            id={id}
            dummy={"dummy"}
            handleSubmit={handleSubmit}
          />
        </>
      ) : (
        <div className="mt-4 d-flex justify-content-center">
          <h3>User Created Successfully ! </h3>
          <i className="far fa-check-circle"></i>
        </div>
      )}
    </div>
  );
}
