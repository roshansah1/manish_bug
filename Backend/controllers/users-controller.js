const User = require("../model/User");

const getAllUsers = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }
    if(!users) {
        return res.status(404).json({message:"No users found"});
    }
    return res.status(200).json({ users });
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findById(id);
    } catch {
        console.log(err);
    }

    if(!user) {
        return res.status(404).json({message:"user not found"});
    }
    return res.status(200).json({ user });
}

const addUser = async (req, res, next) => {
    // req.body will come from client with all data
    const {username, email, password, image} = req.body;
    try {
        user = new User({
            username,
            email,
            password,
            image
        });
        await user.save();
    } catch(err) {
        console.log(err);
    }
    // validation
    if(!user) {
        return res.status(500).json({message:'Unable to add'});
    }
    return res.status(201).json({user});
}

const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const {username, email, password, image} = req.body;
    try {
        user = await User.findByIdAndUpdate(id, {
            username,
            email,
            password,
            image
        });
        user = await user.save();
    } catch(err) {
        console.log(err);
    }
    if(!user) {
        return res.status(400).json({message:'Unable To Update by this ID'})
    }
    return res.status(200).json({user})

}

const deleteUser = async (req, res, next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findByIdAndDelete(id);
    } catch(err) {
        console.log(err);
    }
    if(!user) {
        return res.status(400).json({message:'Unable To Delete by this ID'})
    }
    return res.status(200).json({message:'Product deleted successfully'})

}

exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;