const { Flat } = require("../model");
const { validateFlat } = require("../validations/flatValidation");

exports.createFlat = async (req, res) => {
  const { error } = validateFlat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const flat = await Flat.create(req.body);
    res.status(201).send(flat);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getFlat = async (req, res) => {
  try {
    const flat = await Flat.findAll();
    res.status(200).send(flat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getFlatById = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);

    if (!flat) return res.status(404).send("Flat not found");
    res.status(200).send(flat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateFlat = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);
    if (!flat) return res.status(404).send("Flat not found");
    await flat.update(req.body);
    res.status(500).send(flat);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteFlat = async (req, res) => {
  try {
    const flat = await Flat.findByPk(req.params.id);
    if (!flat) return res.status(404).send("Flat  not found");

    const flatData = flat.toJSON();

    await flat.destroy();
    res.status(204).send(flatData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
