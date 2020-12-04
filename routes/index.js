const express = require('express');
const router = express.Router();


const alertsRouter = require('./alerts');
const agentsRouter = require('./agents');
const rulesRouter = require('./rules');

router.use('/', alertsRouter);
router.use('/', agentsRouter);
router.use('/', rulesRouter);

module.exports = router;
