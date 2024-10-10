const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../modles/User')
//auth
exports.auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.token ||
      req.body.token ||
      req.header('Authorization').replace('Bearer ')
    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Token is missing',
      })
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET)
      console.log(decode)
      req.user = decode
    } catch (error) {
      return res.status(401).json({
        success: false,
        message: 'Token is invalid',
      })
    }
    next()
  } catch (error) {
    return res.status(500).json({
      success: 'Something went wrong while validate the user',
    })
  }
}
//isStudent
exports.isStudent = async (req, res, next) => {
  try {
    if (req.user.accountType !== 'Student') {
      return res.status(401).json({
        success: false,
        message: 'This is a protected route for student only',
      })
    }
    next()
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'User role cannot be verified, please try again',
    })
  }
}
//isInstructor
exports.isInstructor = async (req, res, next) => {
  try {
    if (req.user.accountType !== 'Instructor') {
      return res.status(401).json({
        success: false,
        message: 'This is a protected route for Instructor only',
      })
    }
    next()
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'User role cannot be verified, please try again',
    })
  }
}
//isAdmin
exports.isAdmin = async (req, res, next) => {
  try {
    if (req.user.accountType !== 'Admin') {
      return res.status(401).json({
        success: false,
        message: 'This is a protected route for Amin only',
      })
    }
    next()
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'User role cannot be verified, please try again',
    })
  }
}
