const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("div", {id: "heading1"},
 [React.createElement("div", {id:"child1"}, 
 [React.createElement("h1", {}, "This is h1 tag"), React.createElement("h2", {}, "This is h2 tag")]),
 React.createElement("div", {id:"child2"}, 
 [React.createElement("h1", {}, "This is h1 tag"), React.createElement("h2", {}, "This is h2 tag")])]);
root.render(heading);