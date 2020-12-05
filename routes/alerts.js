const express = require('express');
const router = express.Router();
const AlertService = require('../services/alerts')

/* GET alerts listing. */
router.get('/alerts', function(req, res, next) {

  let offset = req.query.offset;
  let limit = req.query.limit;
  let id = req.query.id;

  const dataAlerts = AlertService.getAlerts(offset,limit,id)

  const body = {
    total_items : dataAlerts.length,
    data : dataAlerts
  }

  res.status(200).json(body)
});

module.exports = router;
