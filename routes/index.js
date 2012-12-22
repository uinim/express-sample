
/*
 * GET home page.
 */

var items = [
    { "text": "1st Post." }
  , { "text": "2nd Post." }
];

exports.index = function(req, res){
	res.render('index', { title: 'Express', items: items });
};