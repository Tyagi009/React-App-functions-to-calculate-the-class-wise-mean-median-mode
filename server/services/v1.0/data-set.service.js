const { db: data } = require('../../db');

const getDataSet = () => {
  try {
    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { getDataSet };
