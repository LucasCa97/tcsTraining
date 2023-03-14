import { useState, useEffect } from 'react';
import Form from './Form'

const Data = () => {
  const [users, setUsers] = useState([]);

  //ASYNC/AWAIT
  const fetchData = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const json = await response.json();
      setUsers(json.data);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteUser = (userId) => {
    try {
      setUsers(users.filter(user => user.id !== userId));
    } catch (error) {
      console.error(error);
    }
  }

  const changeWorker = (userId) => {
    try {
      setUsers(users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isWorker: !user.isWorker
          };
        }
        return user;
      }));
    } catch (error) {
      console.error(error);
    }
  };
  

  useEffect(() => {
    
    fetchData();
  }, []);

  //CALLBACK

  // const fetchDataCallback = (callback) => {
  //   fetch('https://reqres.in/api/users?page=2')
  //     .then(response => response.json())
  //     .then(data => {
  //       callback(data.data);
  //     })
  //     .catch(error => console.error(error));
  // };
  
  // useEffect(() => {
  //   fetchDataCallback((data) => {
  //     setUsers(data);
  //   });
  // }, []);



  //PROMISE


  // const fetchDataPromise = () => {
  //   return fetch('https://reqres.in/api/users?page=2')
  //     .then(response => response.json())
  //     .then(data => data.data)
  //     .catch(error => console.error(error));
  // };
  
  // useEffect(() => {
  //   fetchDataPromise().then(data => {
  //     setUsers(data);
  //   });
  // }, []);
  


  return ( 
    <div>
      <h1 className="titles">Users List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th>Delete</th>
            <th>Worker</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td><img style={{height:"150px", width:"150px"}} src={user.avatar} alt={user.first_name} /></td>
              <td><button onClick={() => deleteUser(user.id)}>
                <img style={{height:"15px", width:"15px"}} alt='foto' src="https://icon-library.com/images/x-icon-png/x-icon-png-27.jpg"></img>
              </button></td>
              <td><button onClick={() => changeWorker(user.id) }>{user.isWorker ? 'YES' : 'NO'}</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Form users={users} setUsers={setUsers}/>
    </div>
  );
}

export default Data;


