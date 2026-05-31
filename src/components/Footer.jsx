import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <p className="site-footer-text">Chengang Zhang</p>

        <div className="site-social-links" aria-label="Social links">
          <SocialIcon
            bgColor="var(--social-bg)"
            fgColor="var(--social-fg)"
            network="email"
            style={{ height: 38, width: 38 }}
            url="mailto: cz1842@nyu.edu"
          />
          <SocialIcon
            bgColor="var(--social-bg)"
            fgColor="var(--social-fg)"
            style={{ height: 38, width: 38 }}
            url="https://linkedin.com/in/chengang-zhang"
          />
          <SocialIcon
            bgColor="var(--social-bg)"
            fgColor="var(--social-fg)"
            style={{ height: 38, width: 38 }}
            url="https://github.com/chengang-zhang"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
