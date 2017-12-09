let Assignment = require('../models/assignment.server.model')

exports.find = (req, res) => {
	Assignment.find({}, (err, assignments) => {
		if (err) {
			res.send(err.message)
		} else {
			res.send(assignments)
		}
	})
}

exports.remove = (req, res) => {
	Assignment.remove({_id: req.body.id}, (err, result) => {
		if (err) {
			res.send(err.message)
		} else {
			res.send(result)
		}
	})
}

exports.save = (req, res) => {
	let entry = new Assignment(req.body)
	entry.save((err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result)
		}
	})
}
