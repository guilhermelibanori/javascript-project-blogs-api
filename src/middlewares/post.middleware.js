const { categoriesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const validField = (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(mapStatusHTTP('BAD_REQUEST')).json({ 
      message: 'Some required fields are missing' });
  }
  next();
};

const validCategory = async (req, res, next) => {
  const { categoryIds } = req.body;
  const promises = categoryIds.map((element) => categoriesService.getCategoryById(element));
  const results = await Promise.all(promises);
  const invalidProducts = results
    .filter(({ status }) => status === 'NOT_FOUND')
    .map((element) => element);

  if (invalidProducts.length) {
    return res.status(400).json({
      message: 'one or more "categoryIds" not found',
    });
  }
  
  next();
};

module.exports = {
  validField,
  validCategory,
};