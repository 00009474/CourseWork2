const getIndex = (req, res) => {
    res.render('index')
}

const Todo = require('../models/Todo')

const post_index = (req,res) => {
    const newTodo = new Todo ({
        comment: req.body.comment
    })
    newTodo.save((err) => {
        if(err) console.log(err)
        res.redirect('/')
    })
}

module.exports = {
    getIndex: getIndex,
    post_index: post_index 
}