const container = document.querySelector("#container");

const content = document.createElement('div');
content.classList.add("content");
content.textContent = "This is the content !"

container.appendChild(content);

const redP = document.createElement('p');
redP.style.color = "red";
redP.textContent = "Hey, I'm red !";
container.appendChild(redP);

const blueH3 = document.createElement('h3');
blueH3.style.color = "blue";
blueH3.textContent = "I am a blue h3 !";
container.appendChild(blueH3);

const pinkDiv = document.createElement('div');
pinkDiv.style.background = "pink";
pinkDiv.style.border = "solid black";

const divH1 = document.createElement('h1');
divH1.textContent = "I'm a div title !";
pinkDiv.appendChild(divH1);

const divP = document.createElement('p');
divP.textContent = "Me too";
pinkDiv.appendChild(divP);

container.appendChild(pinkDiv);