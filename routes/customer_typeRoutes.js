const express = require("express");
const router = express.Router();
const customer_typeController = require("../controller/customer_type.controller");

/**
 * @swagger
 * tags:
 *   name: Customer_type
 *   description: Customer_type management
 */

/**
 * @swagger
 * /api/customer_type:
 *   post:
 *     tags: [Customer_type]
 *     summary: Create a new customer_type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Customer_type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/customer_type", customer_typeController.createCustomer_type);

/**
 * @swagger
 * /api/customer_type:
 *   get:
 *     tags: [Customer_type]
 *     summary: Get all customer_type
 *     responses:
 *       200:
 *         description: List of customer_type
 *       500:
 *         description: Server error
 */
router.get("/customer_type", customer_typeController.getCustomer_type);

/**
 * @swagger
 * /api/customer_type/{id}:
 *   get:
 *     tags: [Customer_type]
 *     summary: Get customer_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_type ID
 *     responses:
 *       200:
 *         description: Customer_type details
 *       404:
 *         description: Customer_type not found
 *       500:
 *         description: Server error
 */
router.get("/Customer_type/:id", customer_typeController.getCustomer_typeById);

/**
 * @swagger
 * /api/customer_type/{id}:
 *   put:
 *     tags: [Customer_type]
 *     summary: Update customer_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Customer_type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer_type not found
 *       500:
 *         description: Server error
 */
router.put("/customer_type/:id", customer_typeController.updateCustomer_type);

/**
 * @swagger
 * /api/customer_type/{id}:
 *   delete:
 *     tags: [Customer_type]
 *     summary: Delete customer_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer_type ID
 *     responses:
 *       204:
 *         description: Customer_type deleted
 *       404:
 *         description: Customer_type not found
 *       500:
 *         description: Server error
 */
router.delete(
  "/customer_type/:id",
  customer_typeController.deleteCustomer_type
);

module.exports = router;
