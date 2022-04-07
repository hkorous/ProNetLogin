import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const LoginPage = () => {
    return (
      <>
        <div className="svg-background">
            <div className="container d-flex justify-content-end min-vh-100">
              <div className="d-flex align-items-center">
                <div className="card p-4">
                  <div className="card-body">
                      <h2 className="text-uppercase">Login</h2>
                      <form>
                        <input type="email" className="form-control mb-4" id="email-input" placeholder="Email"></input>
                        <input type="password" className="form-control mb-4" id="password-input" placeholder="Password"></input>
                        <h6>forgot password?</h6>
                        <button className="btn btn-primary" type="submit" id="login-button">LOGIN</button>
                        <h6 className="py-2">Or</h6>
                        <button className="btn" type="submit" id="login-button">PHCN SSO</button>
                      </form>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  }
export default LoginPage;
