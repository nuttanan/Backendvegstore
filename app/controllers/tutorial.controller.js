const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.create = (req,res) => {
    if(!req.body.title_tutorial) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    const tutorial = {
        title_tutorial: req.body.title_tutorial,
        description_tutorial: req.body.description_tutorial,
        published_tutorial: req.body.published_tutorial ? req.body.published_tutorial : false
    };

    Tutorial.create(tutorial)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while cerating the tutorial."
        });
    });
};

exports.findAll = (req, res) => {
    const title_tutorial = req.body.title_tutorial;
    var condition = title_tutorial ? {title_tutorial: { [Op.like]: `%${title_tutorial}%`} } : null;

    Tutorial.findAll({ where: condition})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some err occurred while retriving tutorials."
        });
    });

};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Tutorial.findByPk(id)
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

    Tutorial.update(req.body, {
        where: {id: id}
    })
    .then(num => {
        if(num == 1) {
            res.send ({
                message:"Tutorial was update successfully!"
            });
        } else {
            res.send({
                message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send ({
            message: "Error update Tutorial with id=" + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Tutorial.destroy({
        where: {id: id}
    })
    .then(num => {
        if(num == 1) {
            res.send({
                message: "Tutorial was delete successfully!"
            });
        } else {
            res.send ({
                message:`Cannot delete Tutorial with id=${id} . Maybe Tutorial was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message:"Could not delete Tutorial with id=" + id
        });
    });
};

exports.deleteAll = (req, res) => {
    Tutorial.destroy({
        where: {},
        truncate: false
    })
    .then(nums => {
        res.send({
            message: `${nums} Tutorial were delete successfully!`
        });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some  error occurred while removing all tutorials"
        });
    });
};

exports.findAllPublished = (req, res) => {
    Tutorial.findAll({ where: { published_tutorial: true } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };