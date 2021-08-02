import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "react-bootstrap";
import * as SocialIcons from "components/SocialIcons";
import './footer.scss';

const Footer = ({ frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const {
    copyright,
    privacyHref,
    privacyText,
    termsHref,
    termsText,
    social,
  } = frontmatter;

  return (
    <footer className="footer py-3">
      <Container>
        <Row className="footer-content">
          <div>
          {copyright}
          </div>
          <div className="social-icons">
            <SocialIcons.Twitter />
            <SocialIcons.Linkedin />
          </div>
          
            
          {/* <Col lg={6} className="text-lg-left">
            {copyright}
          </Col>
          <Col lg={6} className="my-3 my-lg-0">
           <SocialIcons.Twitter />
            <SocialIcons.Linkedin />
          </Col> */}
          {/* <Col lg={4} className="text-lg-right">
            <a className="mr-3" href={privacyHref}>
              {privacyText}
            </a>
            <a href={termsHref}>{termsText}</a>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  frontmatter: PropTypes.object,
};

Footer.defaultProps = {
  frontmatter: null,
};

export default Footer;
