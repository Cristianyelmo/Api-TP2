const express = require('express');
const router = express.Router();
const {list,detail,store,update,destroy2} = require('../../controllers/api/genresController');

router.get('/genres', list);
router.get('/genres/:id',detail);
router.post('/genres',store)
router.put('/genres/:id',update);
router.delete('/genres/:id',destroy2)
 


module.exports = router;