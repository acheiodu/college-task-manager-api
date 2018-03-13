let Assignment = require('../models/assignment.server.model')

exports.edit = (req, res) => {
	Assignment.update(req.body.filter, req.body.query, (err, result) => {
		if (err) {
			res.send(err.message)
		} else {
			res.send(result)
		}
	})
}

exports.find = (req, res) => {
	Assignment.find({}, (err, assignments) => {
		if (err) {
			res.send(err.message)
		} else {
			res.send(assignments.sort((assignment1, assignment2) => {
				if (assignment1.dueDate > assignment2.dueDate)
					return 1;
				else if (assignment1.dueDate < assignment2.dueDate)
					return -1;
				else
				 return 0;
			}))
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
