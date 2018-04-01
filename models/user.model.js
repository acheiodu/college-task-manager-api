let mongoose = require('mongoose')
let bcrypt = require('bcrypt-nodejs')

let Schema = mongoose.Schema

let userSchema = new Schema({
	email: String,
	password: String
})

userSchema.pre('save', function(next) {
	let user = this
	if (!user.isModified('password')) {
		return next()
	}
	bcrypt.hash(user.password, null, null, (err, hash) => {
		if (err) {
			return next(err)
		}
		user.password = hash
		return next()
	})
})

module.exports = mongoose.model('User', userSchema)
