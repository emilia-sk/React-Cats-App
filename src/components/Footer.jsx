import React from "react";
import githubLogo from'../images/github-logo.png';

export default function Footer() {
    return (

  <footer className="row mt-3 mb-2">
    <div className="col-12 col-md-6 text-center text-md-start">
    <p className="align-text-center">© 2023 Made with ❤ by Emilia</p>
    </div>

    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
      <a className="btn-github" href="https://github.com/emilia-sk/React-Cats-App" target="_blank">
        <img className="github-logo" src={githubLogo}></img>
        Github
      </a>
    </div>
  </footer>

    )
}
