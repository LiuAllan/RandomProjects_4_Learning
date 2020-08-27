const express = require('express');
const cors = require('cors');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const AmazonStrategy = require('passport-amazon').Strategy;
const GithubStrategy = require('passport-github').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const InstagramStrategy = require('passport-instagram').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const keys = require('../config');
const chalk = require('chalk');
let user = {};

passport.serializeUser((user, cb) => {
	cb(null, user);
});

passport.deserializeUser((user, cb) => {
	cb(null, user);
})

const app = express();
app.use(cors());
app.use(passport.initialize());


// Google Strategy
passport.use(new GoogleStrategy({
	clientID: keys.GOOGLE.clientID,
	clientSecret: keys.GOOGLE.clientSecret,
	callbackURL: '/auth/github/callback'
},
	(accessToken, refreshToken, profile, cb) => {
		console.log(chalk.blue(JSON.stringify(profile)));
		user = {...profile}
		return cb(null, profile);
	}));


// Github Strategy
passport.use(new GithubStrategy({
	clientID: keys.GITHUB.clientID,
	clientSecret: keys.GITHUB.clientSecret,
	callbackURL: '/auth/github/callback'
},
	(accessToken, refreshToken, profile, cb) => {
		console.log(chalk.blue(JSON.stringify(profile)));
		user = {...profile}
		return cb(null, profile);
	}));


// Amazon Strategy
passport.use(new AmazonStrategy({
	clientID: keys.AMAZON.clientID,
	clientSecret: keys.AMAZON.clientSecret,
	callbackURL: '/auth/amazon/callback'
},
	(accessToken, refreshToken, profile, cb) => {
		console.log(chalk.blue(JSON.stringify(profile)));
		user = {...profile}
		return cb(null, profile);
	}));


// Facebook Strategy
passport.use(new FacebookStrategy({
	clientID: keys.FACEBOOK.clientID,
	clientSecret: keys.FACEBOOK.clientSecret,
	callbackURL: '/auth/facebook/callback'
},
	(accessToken, refreshToken, profile, cb) => {
		console.log(chalk.blue(JSON.stringify(profile)));
		user = {...profile}
		return cb(null, profile);
	}));

//Routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate(('google'), (req,res) => {
	res.redirect('/profile');
}));

//Routes
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate(('github'), (req,res) => {
	res.redirect('/profile');
}));

//Routes
app.get('/auth/amazon', passport.authenticate('amazon', { scope: ['profile']}))
app.get('/auth/amazon/callback', passport.authenticate(('amazon'), (req,res) => {
	res.redirect('/profile');
}));


//Routes
app.get('/auth/facebook', passport.authenticate('facebook'))
app.get('/auth/facebook/callback', passport.authenticate(('facebook'), (req,res) => {
	res.redirect('/profile');
}));



app.get('/user', (req, res) => {
	console.log('getting user data');
	res.send(user);
})

app.get('/auth/logout', (req, res) => {
	console.log('logging out');
	user = {};
	res.redirect('/');
})

const PORT = 5000
app.listen(PORT);