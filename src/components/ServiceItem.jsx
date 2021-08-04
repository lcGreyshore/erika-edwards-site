import React from "react";
import PropTypes from "prop-types";

import "./ServiceItem.scss";
import bookCover from "content/assets/images/services/Hiding.jpeg"

const ServiceItem = ({ header, content, iconName, purchaseText }) => {
  

  return (
    <>
     <div className="book-container">
          <div className="left-section">
            <img src={bookCover} alt={header} className="book-cover" />
          </div>
          <div className="right-section">
            <h3>{header}</h3>
            <hr/>
            <p>{content}</p>
            <p>{iconName}</p>
            <a className="btn btn-primary btn-xl text-uppercase" href="https://www.scuppernongbooks.com/book/9780817360313">{purchaseText}</a>  
          </div>
        </div>
    </>
  );
};

ServiceItem.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
  iconName: PropTypes.string,
  purchaseText: PropTypes.string,
};

ServiceItem.defaultProps = {
  header: "",
  content: "",
  iconName: "",
  purchaseText: "",
};

export default ServiceItem;
