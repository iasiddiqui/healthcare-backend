const Mapping = require('../models/Mapping');
const Patient = require('../models/Patient');
const Doctor = require('../models/Doctor');

exports.assignDoctor = async (req, res) => {
  try {
    const { patientId, doctorId } = req.body;
    const mapping = await Mapping.create({ PatientId: patientId, DoctorId: doctorId });
    res.status(201).json(mapping);
  } catch (err) {
    res.status(500).json({ msg: 'Error assigning doctor' });
  }
};

exports.getAllMappings = async (req, res) => {
  try {
    const mappings = await Mapping.findAll({ include: [Patient, Doctor] });
    res.json(mappings);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching mappings' });
  }
};

exports.getDoctorsByPatient = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.patientId, {
      include: [Doctor]
    });
    if (!patient) return res.status(404).json({ msg: 'Patient not found' });

    res.json(patient.Doctors);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching doctors for patient' });
  }
};

exports.removeMapping = async (req, res) => {
  try {
    const mapping = await Mapping.findByPk(req.params.id);
    if (!mapping) return res.status(404).json({ msg: 'Mapping not found' });

    await mapping.destroy();
    res.json({ msg: 'Mapping removed' });
  } catch (err) {
    res.status(500).json({ msg: 'Error removing mapping' });
  }
};
