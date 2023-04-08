import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// // import Root, {loader as rootLoader, action as rootAction, } from './routes/root';
// // import ErrorPage from "./routes/error-page";
// // import Contact from "./routes/contact";
// import Container  from './Components/A2oj_M/components/Container';

// const router = createBrowserRouter([
//   {
//     path: "/container",
//     element: <Container/>
//     // errorElement: <ErrorPage/>,

//   },
  
// ]);
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       {/* <Root /> */}
//     </RouterProvider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
