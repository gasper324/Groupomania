const db = require("../config/database.js");

exports.createPost = async (req, res, next) => {
    const { title, postText, imageUrl, description } = req.body;
    const { rows } = await db.query(
        "INSERT INTO post (title, postText, imageUrl, description) VALUES ($1, $2, $3, $4)",
        [title, postText, imageUrl, description]
      );
    
      res.status(201).send({
        message: "Post added successfully!",
        body: {
          post: { title, postText, imageUrl, description}
        },
      });
    };
    
exports.getAllPosts = async (req, res, next) => {
  const posts = await db.query('SELECT * FROM post ORDER BY postId DESC');
  res.status(200).send(posts.rows)
};

exports.getPostById = async (req, res, next) => {  // needs error for param id not in database
  const postId = parseInt(req.params.postId);
  const post = await db.query('SELECT * FROM post WHERE postId = $1', [postId]);
  res.status(200).send(post.rows);
};

exports.updatePostById = async (req, res, next) => {  // looks successful when param is non-existant
  const postId = parseInt(req.params.postId);
  const { title, postText, imageUrl, description } = req.body;
  const post = await db.query('UPDATE post SET title = $1, postText = $2, imageURL = $3, description = $4 WHERE postID = $5',
    [title, postText, imageUrl, description, postId]);
  res.status(200).send({message: 'Post updated successfully'})
};

exports.deletePostById = async (req, res, next) => {
  const postId = parseInt(req.params.postId);
  await db.query('DELETE FROM post WHERE postId = $1', [postId]);
  res.status(200).send({message: 
  'Post deleted'})
};