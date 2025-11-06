const express = require('express');
const router = express.Router()
const MenuItem = require('../models/menuItem')

// create menuItem data
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data)
        const response = await newMenuItem.save()
        console.log('Data save successfully', response);
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error')
    }
})
// fetch menuItem data
router.get('/', async (req, res) => {

    try {
        const data = await MenuItem.find();
        console.log('Data fetched successfully', data);
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error')
    }
})

// fetch menuItem perticular data
router.get('/:taste', async (req, res) => {
    try {
        const tasteType = req.params.taste;
        if (tasteType == "sweet" || tasteType == "spicy" || tasteType == "sour") {
            const data = await MenuItem.find({ taste: tasteType });
            console.log('Data fetched successfully', data);
            res.status(200).json(data)
        } else {
            res.status(404).json({ error: 'Invalid taste type' })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error')
    }
})

// Update menuItem data
router.put('/:id', async (req, res) => {
    try {
        const menuItemId = req.params.id;
        const updateMenuItemData = req.body;
        const response = await MenuItem.findByIdAndUpdate(menuItemId, updateMenuItemData, {
            new: true,
            runValidators: true
        })
        if (!response) {
            return response.status(404).json({ error: 'MenuItem not found' })
        }
        console.log('Data Updated', response)
        res.status(200).json(response)

    } catch (error) {
        console.log(error);
        res.status(500).json('Internal server error')
    }
})

// Delete menuItem data
router.delete('/:id', async (req, res) => {
    try {
        const menuItemId = req.params.id;
        const response = await MenuItem.findByIdAndDelete(menuItemId);
        if (!response) {
            return response.status(404).json({ error: 'MenuItem not found' })
        }
        console.log('Data deleted successfully')
        res.status(200).json({message: 'MenuItem deleted successfully'})
    } catch (error) {

    }
})

module.exports = router;
