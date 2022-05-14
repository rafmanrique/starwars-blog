import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const Register = () => {
    const { actions, store } = useContext(Context);
    const [register, setRegister] = useState({
        first_name:"",
        last_name:"",
        email: "",
        password: ""
    });

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">First Name</label>
                    <input className="form-control" name="first_name" onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Last Name</label>
                    <input className="form-control" name="last_name" onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name="email" onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })} />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" onChange={(event) => setRegister({ ...register, [event.target.name]: event.target.value })} />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label">Check me out</label>
                </div>
                <Link to="/">
                    <button type="submit" className="btn btn-primary" onClick={() => actions.handleRegister(register)}>
                        Submit</button></Link>
            </form>
        </div>
        )
}
