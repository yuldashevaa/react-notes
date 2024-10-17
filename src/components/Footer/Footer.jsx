import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__text">
            Built by{" "}
            <a href="/" className="footer__text-link" target="_blank">
              Saida
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
