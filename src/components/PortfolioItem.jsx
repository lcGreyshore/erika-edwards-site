import React, {useState} from "react";
import PropTypes from "prop-types";

import { Col } from "react-bootstrap";
import Image from "components/Image";
import Icon from "components/Icon";
import PortfolioDetailDialog from "components/PortfolioDetailDialog";
import ModalVideo from 'react-modal-video'

import "./PortfolioItem.scss";

const PortfolioItem = ({
  imageFileName,
  imageAlt,
  header,
  subheader,
  content,
  imageFileNameDetail,
  imageAltDetail,
  ariaLabel,
  extraInfo,
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Col md={4} sm={6} className="portfolio-item">
          <Image
            className="img-fluid"
            fileName={imageFileName}
            alt={imageAlt || header || subheader}
          />
        <div className="portfolio-caption">
          <div className="caption-block">
          <h4>{header}</h4>
          {subheader ? <p className="text-muted">{subheader}</p> : null}
          </div>
          <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={imageFileNameDetail} onClose={() => setOpen(false)} />
        <button type="button" aria-label={ariaLabel} className="text-uppercase btn btn-primary btn-l" onClick={()=> setOpen(true)}>{content}</button>
        </div>
      </Col>
      
    </>
  );
};

PortfolioItem.propTypes = {
  imageFileName: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  content: PropTypes.string,
  imageFileNameDetail: PropTypes.string,
  imageAltDetail: PropTypes.string,
  ariaLabel: PropTypes.string,
  extraInfo: PropTypes.any,
};

PortfolioItem.defaultProps = {
  imageAlt: "",
  subheader: "",
  content: "",
  imageFileNameDetail: "",
  imageAltDetail: "",
  ariaLabel: "",
  extraInfo: null,
};

export default PortfolioItem;
