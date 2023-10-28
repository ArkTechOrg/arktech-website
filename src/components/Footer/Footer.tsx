import "./Footer.scss";
import FooterContent from "../../assets/data/FooterContent";

const Footer = () => {
  return (
    <footer className="footer disable-select">
      <p className="footer__copyright">
        &copy; {FooterContent.copyright.name} {FooterContent.copyright.date}
      </p>
    </footer>
  );
};

export default Footer;