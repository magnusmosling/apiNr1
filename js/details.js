console.dir(document);

const queryString = document.location.search;

console.log("queryString: ",queryString);

const params = new URLSearchParams(queryString);

console.log(params);
console.log(params.get("name"));

const selectedName = params.get("name");

const headerDetails = document.querySelector("h1");

headerDetails.innerHTML = selectedName
