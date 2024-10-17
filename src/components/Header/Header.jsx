import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <a href="/" className="header__logo" title="Home Page">
            Logo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
