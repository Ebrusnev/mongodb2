var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/gsClasses';
/*MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server");
	db.collection('students').find().toArray(function(err, docs){
		if (err) {
			console.log('Error', err);
		}
		else{
			console.log(docs);
			db.close();
		}
	});
});*/


/*MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server");
	db.collection('students').find().limit(5).toArray(function(err, docs){
		if (err) {
			console.log('Error', err);
		}
		else{
			console.log(docs);
			db.close();
		}
	});
});
*/


/*
MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server");
	db.collection('students').find().skip(5).limit(5).toArray(function(err, docs){
		if (err) {
			console.log('Error', err);
		}
		else{
			console.log(docs);
			db.close();
		}
	});
});
*/


MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server");
	db.collection('students').find().sort({$natural: -1}).limit(20).toArray(function(err, docs){
		if (err) {
			console.log('Error', err);
		}
		else{
			console.log(docs);
			db.close();
		}
	});
});



/*MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server");
	db.collection('students').find().project({id: true, name: true, address: true}).toArray(function(err, docs){
		if (err) {
			console.log('Error', err);
		}
		else{
			console.log(docs);
			db.close();
		}
	});
});*/


/*company check*/
/*MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server");
	db.collection('students').find().project({company: true}).toArray(function(err, docs){
		if (err) {
			console.log('Error', err);
		}
		else{
			console.log(docs);
			db.close();
		}
	});
});*/


/*MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server");
	db.collection('students').find().sort({ bonus: -1}).limit(15).toArray(function(err, docs){
		if (err) {
			console.log('Error', err);
		}
		else{
			console.log(docs);
			db.close();
		}
	});
});*/


/*MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server");
	db.collection('students').insertOne({name: 'Evgenii Brusnev'}, function(err, res){
		if (err) {
			console.log('Error', err);
		}
		else{
			console.log("Success");
			db.close();
		}
	});
});*/



/*MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server");
	db.collection('students').insertMany([
		{name: 'Evgenii Brusnev'},
		{name: 'Gregory Soloshenko'},
		{name: 'Billy Batson'}
		], function(err, res){
		if (err) {
			console.log('Error', err);
		}
		else{
			console.log("Success");
			db.close();
		}
	});
});*/



/*MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server");
	db.collection('students').updateMany({sport: "Judo"}, { $set: {company: ""}}, function(err, res){
		if (err) {
			console.log('Error', err);
		}
		else{
			console.log("Success");
			db.close();
		}
	});
});*/



MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server");
	db.collection('students').deleteMany({eye: "Brown"}, function(err, res){
		if (err) {
			console.log('Error', err);
		}
		else{
			console.log("Success");
			db.close();
		}
	});
});