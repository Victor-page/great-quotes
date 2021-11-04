import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) =>
  quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'ascending';

  const sortingMethod = isSortingAscending ? 'descending' : 'ascending';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);

  const changeSortingHandler = () =>
    history.push({
      pathname: location.pathname,
      search: `?sort=${sortingMethod}`,
    });

  const mapQuoteItems = ({ id, author, text }) => (
    <QuoteItem key={id} id={id} author={author} text={text} />
  );

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort{' '}
          <span className={classes['sorting-method']}>{sortingMethod}</span>
        </button>
      </div>
      <ul className={classes.list}>{sortedQuotes.map(mapQuoteItems)}</ul>
    </Fragment>
  );
};

export default QuoteList;
