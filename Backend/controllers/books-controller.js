const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.log(err);
    }
    if(!books) {
        return res.status(404).json({message:"No books found"});
    }
    return res.status(200).json({ books });
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch {
        console.log(err);
    }

    if(!book) {
        return res.status(404).json({message:"No book found"});
    }
    return res.status(200).json({ book });
}

const addBook = async (req, res, next) => {
    // req.body will come from client with all data
    const {name, author, description, price, available, image} = req.body;
    try {
        book = new Book({
            name,
            author,
            description,
            price, 
            available,
            image
        });
        await book.save();
    } catch(err) {
        console.log(err);
    }
    // validation
    if(!book) {
        return res.status(500).json({message:'Unable to add'})
    }
    return res.status(201).json({book})
}

const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const {name, author, description, price, available, image} = req.body;
    try {
        book = await Book.findByIdAndUpdate(id, {
            name,
            author,
            description,
            price,
            available,
            image
        });
        book = await book.save();
    } catch(err) {
        console.log(err);
    }
    if(!book) {
        return res.status(400).json({message:'Unable To Update by this ID'})
    }
    return res.status(200).json({book})

}

const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findByIdAndDelete(id);
    } catch(err) {
        console.log(err);
    }
    if(!book) {
        return res.status(400).json({message:'Unable To Delete by this ID'})
    }
    return res.status(200).json({message:'Product deleted successfully'})

}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;