const { getAxiosResponse, getAxiosErrorResponse } = require('../../utils/response');
const { getDataSet } = require('../../services/v1.0');

const getDataSet = async (req, res) => {
  try {
    const data = getData1234();
    const response = getAxiosResponse({ data });
    return res.status(response.status).json(response);
  } catch (error) {
    const response = getAxiosErrorResponse(error);
    return res.status(response.status).json(response);
  }
};

module.exports = { getDataSet };
