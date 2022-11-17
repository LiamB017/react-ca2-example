import {  useState } from 'react';
import axios from 'axios'

const LoginForm = () => {

const [form, setForm] = useState({
    email: "",
    password:""
})

const [errorMessage, setErrorMessage] = useState("");


const handleForm = (e) => {
    setForm((prevState) => ({
        ...prevState,
[e.target.name]: e.target.value
    }));
}

    const handleClick = () => {
        console.log('clicked',form);

        axios.post('https://festivals-api.vercel.app/api/festivals', {
            email: form.email,
            password: form.password
        })
        .then((response)=> {
            console.log(response.data.token)
        })
        .catch((err) => {
            console.log(err)
            console.log(err.response.data)
            setErrorMessage(err.response.data.message)
        });
    }

  




return (
    <>
    Email: <input type='text' name='email' onChange={handleForm} /> <br />
    Password: <input type='password' name='password' onChange={handleForm}  />

    <button onClick={handleClick}>Submit</button>
    <p>{errorMessage}</p>
    </>
)

}

export default LoginForm;