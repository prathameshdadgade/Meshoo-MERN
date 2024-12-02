const ProductList = require('../Moduls/Product'); 

exports.getSearchResults = (req, res) => {
    const { search } = req.query; // Get the search query from the request
    const lowerSearch = search ? search.toLowerCase() : ''; // If no search, show all products

    // If a search term exists, filter products
    const filteredProducts = lowerSearch
      ? ProductList.filter(
          (item) =>
            item.name.toLowerCase().includes(lowerSearch) ||
            item.desc.toLowerCase().includes(lowerSearch) ||
            item.price.toLowerCase().includes(lowerSearch)
        )
      : ProductList; // If no search term, return all products

    if (filteredProducts.length > 0) {
        res.status(200).json({ list: filteredProducts });
    } else {
        res.status(404).json({ message: "No products found matching your search." });
    }
};
