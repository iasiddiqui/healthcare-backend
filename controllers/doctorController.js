const Doctor = require('../models/Doctor');

exports.createDoctor = async (req, res) => {
  try {
    const { name, specialization } = req.body;
    const doctor = await Doctor.create({ name, specialization });
    res.status(201).json(doctor);
  } catch (err) {
    res.status(500).json({ msg: 'Error creating doctor' });
  }
};

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching doctors' });
  }
};

exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) return res.status(404).json({ msg: 'Doctor not found' });
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ msg: 'Error retrieving doctor' });
  }
};

exports.updateDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) return res.status(404).json({ msg: 'Doctor not found' });

    await doctor.update(req.body);
    res.json(doctor);
  } catch (err) {
    res.status(500).json({ msg: 'Error updating doctor' });
  }
};

exports.deleteDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) return res.status(404).json({ msg: 'Doctor not found' });

    await doctor.destroy();
    res.json({ msg: 'Doctor deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Error deleting doctor' });
  }
};
