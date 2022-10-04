//setup router
const express = require('express');
const router = express.Router();

//require controller functions
const memesCtrl = require('../controllers/memes');

//sets up endpoints for memes
router.post('/', memesCtrl.createPost);
router.get('/', memesCtrl.getAllPosts);
router.get('/:postId', memesCtrl.getPostById);
router.put('/:postId', memesCtrl.updatePostById);
router.delete('/:postId', memesCtrl.deletePostById);

module.exports = router;