const express = require('express');
const router = express.Router();
const RuleService = require('../services/rules')

/* GET agents listing. */
router.get('/rules', function(req, res, next) {

  let offset = req.query.offset;
  let limit = req.query.limit;

  const dataRules= RuleService.getRules(offset,limit)

  const body = {
    total_items : dataRules.length,
    data : dataRules
  }
  res.status(200).json(body)
});


router.get('/rules/:id', function(req, res, next) {
  let id = req.params.id;

  const agent = RuleService.getRuleById(id)

  res.status(200).json(agent)
});

module.exports = router;
