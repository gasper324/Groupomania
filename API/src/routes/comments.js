const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const commentsCtrl = require('../controllers/comments');

router.post('/:postId', commentsCtrl.createComment);
router.get('/', commentsCtrl.getAllComments);

module.exports = router;