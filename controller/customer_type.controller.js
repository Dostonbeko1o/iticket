const { Customer_type } = require("../model");
const {
  validateCustomer_type,
} = require("../validations/customer_typeValidation");

exports.createCustomer_type = async (req, res) => {
  const { error } = validateCustomer_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customer_type = await Customer_type.create(req.body);
    res.status(201).send(customer_type);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCustomer_type = async (req, res) => {
  try {
    const customer_type = await Customer_type.findAll();
    res.status(200).send(customer_type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getCustomer_typeById = async (req, res) => {
  try {
    const customer_type = await Customer_type.findByPk(req.params.id);
    if (!customer_type) return res.status(404).send("Customer_type not found");
    res.status(200).send(customer_type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateCustomer_type = async (req, res) => {
  try {
    const customer_type = await Customer_type.findByPk(req.params.id);
    if (!customer_type) return res.status(404).send("Customer_type not found");
    await customer_type.update(req.body);
    res.status(500).send(customer_type);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteCustomer_type = async (req, res) => {
  try {
    const customer_type = await Customer_type.findByPk(req.params.id);
    if (!customer_type) return res.status(404).send("Customer_type  not found");

    const customer_typeData = customer_type.toJSON();

    await customer_type.destroy();
    res.status(204).send(customer_typeData);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
