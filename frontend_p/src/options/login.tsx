import { useState } from 'react'
import Home from '../tasks/tasks';
import '../costumer.css'




function Login() {
     const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    const handdleLogin = (e:any) =>{
        e.preventDefault();
        const data = {          
            email: email,
            password : password
      
        };
        fetch('http://localhost:4000/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response=> response.json())
            .then(result => {
                console.log(result.token)
                if(result.token){
                    localStorage.setItem('token', result.token)
                    setLoginSuccessful(true);
                } else {
                    setLoginSuccessful(false);
                }
            })
            .catch(error =>{
                console.log(error)
            })
    }

    return(
        <>{loginSuccessful ? <Home />: <div className="custom-form">
                <div className="testbox">
                        <h1>LOGIN</h1>
                        <form>
                        <hr/>
                        <label id="icon"><i className="icon-envelope "></i></label>
                        <input type="text" name="name" id="name" placeholder="Email" required
                        onChange={(event)=>{setEmail(event.target.value)}}/>                       
                        <label id="icon" ><i className="icon-shield"></i></label>
                        <input type="password" name="name" id="name" placeholder="Password" required
                        onChange={(event)=>{setPassword(event.target.value)}}/>                       
                        <a onClick={handdleLogin} className="button">Login</a>
                        </form>
                        </div>                
                    </div>
            }</>
    );
}



export default Login
