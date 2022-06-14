const getCatalogue = (request, response) => {
    const catalogServices = require('../services/productServices');
    catalogServices.searchService(function(err, rows) {
    response.render('catalogue', { products: rows });
    });
};

const getProductByID = (request, response) => {
    const catalogServices = require('../services/productServices');
    let reference = request.params.reference;
    catalogServices.searchIDService(reference, function(err, rows) {
        response.render('catalogue', { products: rows });
    });
};

const getProductsByCategory = (request, response) => {
    const catalogServices = require('../services/productServices');
    let reference = request.params.category;
    catalogServices.searchCategoryService(category, function(err, rows) {
        response.render('catalogue', { products: rows });
    });
};

module.exports = {
    getCatalogue,
    getProductByID,
    getProductsByCategory
};