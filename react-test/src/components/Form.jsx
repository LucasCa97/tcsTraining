import React, { useState } from 'react';
import '../App.css'

const Form = ({users, setUsers}) => {

  // const [avatar, setAvatar] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [lastId, setLastId] = useState(12);
 

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {
      id: lastId + 1,
      avatar: 'https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg',
      email: email,
      first_name: firstName,
      last_name: lastName
    };

    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setLastId(lastId + 1);
  }


  return (
    <div>
      <h1 className="titles">ADD USER</h1>
      <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <span/>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      {/* <label>
        Avatar:
        <input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
      </label> */}
      <button type="submit">Submit</button>
    </form>
    </div>
    
  );
};

export default Form;
