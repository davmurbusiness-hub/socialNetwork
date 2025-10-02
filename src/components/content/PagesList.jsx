import React from 'react';
import {usePagination} from "../../utils/pajes.js";

//Переключение страниц

const PagesList = ({totalPages, page, changePage}) => {

  let pagesArray = usePagination(totalPages);
  let loadedPages = [page];

  return (
    <div className="page__wrapper">
      {pagesArray.map(p =>
        <span
          key={p}
          className={p === page ? 'page page__current' : 'page'}
          onClick={() => {
            if(!loadedPages.includes(p)){
              changePage(p);
              loadedPages.push(p);
              console.log(loadedPages);
            }
          }}
        > {p}</span>
      )}
    </div>
  );
};

export default PagesList;