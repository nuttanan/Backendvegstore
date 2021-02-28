module.exports = (sequelize, Sequelize) => {
    const Tutorial = sequelize.define("tutorial", {
      title_tutorial: {
        type: Sequelize.STRING
      },
      description_tutorial: {
        type: Sequelize.STRING
      },
      published_tutorial: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Tutorial;
  };