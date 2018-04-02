let userRouter = require('express').Router()

let User = require('../models/user.model')

userRouter.post('/edit', (req, res) => {
	User.update(req.body.filter, req.body.query, (err, result) => {
		if (err) {
			res.send(err.message)
		}
		else {
			res.send(result)
		}
	})
})

userRouter.get('/find', (req, res) => {
	User.find({}, '-password -__v', (err, users) => {
		if (err) {
			return res.send(err.message)
		}
		return res.send(users)
	})
})

userRouter.post('/remove', (req, res) => {
	User.remove({_id: req.body.id}, (err, result) => {
		if (err) {
			res.send(err.message)
		}
		else {
			res.send(result)
		}
	})
})

module.exports = userRouter