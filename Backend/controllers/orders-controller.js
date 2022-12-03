const Order = require("../model/Order");

const getAllOrders = async (req, res, next) => {
    let orders;
    try {
        orders = await Order.find();
    } catch (err) {
        console.log(err);
    }
    if(!orders) {
        return res.status(404).json({message:"No orders found"});
    }
    return res.status(200).json({ orders });
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let order;
    try {
        order = await Order.findById(id);
    } catch {
        console.log(err);
    }

    if(!order) {
        return res.status(404).json({message:"No order found"});
    }
    return res.status(200).json({ order });
}

const addOrder = async (req, res, next) => {
    // req.body will come from client with all data
    const {bookname, contact, address} = req.body;
    try {
        order = new Order({
            bookname,
            contact,
            address
        });
        await order.save();
    } catch(err) {
        console.log(err);
    }
    // validation
    if(!order) {
        return res.status(500).json({message:'Unable to add'})
    }
    return res.status(201).json({order})
}



const deleteOrder = async (req, res, next) => {
    const id = req.params.id;
    let order;
    try {
        order = await Order.findByIdAndDelete(id);
    } catch(err) {
        console.log(err);
    }
    if(!order) {
        return res.status(400).json({message:'Unable To delete order'})
    }
    return res.status(200).json({message:'order deleted successfully'})

}

exports.getAllOrders = getAllOrders;
exports.addOrder = addOrder;
exports.getById = getById;
exports.deleteOrder = deleteOrder;