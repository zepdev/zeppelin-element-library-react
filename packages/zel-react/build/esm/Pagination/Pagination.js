import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import IconButton from '../IconButton/IconButton';
import ZepiconsPreviousPage from '@zlab-de/zel-react-icons/ZepiconsPreviousPage';
import ZepiconsNextPage from '@zlab-de/zel-react-icons/ZepiconsNextPage';
import ZepiconsChevronLeft from '@zlab-de/zel-react-icons/ZepiconsChevronLeft';
import ZepiconsChevronRight from '@zlab-de/zel-react-icons/ZepiconsChevronRight';

function createArray(length, start) {
  return length ? Array.from(Array(Number(length)), function (x, i) {
    return start + i;
  }) : [];
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

var Pagination = function Pagination(_ref) {
  var classNameProp = _ref.className,
      pagesProp = _ref.pages,
      pagesToDisplayProp = _ref.pagesToDisplay,
      currentPage = _ref.currentPage,
      onPageChange = _ref.onPageChange,
      other = _objectWithoutProperties(_ref, ["className", "pages", "pagesToDisplay", "currentPage", "onPageChange"]);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      pages = _useState2[0],
      setPages = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      pagesToDisplay = _useState4[0],
      setPagesToDisplay = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      displayedPages = _useState6[0],
      setDisplayedPages = _useState6[1];

  useEffect(function () {
    var tempPages = Number(pagesProp);
    var tempPagesToDisplay = Number(pagesToDisplayProp) < tempPages ? Number(pagesToDisplayProp) : tempPages;
    var tempDisplayPages = createArray(tempPagesToDisplay, 1);
    setPages(tempPages);
    setPagesToDisplay(tempPagesToDisplay);
    setDisplayedPages(tempDisplayPages);
  }, [pagesProp, pagesToDisplayProp]);

  var handleBackOnePage = function handleBackOnePage() {
    if (currentPage === 1) {
      onPageChange(1);
      var startDisplayPages = createArray(pagesToDisplay, 1);
      setDisplayedPages(startDisplayPages);
    } else if (currentPage === displayedPages[0]) {
      var newDisplay = createArray(pagesToDisplay, currentPage - 1);
      onPageChange(currentPage - 1);
      setDisplayedPages(newDisplay);
    } else {
      onPageChange(currentPage - 1);
    }
  };

  var handleNextOnePage = function handleNextOnePage() {
    if (currentPage === pages) {
      onPageChange(pages);
    } else if (currentPage === displayedPages[pagesToDisplay - 1]) {
      var newDisplay = createArray(pagesToDisplay, displayedPages[0] + 1);
      onPageChange(currentPage + 1);
      setDisplayedPages(newDisplay);
    } else {
      onPageChange(currentPage + 1);
    }
  };

  var handleEndPage = function handleEndPage() {
    var newDisplay = createArray(pagesToDisplay, pages - pagesToDisplay + 1);
    onPageChange(pages);
    setDisplayedPages(newDisplay);
  };

  return React.createElement("div", _extends({
    className: clsx('zep-pagination', classNameProp)
  }, other), React.createElement(IconButton, {
    onClick: function onClick() {
      onPageChange(1);
      var startDisplayPages = createArray(pagesToDisplay, 1);
      setDisplayedPages(startDisplayPages);
    },
    disabled: currentPage === 1
  }, _ref2), React.createElement(IconButton, {
    onClick: handleBackOnePage,
    disabled: currentPage === 1
  }, _ref3), displayedPages.map(function (elem) {
    return React.createElement("button", {
      key: "pagination".concat(elem),
      className: clsx('zep-button zep-button-pagination', currentPage === elem && 'zep-pagination--selected'),
      onClick: function onClick() {
        return onPageChange(elem);
      }
    }, elem);
  }), React.createElement(IconButton, {
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