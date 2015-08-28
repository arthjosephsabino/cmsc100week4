var student = require ('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){
	router.route ('/students')
		.get(student.find);

	router.route ('/teacher')
		.get(teacher.find)
		.post(teacher.create)
		.put(teacher.update)
		.delete(teacher.remove);

		return router;


};