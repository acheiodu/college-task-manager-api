let bcrypt = require('bcrypt-nodejs')
let jwt = require('jwt-simple')
let router = require('express').Router()

let User = require('./models/user.model')

router.post('/register', (req, res) => {
	let user = new User(req.body)
	user.save((err, result) => {
		if (err) {
			return res.send(err)
		}
		return res.send(result)
	})
})

router.post('/login', (req, res) => {
	let userData = req.body
	User.findOne({email: userData.email})
	.then((user) => {
		if (!user) {
			return res.status(401).send({message: 'Invalid email.'})
		}
		bcrypt.compare(userData.password, user.password, (err, isMatch) => {
			if (err) {
				return res.status(500).send({message: 'Unknown error.'})
			}
			if (!isMatch) {
				return res.status(401).send({message: 'Invalid password.'})
			}
			let payload = {subject: user._id}
			let token = jwt.encode(payload, 'hYn93eAF0A8GTyrUE0LeW4luPf2drJUlA9OLlB3k8LJbKaM7VqlJ9l5ph84R1xA')
			res.status(200).send({token: token})
		})
	})
	.catch((err) => {
		res.status(500).send({message: 'Unknown error.'})
	})
})

let auth = {
	router,
	checkToken: (req, res, next) => {
		if (!req.header('authorization')) {
			return res.status(401).send({message: 'Unauthorized. Missing Authorization Header.'})
		}
		let token = req.header('authorization').split(' ')[1]
		let payload = jwt.decode(token, 'hYn93eAF0A8GTyrUE0LeW4luPf2drJUlA9OLlB3k8LJbKaM7VqlJ9l5ph84R1xA')
		if (!payload) {
			return res.status(401).send({message: 'Unauthorized. Invalid Authorization Header.'})
		}
		req.userId = payload.subject
		next()
	}
}

module.exports = auth