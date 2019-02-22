var router = function (app) {
	app.use('/', require('../../routes/index.js'));
	app.use('/makecard', require('../../routes/makecard/makecard.js'));

};


module.exports = router;