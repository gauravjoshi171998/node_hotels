const express = require('express');
const router = express.Router()
const Person = require('../models/person');

// create person data
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const response = await newPerson.save();
        console.log('Data save successfully', response);
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error')
    }
})

// fetch person data
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('Data fetched successfully', data);
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error')
    }
})

// fetch person perticular data
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType == "Chef" || workType == "Waiter" || workType == "Manager") {
            const data = await Person.find({ work: workType });
            console.log('Data fetched successfully', data);
            res.status(200).json(data)
        } else {
            res.status(404).json({ error: 'Invalid work type' })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error')
    }
})

// Update person data
router.put('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const updatePersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true,
            runValidators: true
        })
        if (!response) {
            return response.status(404).json({ error: 'Person not found' })
        }
        console.log('Data updated successfully', response);
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error')
    }
})

// Delete person data
router.delete('/:id', async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId)
        if (!response) {
            return response.status(404).json({ error: 'Person not found' })
        }
        console.log('Data deleted successfully');
        res.status(200).json({ message: 'Person deleted successfully' })
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error')
    }
})

module.exports = router;