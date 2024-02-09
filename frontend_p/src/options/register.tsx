import { useState } from 'react';





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
        <div className="col-3  bg-light "> 
                    <div className="row g-3 align-items-center border border-dark" style={{backgroundColor: "gainsboro"}}>
                        <h1 className="text-center p-2">REGISTER</h1>
                    <div className="col-11">
                     <label  className="col-form-label"><i className="icon-envelope mx-2 p-1" style={{color: "green"}}>  </i>Email</label>                    
                     <input type="email" id="inputPassword6" className="form-control mx-2 p-2" aria-describedby="passwordHelpInline"
                      required   onChange={(event)=>{setEmail(event.target.value)}} ></input>
                   </div>
                   <div className="col-11">
                     <label  className="col-form-label"><i className="icon-shield mx-2 p-1" style={{color: "green"}}></i>Password</label>                    
                     <input type="email" id="inputPassword6" className="form-control mx-2 p-2" aria-describedby="passwordHelpInline"
                      required   onChange={(event)=>{setPassword(event.target.value)}}></input>
                   </div>  
                   <div >
                        <button type="button" className="btn btn-primary  p-2 mx-2 my-2 col-11" onClick={register}>Guardar</button>
                   </div> 
                    </div>
                </div> 
    );
}

export default Register
