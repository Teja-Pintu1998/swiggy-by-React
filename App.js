// import React from 'react';
// import ReactDOM from 'react-dom';



const parent = React.createElement("h4", { id: "parent" },"helloreact");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
