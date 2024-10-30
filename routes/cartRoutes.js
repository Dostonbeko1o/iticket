const express = require("express");
const router = express.Router();
const cartController = require("../controller/cart.controller");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart management
 */

/**
 * @swagger
 * /api/cart:
 *   post:
 *     tags: [Cart]
 *     summary: Create a new cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               customer_id:
 *                 type: number
 *               status_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Cart created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/cart", cartController.createCart);

/**
 * @swagger
 * /api/cart:
 *   get:
 *     tags: [Cart]
 *     summary: Get all cart
 *     responses:
 *       200:
 *         description: List of cart
 *       500:
 *         description: Server error
 */
router.get("/cart", cartController.getCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   get:
 *     tags: [Cart]
 *     summary: Get cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Cart details
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
router.get("/Cart/:id", cartController.getCartById);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     tags: [Cart]
 *     summary: Update cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               customer_id:
 *                 type: number
 *               status_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Cart updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
router.put("/cart/:id", cartController.updateCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     tags: [Cart]
 *     summary: Delete cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       204:
 *         description: Cart deleted
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
router.delete("/cart/:id", cartController.deleteCart);

module.exports = router;
