const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  assignDoctor,
  getAllMappings,
  getDoctorsByPatient,
  removeMapping
} = require('../controllers/mappingController');

router.post('/', auth, assignDoctor);
router.get('/', getAllMappings);
router.get('/:patientId', getDoctorsByPatient);
router.delete('/:id', auth, removeMapping);

module.exports = router;
