const express = require('express');
const router = express.Router();
const Produto = require('../models/produto');

router.get('/',async (req, res)=> {
    res.json(await Produto.find());
});

router.get('/:id',async (req, res)=> {
    res.json(await Produto.findById(req.params.id));
});

router.post('/',async (req, res)=> {
    res.json(await new Produto(req.body).Save());
});

router.put('/:id',async (req, res)=> {
    res.json(await new Produto.findByIdAndUpdate(req.params.id, req.body));
});

router.delete('/:id',async (req, res)=> {
    res.json(await new Produto.findByIdAndRemove(req.params.id));
});

module.exports = router