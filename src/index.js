import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Body from './components/body/body';

const root = ReactDOM.createRoot(document.getElementById('root'));

const initialData = [
  {"id":1,"name":"Divavu","startDate":"9/19/2017","endDate":"3/9/2018","budget":88377},
  {"id":2,"name":"Jaxspan","startDate":"11/21/2017","endDate":"2/21/2018","budget":608715},
  {"id":3,"name":"Miboo","startDate":"11/1/2017","endDate":"6/20/2017","budget":239507},
  {"id":4,"name":"Trilith","startDate":"8/25/2017","endDate":"11/30/2017","budget":179838},
  {"id":5,"name":"Layo","startDate":"11/28/2017","endDate":"3/10/2018","budget":837850},
  {"id":6,"name":"Photojam","startDate":"7/25/2017","endDate":"6/23/2024","budget":858131},
  {"id":7,"name":"Blogtag","startDate":"6/27/2017","endDate":"1/15/2018","budget":109078},
  {"id":8,"name":"Rhyzio","startDate":"10/13/2017","endDate":"1/25/2018","budget":272552},
  {"id":9,"name":"Zoomcast","startDate":"9/6/2017","endDate":"11/10/2017","budget":301919},
  {"id":10,"name":"Realbridge","startDate":"3/5/2018","endDate":"10/2/2017","budget":505602},
  {"id":11,"name":"Divavu1","startDate":"9/19/2017","endDate":"3/9/2018","budget":88377},
  {"id":12,"name":"Jaxspan2","startDate":"11/21/2017","endDate":"2/21/2018","budget":608715},
  {"id":13,"name":"Miboo3","startDate":"11/1/2017","endDate":"6/20/2017","budget":239507},
  {"id":14,"name":"Trilith4","startDate":"8/25/2017","endDate":"11/30/2017","budget":179838},
  {"id":15,"name":"Layo5","startDate":"11/28/2017","endDate":"3/10/2018","budget":837850},
  {"id":16,"name":"Photojam6","startDate":"7/25/2017","endDate":"6/23/2017","budget":858131},
  {"id":17,"name":"Blogtag7","startDate":"6/27/2017","endDate":"1/15/2018","budget":109078},
  {"id":18,"name":"Rhyzio8","startDate":"10/13/2017","endDate":"1/25/2018","budget":272552},
  {"id":19,"name":"Zoomcast9","startDate":"9/6/2017","endDate":"11/10/2017","budget":301919},
  {"id":20,"name":"Realbridge10","startDate":"3/5/2018","endDate":"10/2/2017","budget":505602},
  {"id":21,"name":"Realbridge11","startDate":"3/5/2018","endDate":"10/2/2017","budget":505602},

];

root.render(
  <React.StrictMode>
    <Body initialData={initialData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
