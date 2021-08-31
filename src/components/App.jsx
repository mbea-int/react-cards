import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Photo from "./Photo";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      email={contact.email}
      phone={contact.phone}
      url={contact.imgURL}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Photo img="https://pbs.twimg.com/profile_images/744849215675838464/IH0FNIXk.jpg" />

      {contacts.map(createCard)}

      {/* <Card contact={contacts[0]} />
      <Card contact={contacts[1]} />
      <Card contact={contacts[2]} /> */}
    </div>
  );
}

export default App;
