
let users = []; 

const updateLocation = async (req,res) => {
    const { id, latitude, longitude ,email, userName} = req.body;

    const userExists = users.find(user => user.id === id);

    if (!userExists) {
        console.log(`New user added: Latitude: ${latitude}, Longitude: ${longitude}`);
        users.push({ id, latitude, longitude, name: `User ${users.length + 1}` ,email, userName});
    } else {
        
        userExists.latitude = latitude;
        userExists.longitude = longitude;
    }

    res.sendStatus(200);
};

const getNearbyUsers = async (req,res) => {
    const { lat, lng } = req.query;
    res.json(users);
};

module.exports = {updateLocation, getNearbyUsers};