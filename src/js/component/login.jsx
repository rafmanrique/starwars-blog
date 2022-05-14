import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext"


const Login = () => {
    const { actions, store} = useContext(Context);    
    const [login,setLogin] = useState({
        email:"",
        password:""
    });

    const handleSubmit = e => {
        e.preventDefault();}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" onChange={(event)=> setLogin({...login, [event.target.name]: event.target.value})}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={(event)=> setLogin({...login, [event.target.name]: event.target.value})}/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={()=> actions.handleLogin(login)}>Submit</button>
            </form>
        </div>
    );
}

export default Login;