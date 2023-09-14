import { Fragment } from 'react';

import Header from '../components/Header/Header';

const ErrorPage = () => {
  return (
    <Fragment>
      <Header />
      <h1>An error occured</h1>
      <p>Could not find this page</p>
    </Fragment>
  );
};

export default ErrorPage;
