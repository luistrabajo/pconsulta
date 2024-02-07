import { useState } from 'react';
import '../costumer.css'




function Register() {
     const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    const register = (e:any) =>{
        e.preventDefault();
        const data = {          
            email: email,
            password : password
      
        };
        fetch('http://localhost:4000/api/signup', {
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
        <><div>
                <div className="testbox">
                        <h1>REGISTER</h1>
                        <form>
                        <hr/>
                        <label id="icon"><i className="icon-envelope "></i></label>
                        <input  type="text"  id="email" placeholder="Email" required
                        onChange={(event)=>{setEmail(event.target.value)}}/>                       
                        <label id="icon" ><i className="icon-shield"></i></label>
                        <input type="password"  id="password" placeholder="Password" required
                        onChange={(event)=>{setPassword(event.target.value)}}/>                       
                        <a onClick={register} className="button">Login</a>
                        </form>
                        </div>                
                    </div>
            </>
    );
}



export default Register
