const express = require("express");
const router = express.Router();
const districtController = require("../controller/district.controller");

/**
 * @swagger
 * tags:
 *   name: District
 *   description: District management
 */

/**
 * @swagger
 * /api/district:
 *   post:
 *     tags: [District]
 *     summary: Create a new district
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: District created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/district", districtController.createDistrict);

/**
 * @swagger
 * /api/district:
 *   get:
 *     tags: [District]
 *     summary: Get all district
 *     responses:
 *       200:
 *         description: List of district
 *       500:
 *         description: Server error
 */
router.get("/district", districtController.getDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *   get:
 *     tags: [District]
 *     summary: Get district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     responses:
 *       200:
 *         description: District details
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.get("/District/:id", districtController.getDistrictById);

/**
 * @swagger
 * /api/district/{id}:
 *   put:
 *     tags: [District]
 *     summary: Update district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: District updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.put("/district/:id", districtController.updateDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *   delete:
 *     tags: [District]
 *     summary: Delete district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     responses:
 *       204:
 *         description: District deleted
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.delete("/district/:id", districtController.deleteDistrict);

module.exports = router;
