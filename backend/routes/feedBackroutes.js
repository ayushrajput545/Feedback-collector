const express = require('express')
const { feedBacks, getFeedbacks, deleteFeedback } = require('../controllers/FeedbacksController')
 
const router = express.Router()


router.post('/submit-feedback' , feedBacks )
router.get('/feedbacks' , getFeedbacks )
router.post('/deletefeedback' , deleteFeedback )


module.exports = router