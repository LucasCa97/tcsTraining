import { useState, useEffect } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  const fetchData = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setNewUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });
      const data = await response.json();
      setUsers(prevUsers => [...prevUsers, {
        id: users.length + 1,
        ...data
      }]);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={newUser.name}
          onChange={onChange}
        />
        <label>Name</label>
        <input
          type="email"
          name="email"
          value={newUser.email}
          onChange={onChange}
        />
        <label>Email</label>
        <button type="submit">Add new user</button>
      </form>
      <h1>Users:</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name} {user.last_name || user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
