import userProfile from './data/user'

const mapboxgl = require('mapbox-gl');
// NOTE: Typically this would utilize the import syntax like below -
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// At the time of recording, this is a known bug with MapBox and imports
// which means we will utilize the require syntax for now

const userSection = document.getElementById('user');
const userInfoList = document.createElement('ul');

const buildUser = (userData) => {
    for(const prop in userData){
        const lineItemContent = `${prop}: ${userData[prop]}`
        const lineItem = document.createElement('li')
        lineItem.innerText = lineItemContent;
        userInfoList.appendChild(lineItem)
        userSection.appendChild(userInfoList)
    }
}
// mapbox key :
// 'pk.eyJ1IjoiZnNicmFuZG9uYnJvd24iLCJhIjoiY2t1Z2I5a3I4MDA2ODJucXQ0bGw2a2FtYSJ9.9a7D_ZISjezOIdhySMDzfA'
(()=>{
    buildUser(userProfile);
    mapboxgl.accessToken = process.env.NODE_ENV === 'production' ? process.env.API_KEY_MAPBOX : 'broken';
    const map = new mapboxgl.Map({
    container: 'mapContainer', // container ID
    style: 'mapbox://styles/fsbrandonbrown/cl100jc4s000p14lcvs9e5avz', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
    });
})()