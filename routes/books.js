//--------------------------------
//  Create a new router
//--------------------------------

// const { name } = require("ejs");
const express = require("express")
const router = express.Router()

//--------------------------------
// Display the search page
//--------------------------------

router.get('/search',function(req, res, next){
    res.render("search.ejs")
});

//--------------------------------
// Display the search result
//--------------------------------

router.get('/search-result', function (req, res, next) {
    res.send("You searched for: " + req.query.keyword)
});

//--------------------------------
// show add book page
//--------------------------------
router.get('/addbook', (req, res) => {
    res.render("addbook.ejs");
});

//--------------------------------
// insert book submission 
//--------------------------------
  router.post('/bookadded', function(req, res, next) { 
    const sqlquery = "INSERT INTO books(name,price) VALUES (?,?)"; 
    const newrecord =[req.body.name,req.body.price];

    db.query(sqlquery, newrecord, (err, result) => {
        if (err) return next(err);
        res.send(`
            <h1>This book has been added to the database</h1>
            <p><strong>Name:</strong> ${req.body.name}</p>
            <p><strong>Price:</strong> £${Number(req.body.price).toFixed(2)}</p>
            <p><a href="/books/list">Back to book list</a></p>
        `);
    });
  });

//-------------------------------- 
//list display
//--------------------------------
router.get('/list',function(req,res,next){
    let sqlquery = "SELECT * FROM books";
    db.query(sqlquery,(err,result) => {
        if (err) next(err);
        res.render("list.ejs",{availableBooks:result});
    });
});

// Export the router object so index.js can access it
module.exports = router
