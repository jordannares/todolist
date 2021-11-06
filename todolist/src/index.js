import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from './components/Root';
// import AppClass from './components/AppClass';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Create a client
const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <Root />
      <ReactQueryDevtools />
    </QueryClientProvider>

    {/* <AppClass /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
