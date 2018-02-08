import React from "react";


const Login = (props) => {

    return (
        <div>
            <div className="panel, panel default">
                <div className="d-flex justify-content-center"><h3>Login</h3></div>
            </div>
            <div className="d-flex justify-content-center">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1"><h5>Email address</h5></label>
                        <input type="email" className="form-control" name = "email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange = {props.getValues}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1"><h5>Password</h5></label>
                        <input type="password" className="form-control" name = "password" id="exampleInputPassword1" placeholder="Password" onChange = {props.getValues}/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name = "remember" id="exampleCheck1" onChange = {props.getValues}/>
                        <label className="form-check-label" htmlFor="exampleCheck1"><h5>Remember Me</h5></label>
                    </div>
                    <button className="submitButton" type="submit" className="btn btn-primary" onClick = {props.onSubmit}><h5>Submit</h5></button>
                </form>
            </div>
        </div>
    );
};


export default Login;