import Logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "119px", height: "75px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span
            className="navbar-toggler-icon"
            style={{ width: "35px", height: "50px" }}
          ></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item fs-4">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>

            <li className="nav-item fs-4 ms-4">
              <a className="nav-link" href="#">
                About
              </a>
            </li>

            <li className="nav-item fs-4 ms-4">
              <a className="nav-link" href="#">
                Hiking Plan
              </a>
            </li>
            
            <li className="nav-item fs-4 ms-4">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
