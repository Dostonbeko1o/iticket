const { District } = require("../model");
const { validateDistrict } = require("../validations/districtValidation");

exports.createDistrict = async (req, res) => {
  const { error } = validateDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const district = await District.create(req.body);
    res.status(201).send(district);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getDistrict = async (req, res) => {
  try {
    const district = await District.findAll();
    res.status(200).send(district);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDistrictById = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id);

    if (!district) return res.status(404).send("District not found");
    res.status(200).send(district);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateDistrict = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id);
    if (!district) return res.status(404).send("District not found");
    await district.update(req.body);
    res.status(500).send(district);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteDistrict = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id);
    if (!district) return res.status(404).send("District  not found");

    const districtData = district.toJSON();

    await district.destroy();
    res.status(204).send(districtData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
