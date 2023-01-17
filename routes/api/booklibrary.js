const express = require('express');
const router = express.Router();
const Book = require('../../models/bookmodel');

router.post('/add', (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        ISBN: req.body.ISBN,
        desc: req.body.desc,
        img: req.body.img,
        genre: req.body.genre,
    });
    newBook.save()
        .then(book => res.json(book))
        .catch(err => res.status(400).json(err));
});

router.get('/', (req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json(err));
});

router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(book => res.json(book))
        .catch(err => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id)
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json(err));
});

module.exports = router;
