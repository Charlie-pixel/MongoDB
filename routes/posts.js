const express = require("express")
const router = express.Router();
const Post = require("../models/Post")
require('mongoose');

//Get all data from the database
router.get('/', async (req, res) => {
    const doc = await Post.find();
    res.send(doc);
});

//Get a certain client by id
router.get('/:id', async (req, res) => {
    try {
        const doc = await Post.findById(req.params.id);
        res.json(doc);
    } catch (error) {
        res.json({ message: error });
    }
});


//Add a new post
router.post('/', (req, res) => {
    const post = new Post({
        client: req.body.client,
        company: req.body.company,
        request: req.body.request,
        progress: req.body.progress,
    });
    post.save().then(data => res.json(data));
});


//Delete all posts
router.delete('/', async (req, res) => {
    try {
        const removedPosts = await Post.deleteMany({});
        res.json(removedPosts);
    } catch (error) {
        res.json({ message: error });    
    }
    
});


/**
 * [
    {
        "_id": "6274a435378182dbbcbeae15",
        "client": "Alex",
        "company": "Soreal",
        "request": "Find my daughter!",
        "progress": "Complete",
        "__v": 0
    },
    {
        "_id": "6274a8a4f87f04216f266acf",
        "client": "Sarah",
        "company": "ToysRus",
        "request": "Toy order",
        "progress": "IN progress",
        "__v": 0
    },
    {
        "_id": "62753e507fa6d5d255193920",
        "client": "Alex",
        "company": "PI Company",
        "request": "Find missing person",
        "progress": "In progress",
        "__v": 0
    },
    {
        "_id": "62753fdb518d4c500856592f",
        "client": "Alex",
        "company": "PI Company",
        "request": "Find missing person",
        "progress": "In progress",
        "__v": 0
    }
]
 */

//Delete a certain post
router.delete('/:id', async (req, res) => {
    try {
        const removedPost = await Post.remove({ _id: req.params.id });
        res.json(removedPost);
    } catch (error) {
        res.json({ message: error });
        console.log('error when deleting document');
    }
    
}
);

//Update a certain post
router.patch('/:id', async (req, res) => {
    try
    {
        const updatedPost = await Post.updateOne({_id: req.params.id}, 
            {$set: {progress: req.body.progress}});
            res.json(updatedPost);
    }catch(error)
    {

    }
});
    






module.exports = router;