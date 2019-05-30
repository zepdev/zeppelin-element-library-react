import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import IconButton from '../IconButton/IconButton';
import ZepiconsPreviousPage from '@zlab-de/zel-react-icons/ZepiconsPreviousPage';
import ZepiconsNextPage from '@zlab-de/zel-react-icons/ZepiconsNextPage';
import ZepiconsChevronLeft from '@zlab-de/zel-react-icons/ZepiconsChevronLeft';
import ZepiconsChevronRight from '@zlab-de/zel-react-icons/ZepiconsChevronRight';

function createArray(length, start) {
  return length ? Array.from(Array(Number(length)), (x, i) => start + i) : [];
}

var _ref2 = React.createElement(ZepiconsPreviousPage, {
  className: "zep-button__icon"
});

var _ref3 = React.createElement(ZepiconsChevronLeft, {
  className: "zep-button__icon"
});

var _ref4 = React.createElement(ZepiconsChevronRight, {
  className: "zep-button__icon"
});

var _ref5 = React.createElement(ZepiconsNextPage, {
  className: "zep-button__icon"
});

const Pagination = (_ref) => {
  let {
    className: classNameProp,
    pages: pagesProp,
    pagesToDisplay: pagesToDisplayProp,
    currentPage,
    onPageChange
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["className", "pages", "pagesToDisplay", "currentPage", "onPageChange"]);

  const pages = Number(pagesProp);
  const pagesToDisplay = Number(pagesToDisplayProp) < pages ? Number(pagesToDisplayProp) : pages;
  const startDisplayPages = createArray(pagesToDisplay, 1); // changes the number of page buttons that are displayed

  const [displayedPages, setDisplayedPages] = useState(startDisplayPages);

  const handleBackOnePage = () => {
    if (currentPage === 1) {
      onPageChange(1);
      setDisplayedPages(startDisplayPages);
    } else if (currentPage === displayedPages[0]) {
      const newDisplay = createArray(pagesToDisplay, currentPage - 1);
      onPageChange(currentPage - 1);
      setDisplayedPages(newDisplay);
    } else {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextOnePage = () => {
    if (currentPage === pages) {
      onPageChange(pages);
    } else if (currentPage === displayedPages[pagesToDisplay - 1]) {
      const newDisplay = createArray(pagesToDisplay, displayedPages[0] + 1);
      onPageChange(currentPage + 1);
      setDisplayedPages(newDisplay);
    } else {
      onPageChange(currentPage + 1);
    }
  };

  const handleEndPage = () => {
    const newDisplay = createArray(pagesToDisplay, pages - pagesToDisplay + 1);
    onPageChange(pages);
    setDisplayedPages(newDisplay);
  };

  return React.createElement("div", _extends({
    className: clsx('zep-pagination', classNameProp)
  }, other), React.createElement(IconButton, {
    onClick: () => {
      onPageChange(1);
      setDisplayedPages(startDisplayPages);
    },
    disabled: currentPage === 1
  }, _ref2), React.createElement(IconButton, {
    onClick: handleBackOnePage,
    disabled: currentPage === 1
  }, _ref3), displayedPages.map(elem => React.createElement("button", {
    key: `pagination${elem}`,
    className: clsx('zep-button zep-button-pagination', currentPage === elem && 'zep-pagination--selected'),
    onClick: () => onPageChange(elem)
  }, elem)), React.createElement(IconButton, {
    onClick: handleNextOnePage,
    disabled: currentPage === pages
  }, _ref4), React.createElement(IconButton, {
    onClick: handleEndPage,
    disabled: currentPage === pages
  }, _ref5));
};

process.env.NODE_ENV !== "production" ? Pagination.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pages: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  pagesToDisplay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  currentPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onPageChange: PropTypes.func.isRequired
} : void 0;
Pagination.defaultProps = {
  pagesToDisplay: 5
};
export default Pagination;