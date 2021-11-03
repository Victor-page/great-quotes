import { Fragment } from 'react';
import { useParams, Route, Switch } from 'react-router-dom';

import HighLightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Earl Nightingale',
    text: 'One hour per day of study in your chosen field is all it takes. One hour per day of study will put you at the top of your field within three years. Within five years you’ll be a national authority. In seven years, you can be one of the best people in the world at what you do.',
  },
  {
    id: 'q2',
    author: 'Richard Feynman',
    text: 'Study hard what interests you the most in the most undisciplined, irreverent and original manner possible.',
  },
  {
    id: 'q3',
    author: 'Mahatma Gandhi',
    text: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
  },
];

const QuoteDetail = () => {
  const { quoteId } = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === quoteId);

  if (!quote) {
    return <p>No quote found.</p>;
  }

  return (
    <Fragment>
      <HighLightedQuote text={quote.text} author={quote.author} />

      <Switch>
        <Route path={`/quotes/${quoteId}/comments`}>
          <Comments />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default QuoteDetail;
