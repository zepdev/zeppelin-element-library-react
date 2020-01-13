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
      Number(pagesToDisplayProp) < tempPages
        ? Number(pagesToDisplayProp)
        : tempPages;
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
        <ZepiconsPreviousPage className="zep-button__icon" />
      </IconButton>
      <IconButton onClick={handleBackOnePage} disabled={currentPage === 1}>
        <ZepiconsChevronLeft className="zep-button__icon" />
      </IconButton>
      {displayedPages.map(elem => (
        <button
          key={`pagination${elem}`}
          className={clsx('zep-button zep-button-pagination', {
            'zep-pagination--selected': currentPage === elem
          })}
          onClick={() => onPageChange(elem)}
        >
          {elem}
        </button>
      ))}
      <IconButton onClick={handleNextOnePage} disabled={currentPage === pages}>
        <ZepiconsChevronRight className="zep-button__icon" />
      </IconButton>
      <IconButton onClick={handleEndPage} disabled={currentPage === pages}>
        <ZepiconsNextPage className="zep-button__icon" />
      </IconButton>
    </div>
  );
};

Pagination.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pages: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  pagesToDisplay: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  currentPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  onPageChange: PropTypes.func.isRequired
};

Pagination.defaultProps = {
  pagesToDisplay: 5
};

export default Pagination;
