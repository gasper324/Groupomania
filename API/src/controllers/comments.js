const db = require("../config/database.js");
const jwt = require('jsonwebtoken');

exports.createComment = async (req, res, next) => {
    const commentText = req.body.commenttext;
    const postId = req.params.postId;
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.TOKEN);
    const commentAuthor = decodedToken.userId;
    console.log(commentAuthor)
    const rows = await db.query(
        'INSERT INTO "comment" (commenttext, commentauthor, postid) VALUES ($1, $2, $3)',
        [commentText, commentAuthor, postId]
    );
    res.status(200).send({
        message: 'Comment added'
    }
    );
};

exports.getAllComments = async (req, res, next) => {
    const comments = await db.query('SELECT * FROM comment ORDER BY commentId ASC');
    res.status(200).send(comments.rows)
};

exports.updateCommentByCommentId = async (req, res, next) => {
    
}
