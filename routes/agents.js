const express = require('express');
const router = express.Router();
const AgentsService = require('../services/agents')

/* GET agents listing. */
router.get('/agents', function(req, res, next) {

  let offset = req.query.offset;
  let limit = req.query.limit;

  const dataAgents = AgentsService.getAgents(offset,limit)

  const body = {
    total_items : dataAgents.length,
    data : dataAgents
  }
  res.status(200).json(body)
});


router.get('/agents/:id', function(req, res, next) {
  let id = req.params.id;

  const agent = AgentsService.getAgentById(id)

  res.status(200).json(agent)
});

module.exports = router;
