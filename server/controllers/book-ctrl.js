const bookModel = require("../models/book-model");


async function createNewBook(req,res){
    let newBook = req.body;
    await bookModel.insertMany(newBook, (err)=>{
        if(err){
            res.status(400).json({ success: false, error: err })
        }
        res.status(201).json({ success:true, message: newBook})
    })
}
async function getAllBooks(req,res){
    await bookModel.find((err,results)=>{
        if(err) throw err;
        console.log("result:", JSON.stringify(results));
        res.status(200).json({success: true, data: results});
    });
} 
async function getBookById(req,res){
await bookModel.findById(req.params.id,(err, results)=>{
    if(err) throw err;
    res.status(200).json({success:true, data:results});
    console.log("result:", JSON.stringify(results));
})
}
async function getBookByName(req,res){
    let bookName = req.params.name;
    await bookModel.find({ name: { $regex: bookName, $options: "i" } }, (err,results)=>{
        if(err) throw err;
        if(!results.length){
        return res.status(404).json({success: false, error: 'book not found'})
        }
        res.status(200).json({ success: true, data: results })
        console.log("result:", JSON.stringify(results));
    })
}
async function deleteBookById(req,res){
let bookDeleteById = req.params.id
await bookModel.findByIdAndRemove(bookDeleteById, (err, result)=>{

if(err){
    res.status(400).json({success:false, error:err})
};
res.status(200).json({success:true, data:bookDeleteById,  message: "the book has deleted!"})
}) 
}
async function updateBookById(req,res){
    let bookToUpdate = req.params.id;
    await bookModel.findByIdAndUpdate(bookToUpdate, req.body, (err,resualt)=>{
        if(err){
            res.status(400).json({ success:false, error:err})
        };
        res.status(300).json({ success:true, data:resualt, message: "book has updated"})
    })
}
 
    module.exports = {
    createNewBook,
    getAllBooks,
    getBookById,
    getBookByName,
    deleteBookById,
    updateBookById
}

// async function getBookByName(req,res){
    
//     let bookName = req.params.name;
//     await bookModel.find({name:{$regex:bookName, $options: "i"}},(err,results)=>{
//         if(err){
//         return res.status(400).json({success: false, error: err})
//         } 
//         if(!results){
//             return res.status(404).json({success: false, error: 'book not found'})
//         }
//         return res.status(200).json({success: true, data: results})    
//     });
// }






// function createBook(req,res){
//       const body = req.body;
//       if(!body){
//           return res.status(400)
//           .json({success:false,message:"no body found"})
//       }  
//       //לשאול את יעקב האם התנאי בשורה 12 הוא לבוק ריק או בוק שלא התקבל על ידי המודל
//       const book = new bookModel(body);
//       if(!book){
//         return res.status(400)
//         .json({success:false,message:"no book found"}) 
//       }
//       book.save( )
//       .then(()=>{
//           return res.status(200)
//           .json({success:true,message:"book saved"}) 
//       })
//       .catch(error=>{
//         return res.status(401)
//         .json({success:false,message:"book was not saved",error:error})
//       })  
// }