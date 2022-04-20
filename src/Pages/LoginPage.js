import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const LoginPage = () => {
  return (
    <>
      <div className="svg-background">
        <div className="container-fluid justify-content-center">
          <div className="row min-vh-85">
            <div className="col-xl-4 col-lg-4 col-md-12 bd-highlight my-auto text-md-center text-lg-end min-vh-33 d-flex">
              <div className="my-auto">
                {/**Large or larger screen**/}
                <h3 className="d-none d-lg-block text-end">Welcome to PHCN's</h3>
                <h1 className="text-primary display-3 d-none d-lg-block text-end">ProNet <span className="text-secondary">Connect</span></h1>
                <p className="d-none d-md-none d-lg-block w-50 ms-auto">This secure portal allows Home Health Care Providers and Payers to access to Home Health Care Services.</p>
                {/**Medium or smaller screen**/}
                <h3 className="d-block d-lg-none text-center">Welcome to PHCN's</h3>
                <h1 className="text-primary display-3 d-block d-lg-none text-center">ProNet <span className="text-secondary">Connect</span></h1>
                <p className="d-sm-block d-lg-none mx-auto w-50">This secure portal allows Home Health Care Providers and Payers to access to Home Health Care Services.</p>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 offset-sm-3 offset-lg-0 text-sm-center col-8 position-relative my-auto">
              <div className="card border-2 border-white shadow login-card">
                <div className="card-body">
                  <h2 className="text-uppercase">Login</h2>
                  <form>
                    <div className="input-group" id="login-icon">
                      <div className="input-group-addon">
                        <i className="fa fa-fw fa-lg fa-user text-primary align-bottom"></i>
                      </div>
                      <input type="email" className="form-control mb-4" id="email-input" placeholder="Email"></input>
                    </div>
                    <div className="input-group" id="password-icon">
                      <div className="input-group-addon">
                        <i className="fa fa-fw fa-lg fa-lock text-primary align-bottom"></i>
                      </div>
                      <input type="password" className="form-control mb-0" id="password-input" placeholder="Password"></input>
                    </div>
                    <p className="text-start ps-4 pb-4"><a href="#" className="text-primary">forgot password?</a></p>
                    <button className="btn btn-primary" type="submit" id="login-button">LOGIN</button>
                  </form>
                  <h6 className="pt-3 pb-2">Or</h6>
                  <button className="btn btn-secondary" type="submit" id="SSO-button">PHCN SSO</button>
                </div>
              </div>
              <a href="#"><img src="./joinimage.png" alt="Join our Provider Network" className="position-absolute join-button" /></a>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 position-relative overflow-hidden">
              <img src="./bubble_image_custom.png" alt="Bubble Graphic" className="d-none d-md-none d-lg-block position-absolute top-0 end-0 bubble-image w-100" />
              <img src="./bubble_image_custom.png" alt="Bubble Graphic" className="d-sm-block d-lg-none d-position-relative end-0 bottom-0 bubble-image mx-auto p-4" />
            </div>
          </div>
          <div className="row min-vh-15 bg-white text-primary p-4">
            <div className="col-xl-1 col-lg-2 col-md-4 col-sm-4 col-4">
              <h6 className="p-0 text-primary">Support</h6>
              <ul className="list-unstyled">
                <li>Contact Us</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col-xl-1 col-lg-2 col-md-4 col-sm-4 col-4">
              <h6 className="p-0 text-primary">Legal</h6>
              <ul className="list-unstyled">
                <li>Trust Center</li>
                <li>Privacy</li>
              </ul>
            </div>
            <div className="col-xl-1 col-lg-2 col-md-4 col-sm-4 col-4">
              <h6 className="p-0 text-primary">Links</h6>
              <ul className="list-unstyled">
                <li>Provider Finder</li>
              </ul>
            </div>
            <div className="col-xl-6 offset-lg-3 offset-xl-0 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-end justify-content-evenly">
            <div className="text-center m-0">
              <p><small className="text-muted">Copywrite 2022 - powered by PHCN</small></p>
            </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-12 d-flex justify-content-md-end justify-content-center">
              <img src="https://prohcn.com/wp-content/themes/phcn_custom_theme-2020/public/images/logo--small.png" height="75px"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
