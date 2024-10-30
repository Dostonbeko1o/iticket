const express = require("express");
const router = express.Router();
const customerController = require("../controller/customer.controller");

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer management
 */

/**
 * @swagger
 * /api/customer:
 *   post:
 *     tags: [Customer]
 *     summary: Create a new customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: date
 *               gender:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               hashed_refresh_token:
 *                 type: number
 *     responses:
 *       201:
 *         description: Customer created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/customer", customerController.createCustomer);

/**
 * @swagger
 * /api/customer:
 *   get:
 *     tags: [Customer]
 *     summary: Get all customer
 *     responses:
 *       200:
 *         description: List of customer
 *       500:
 *         description: Server error
 */
router.get("/customer", customerController.getCustomer);

/**
 * @swagger
 * /api/customer/{id}:
 *   get:
 *     tags: [Customer]
 *     summary: Get customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer details
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.get("/Customer/:id", customerController.getCustomerById);

/**
 * @swagger
 * /api/customer/{id}:
 *   put:
 *     tags: [Customer]
 *     summary: Update customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: date
 *               gender:
 *                 type: number
 *               lang_id:
 *                 type: number
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customer updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.put("/customer/:id", customerController.updateCustomer);

/**
 * @swagger
 * /api/customer/{id}:
 *   delete:
 *     tags: [Customer]
 *     summary: Delete customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     responses:
 *       204:
 *         description: Customer deleted
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.delete("/customer/:id", customerController.deleteCustomer);

module.exports = router;
