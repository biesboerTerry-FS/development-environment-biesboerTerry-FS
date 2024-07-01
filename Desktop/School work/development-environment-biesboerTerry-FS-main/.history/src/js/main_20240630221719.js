import userProfile from "./data/user.js";

const userSection = document.getElementById("user");
const userInfoList = document.createElement("ul");

const mapboxgl = require(`mapbox-gl`);

const buildUser = (userData) => {
	for (const prop in userData) {
		const lineItemContent = `${prop}: ${userData[prop]}`;
		const lineItem = document.createElement("li");
		lineItem.innerText = lineItemContent;
		userInfoList.appendChild(lineItem);
		userSection.appendChild(userInfoList);
	}
};

// public key for mapbox pk.eyJ1IjoidGJpZXNib2VyIiwiYSI6ImNseTJkbWJjaTE4OTUyaXBubnRzeG95MzUifQ.S49E3GlPyfo9Khf4j7cBIw

(() => {
	console.log("Hey ", userProfile);
	buildUser(userProfile);
	mapboxgl.accessToken =
		process.env.NODE_ENV === `production`
			? process.env.API_KEY_MAPBOX
			: "broken";
	const map = new mapboxgl.Map({
		container: "mapContainer", // container ID
		style: "mapbox://styles/tbiesboer/cly2eisyv00ab01p80z70hvzh", // style URL
		center: [-74.5, 40], // starting position [lng, lat]
		zoom: 9 // starting zoom
	});
})();
