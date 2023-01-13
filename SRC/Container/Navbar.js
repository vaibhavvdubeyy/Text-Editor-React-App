import React from 'react';

export default function Navbar() {
  let myStyle = {
    color:'white',
    backgroundColor: 'black'
  }
  return (
    <>
          <div className="container" style={myStyle}>
              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Text Editor</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                  </li>
                </ul>  
                <form class="d-flex" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button class="btn btn-outline-primary" type="submit">Search</button>
                </form>
              </div>
             
        
         <button type="button" className="btn btn-primary mx-1">Enable Dark Mode</button>
        </div>
    </nav>
    </div>
   </> 
  );
}
