import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useState, useContext } from 'react';
import useForm from '../hooks/useForm';
import './Login.css'
import {emailValidation, passwordValidation} from '../utils/functions'


const Login = () => {

  const {onChange, values} = useForm({name: "", last_name:"", email:"", password:""})
  const {name, last_name, email, password} = values
  const [errors, setErrors] = useState({})
  const [userState, setUserState] = useState(false)
  const formData = useContext(formDataContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
  
    if (name === "") {
      newErrors.name = "You have to fill the name";
    }
    if (last_name === "") {
      newErrors.last_name = "You have to fill the last name";
    }
    if (email === "") {
      newErrors.email = "You have to fill the email";
    } else if (!emailValidation(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (password === "") {
      newErrors.password = "You have to fill the password";
    } else if (!passwordValidation(password)) {
      newErrors.password = "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one symbol";
    }
    setErrors(newErrors)
    if(newErrors = {}){
      setUserState(true)
    }
    ;
  };
  

  return (
    <div>
      <formDataContext.Provider>
        <Form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input onChange={onChange} name="name" value={name} type="text" placeholder="Enter name" />
          <p className="textError">{errors.name}</p>
        </div>
        <div>
          <label>Last name</label>
          <input onChange={onChange} name="last_name" value={last_name} type="text" placeholder="Enter last name" />
          <p className="textError">{errors.last_name}</p>
        </div>
        <div>
          <label>Email address</label>
          <input onChange={onChange} name="email" value={email} type="email" placeholder="Enter email" />
          <p className="textError">{errors.email}</p>
        </div>
        <div>
          <label>Password</label>
          <input onChange={onChange} name="password" value={password} type="password" placeholder="Password" />
          <p className="textError">{errors.password}</p>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      </formDataContext.Provider>
      
    </div>
  );
}

export default Login;
