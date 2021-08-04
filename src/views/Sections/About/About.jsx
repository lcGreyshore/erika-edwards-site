import React from "react";
import PropTypes from "prop-types";

import { Row } from "react-bootstrap";
import SectionHeader from "components/SectionHeader";
import PageSection from "components/PageSection";
import bioPhoto from "content/assets/images/about/erika.jpg";

import "./About.scss";

const About = ({ className, frontmatter }) => {
  if (!frontmatter) {
    return null;
  }

  const { anchor, header: rootHeader, subheader: rootSubHeader, timeline } = frontmatter;

  return (
    <PageSection className={className} id={anchor}>
      <Row>
        <SectionHeader header={rootHeader} subheader={rootSubHeader} />
      </Row>
      <Row>
      <div className="bio-container">
          <div className="left-section">
            <img src={bioPhoto} alt="" className="bio-cover" />
          </div>
          <div className="right-section">
          {timeline.map(({ content, content2, header, imageFileName, subheader }, ind) => (
            <div key={header}>
            <p>{imageFileName}</p>
            <p>{subheader}</p>
            <p>{content}</p>
            <p>{content2}</p>
            </div>
            ))}
          </div>
        </div>
      </Row>
    </PageSection>
  );
};

About.propTypes = {
  className: PropTypes.string,
  frontmatter: PropTypes.object,
};

About.defaultProps = {
  className: null,
  frontmatter: null,
};

export default About;
