import { Link } from "react-router-dom";
import { useEffect } from "react";

const FooterLinks = ({leftLinkPath, leftLinkText, rightLinkPath, rightLinkText}) => {
  const leftPath = leftLinkPath;
  const leftText = leftLinkText;
  const rightPath = rightLinkPath;
  const rightText = rightLinkText;

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }, [])

  return (
    <>
      <footer className="footer-links-container">
        <span>
          <Link
            to={leftPath}
            onClick={() => {
              window.scrollTo({top: 0, left: 0, behavior: "smooth"})
            }}
          >
            <p className="footer-link">{leftText}</p>
          </Link>
        </span>
        <span>
          <Link
            to={rightPath}
            onClick={() => {
              window.scrollTo({top: 0, left: 0, behavior: "smooth"})
            }}
          >
            <p className="footer-link">{rightText}</p>
          </Link>
        </span>
      </footer>
      <div className="footer-rectangle" />
    </>
  )
}

export default FooterLinks;
