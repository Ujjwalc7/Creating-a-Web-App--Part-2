const express = require('express');
const router = express.Router();
const SalesModel = require('../models/sales_data');
const protected = require('../middleware/protectedResource');

router.post('/new_entry', protected, async(req, res) => {
    try {
        const data = new SalesModel(req.body);
        const resp = await data.save();
        res.status(200).json({message: "data stored successfully"});
    } catch (error) {
        res.status(500).json({message:"error saving data"});
    }
});

router.get('/api/top_5_sales', protected, async (req, res) => {
    try {
        let top_sales = [];
        let all_sales = await SalesModel.find();
        if(all_sales.length === 0){
            return res.status(404).json({message:"No sales found"});
        }
        for(let i = 0; i <= 4; i++) {
            let top = all_sales.reduce((acc, item) =>{
                return item.amount > acc.amount ? item : acc;
            })
            all_sales = all_sales.filter(item => item._id !== top._id);
            // console.log(all_sales);
            top_sales.push(top);
        }
        res.status(200).json({data: top_sales});
    } catch (error) {
        res.status(500).json({message:"Error while getting top 5 sales"});
    }
});

router.get('/api/total_revenue', protected, async (req, res) => {
    try {
        const all_sales = await SalesModel.find();
        if(all_sales.length === 0) {
            return res.status(404).json({message:"No sales found"});
        }
        console.log(all_sales);
        const total_revenue = all_sales.reduce((acc, item) =>{
            return acc + item.amount;
        },0);
        res.status(200).json({data:total_revenue});
    } catch (error) {
        res.status(500).json({message:"Error while getting total revenue"});
    }
});

module.exports = router;