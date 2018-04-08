let mongoose = require('mongoose')
let Schema = mongoose.Schema

let assignmentSchema = new Schema({
	author: String,
	type: String,
	subject: String,
	requestDate: String,
	dueDate: String,
	description: String,
	status: String,
	grade: String,
	totalGrade: String
})

module.exports = mongoose.model('Assignment', assignmentSchema)
