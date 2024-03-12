const express = require('express');
const router = express.Router();

const controller = require('../controllers/apartments.controller');

router.route('/')
    .get(controller.getApartments)
    .post(controller.createApartment);

router.route('/:apartmentId')
    .get(controller.getApartment)
    .patch(controller.updateApartment)
    .delete(controller.deleteApartment);

module.exports = router;