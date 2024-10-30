const express = require("express");
const router = express.Router();
const event_typeController = require("../controller/event_type.controller");

/**
 * @swagger
 * tags:
 *   name: Event_type
 *   description: Event_type management
 */

/**
 * @swagger
 * /api/event_type:
 *   post:
 *     tags: [Event_type]
 *     summary: Create a new event_type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Event_type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/event_type", event_typeController.createEvent_type);

/**
 * @swagger
 * /api/event_type:
 *   get:
 *     tags: [Event_type]
 *     summary: Get all event_type
 *     responses:
 *       200:
 *         description: List of event_type
 *       500:
 *         description: Server error
 */
router.get("/event_type", event_typeController.getEvent_type);

/**
 * @swagger
 * /api/event_type/{id}:
 *   get:
 *     tags: [Event_type]
 *     summary: Get event_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event_type ID
 *     responses:
 *       200:
 *         description: Event_type details
 *       404:
 *         description: Event_type not found
 *       500:
 *         description: Server error
 */
router.get("/event_type/:id", event_typeController.getEvent_typeById);

/**
 * @swagger
 * /api/event_type/{id}:
 *   put:
 *     tags: [Event_type]
 *     summary: Update event_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event_type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               parent_event_type_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Event_type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Event_type not found
 *       500:
 *         description: Server error
 */
router.put("/event_type/:id", event_typeController.updateEvent_type);

/**
 * @swagger
 * /api/event_type/{id}:
 *   delete:
 *     tags: [Event_type]
 *     summary: Delete event_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event_type ID
 *     responses:
 *       204:
 *         description: Event_type deleted
 *       404:
 *         description: Event_type not found
 *       500:
 *         description: Server error
 */
router.delete("/event_type/:id", event_typeController.deleteEvent_type);

module.exports = router;
