const db = require("../models");
const Product = db.product;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    if(!req.body.title_product) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const product = {
        title_product: req.body.title_product,
        description_product: req.body.description_product,
        published_product: req.body.published_product ? req.body.published_product : false
    };

    Product.create(product)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while cerating the product."
        });
    });
};

exports.findAll = (req, res) => {
    const title_product = req.body.title_product;
    var condition = title_product ? {title_product: { [Op.like]: `%${title_product}%`} } : null;

    Product.findAll({ where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some err occurred while retriving product."
        });
    });

};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Product.findByPk(id)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send ({
            message: "Error retriving Tutorial with id=" + id
        });
    });
};

exports.update = (req,res) => {
    const id = req.params.id;

    Product.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if(num == 1) {
            res.send ({
                message:"product was update successfully!"
            });
        } else {
            res.send({
                message: `Cannot update product with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send ({
            message: "Error update Product with id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Product.destroy({
        where: {id: id}
    })
    .then(num => {
        if(num == 1) {
            res.send({
                message: "Product was delete successfully!"
            });
        } else {
            res.send ({
                message:`Cannot delete Product with id=${id} . Maybe Tutorial was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message:"Could not delete Product with id=" + id
        });
    });
};

exports.deleteAll = (req, res) => {
    Product.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} Product were delete successfully!`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some  error occurred while removing all Product"
        });
    });
};

exports.findAllPublished = (req, res) => {
    Product.findAll({ where: { published_product: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving product."
        });
      });
  };