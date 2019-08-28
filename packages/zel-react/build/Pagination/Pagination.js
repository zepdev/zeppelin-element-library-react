"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx = _interopRequireDefault(require("clsx"));

var _IconButton = _interopRequireDefault(require("../IconButton/IconButton"));

var _ZepiconsPreviousPage = _interopRequireDefault(require("@zlab-de/zel-react-icons/ZepiconsPreviousPage"));

var _ZepiconsNextPage = _interopRequireDefault(require("@zlab-de/zel-react-icons/ZepiconsNextPage"));

var _ZepiconsChevronLeft = _interopRequireDefault(require("@zlab-de/zel-react-icons/ZepiconsChevronLeft"));

var _ZepiconsChevronRight = _interopRequireDefault(require("@zlab-de/zel-react-icons/ZepiconsChevronRight"));

function createArray(length, start) {
  return length ? Array.from(Array(Number(length)), function (x, i) {
    return start + i;
  }) : [];
}

var _ref2 = _react.default.createElement(_ZepiconsPreviousPage.default, {
  className: "zep-button__icon"
});

var _ref3 = _react.default.createElement(_ZepiconsChevronLeft.default, {
  className: "zep-button__icon"
});

var _ref4 = _react.default.createElement(_ZepiconsChevronRight.default, {
  className: "zep-button__icon"
});

var _ref5 = _react.default.createElement(_ZepiconsNextPage.default, {
  className: "zep-button__icon"
});

var Pagination = function Pagination(_ref) {
  var classNameProp = _ref.className,
      pagesProp = _ref.pages,
      pagesToDisplayProp = _ref.pagesToDisplay,
      currentPage = _ref.currentPage,
      onPageChange = _ref.onPageChange,
      other = (0, _objectWithoutProperties2.default)(_ref, ["className", "pages", "pagesToDisplay", "currentPage", "onPageChange"]);
  var pages = Number(pagesProp);
  var pagesToDisplay = Number(pagesToDisplayProp) < pages ? Number(pagesToDisplayProp) : pages;
  var startDisplayPages = createArray(pagesToDisplay, 1); // changes the number of page buttons that are displayed

  var _useState = (0, _react.useState)(startDisplayPages),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      displayedPages = _useState2[0],
      setDisplayedPages = _useState2[1];

  var handleBackOnePage = function handleBackOnePage() {
    if (currentPage === 1) {
      onPageChange(1);
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

  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _clsx.default)('zep-pagination', classNameProp)
  }, other), _react.default.createElement(_IconButton.default, {
    onClick: function onClick() {
      onPageChange(1);
      setDisplayedPages(startDisplayPages);
    },
    disabled: currentPage === 1
  }, _ref2), _react.default.createElement(_IconButton.default, {
    onClick: handleBackOnePage,
    disabled: currentPage === 1
  }, _ref3), displayedPages.map(function (elem) {
    return _react.default.createElement("button", {
      key: "pagination".concat(elem),
      className: (0, _clsx.default)('zep-button zep-button-pagination', currentPage === elem && 'zep-pagination--selected'),
      onClick: function onClick() {
        return onPageChange(elem);
      }
    }, elem);
  }), _react.default.createElement(_IconButton.default, {
    onClick: handleNextOnePage,
    disabled: currentPage === pages
  }, _ref4), _react.default.createElement(_IconButton.default, {
    onClick: handleEndPage,
    disabled: currentPage === pages
  }, _ref5));
};

process.env.NODE_ENV !== "production" ? Pagination.propTypes = {
  className: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.string]),
  pages: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  pagesToDisplay: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  currentPage: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  onPageChange: _propTypes.default.func.isRequired
} : void 0;
Pagination.defaultProps = {
  pagesToDisplay: 5
};
var _default = Pagination;
exports.default = _default;