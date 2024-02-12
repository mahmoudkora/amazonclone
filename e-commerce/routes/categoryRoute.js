const {getCategory,getAllCategory , createCategory} = require("../services/categoryServices")

const express = require('express');
const router = express.Router();


//oldWay
router.get('/', (getAllCategory) );
router.get('/:id', (getCategory) );
router.post('/', (createCategory));

// router.route('/').get(getCategory).post(createCategory)

module.exports = router