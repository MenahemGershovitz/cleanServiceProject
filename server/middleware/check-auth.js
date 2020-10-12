const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1];  //verifie si le token (temporaire) correspond et si oui il continue dans le login
        jwt.verify(token, "secret_this_should_be_longer");
        next();
    }
    catch(error){
        res.status(401).json({message:'Auth failed'});
    }
    
    
}