const Navbar = ({ onCategoryChange }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <b>INSTA NEWS</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => onCategoryChange("general")} // Home
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://edition.cnn.com/business"
                onClick={() => onCategoryChange("business")} // News
              >
                BUSSINESS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://edition.cnn.com/sport"
                onClick={() => onCategoryChange("sports")} // Sports
              >
                SPORTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true"></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
