const Patient = require('../models/Patient');

exports.createPatient = async (req, res) => {
  try {
    const { name, age, condition } = req.body;
    const patient = await Patient.create({ name, age, condition, UserId: req.user.id });
    res.status(201).json(patient);
  } catch (err) {
    res.status(500).json({ msg: 'Error creating patient', error: err.message });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll({ where: { UserId: req.user.id } });
    res.json(patients);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching patients' });
  }
};

exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) return res.status(404).json({ msg: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(500).json({ msg: 'Error retrieving patient' });
  }
};

exports.updatePatient = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) return res.status(404).json({ msg: 'Patient not found' });

    await patient.update(req.body);
    res.json(patient);
  } catch (err) {
    res.status(500).json({ msg: 'Error updating patient' });
  }
};

exports.deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) return res.status(404).json({ msg: 'Patient not found' });

    await patient.destroy();
    res.json({ msg: 'Patient deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Error deleting patient' });
  }
};
