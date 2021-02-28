const { authJwt } = require("../middleware");
const product = require("../controllers/product.controller.js");

module.exports = app => {
    
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", product.create);
  
    // Retrieve all Tutorials
    router.get("/", product.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", product.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", product.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", product.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", product.delete);
  
    // Delete all Tutorials
    router.delete("/",product.deleteAll);
  
    app.use('/api/product', router);
  };