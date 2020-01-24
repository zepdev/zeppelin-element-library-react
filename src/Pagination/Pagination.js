import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import IconButton from '../IconButton/IconButton';

function createArray(length, start) {
  return length ? Array.from(Array(Number(length)), (x, i) => start + i) : [];
}

const Pagination = ({
  className: classNameProp,
  pages: pagesProp,
  pagesToDisplay: pagesToDisplayProp,
  currentPage,
  onPageChange,
  ...other
}) => {
  const [pages, setPages] = useState(0);
  const [pagesToDisplay, setPagesToDisplay] = useState(0);
  const [displayedPages, setDisplayedPages] = useState([]);

  useEffect(() => {
    let tempPages = Number(pagesProp);
    let tempPagesToDisplay =
      Number(pagesToDisplayProp) < tempPages ? Number(pagesToDisplayProp) : tempPages;
    let tempDisplayPages = createArray(tempPagesToDisplay, 1);
    setPages(tempPages);
    setPagesToDisplay(tempPagesToDisplay);
    setDisplayedPages(tempDisplayPages);
  }, [pagesProp, pagesToDisplayProp]);

  const handleBackOnePage = () => {
    if (currentPage === 1) {
      onPageChange(1);
      let startDisplayPages = createArray(pagesToDisplay, 1);
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

  return (
    <div className={clsx('zep-pagination', classNameProp)} {...other}>
      <IconButton
        onClick={() => {
          onPageChange(1);
          let startDisplayPages = createArray(pagesToDisplay, 1);
          setDisplayedPages(startDisplayPages);
        }}
        disabled={currentPage === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="zep-button__icon"
        >
          <title>zepicons-previous-page</title>
          <path d="M23.213 22.107l-6.107-6.107 6.107-6.12-1.88-1.88-8 8 8 8 1.88-1.893zM10.667 8h-2.667v16h2.667v-16z" />
        </svg>
      </IconButton>
      <IconButton onClick={handleBackOnePage} disabled={currentPage === 1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="zep-button__icon"
        >
          <title>zepicons-chevron-left</title>
          <path d="M20.547 22.107l-6.107-6.107 6.107-6.12-1.88-1.88-8 8 8 8z" />
        </svg>
      </IconButton>
      {displayedPages.map(elem => (
        <button
          key={`pagination${elem}`}
          className={clsx('zep-button zep-button-pagination', {
            'zep-pagination--selected': currentPage === elem,
          })}
          onClick={() => onPageChange(elem)}
        >
          {elem}
        </button>
      ))}
      <IconButton onClick={handleNextOnePage} disabled={currentPage === pages}>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="zep-button__icon"
        >
          <title>zepicons-chevron-right</title>
          <path d="M11.453 22.107l6.107-6.107-6.107-6.12 1.88-1.88 8 8-8 8z" />
        </svg>
      </IconButton>
      <IconButton onClick={handleEndPage} disabled={currentPage === pages}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="zep-button__icon"
        >
          <title>zepicons-next-page</title>
          <path d="M8 22.107l6.107-6.107-6.107-6.12 1.88-1.88 8 8-8 8-1.88-1.893zM20.547 8h2.667v16h-2.667v-16z" />
        </svg>
      </IconButton>
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pages: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  pagesToDisplay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  currentPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onPageChange: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  pagesToDisplay: 5,
};

export default Pagination;
