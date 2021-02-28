

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
        title_product: {
            type: Sequelize.STRING
        },
        description_product: {
            type: Sequelize.STRING
        },
        published_product: {
            type: Sequelize.BOOLEAN
        }
    });
    return Product;
}