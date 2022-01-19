const superagent = require("superagent");
require('dotenv').config();

// NASA API call
function photo(obj) {
    this.imgUrl = obj.img_src;
    this.camera = obj.camera.full_name;
    this.sol = obj.sol;
    this.rover = obj.rover.name;
    this.landingDate = obj.rover.landing_date;
    this.status = obj.rover.status;
}

async function handler(req, res) {
    let camera = req.query.camera;
    if (camera == undefined)
        camera = "curiosity";

    let parameters = {
        sol: req.query.sol,
    };

    let url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${camera}/photos?&api_key=${process.env.API_KEY}`;
    let data = await superagent.get(url).query(parameters).catch();

    let photos = data.body.photos.map(val => new photo(val));
    res.render("index", { photos: photos });
}

module.exports = handler;