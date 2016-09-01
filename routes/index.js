var express = require('express');
var router = express.Router();

/* var contentful = require('contentful')

var client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'First Project',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '5a3f12262a5b6da43ee8b8dd3e4d24a299122cc58fe164b4b0f58ad351e30602'
})
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client.getEntry('78rg6aNOgHtPXbfnPeFyad')
.then((entry) => console.log(entry))
*/


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



module.exports = router;
