
const axios =require("axios")

  const getAllProducts =async (req, res) => {
    try {
      const response = await axios.get('https://dummyjson.com/products',{
        params: {
          category: 'electronics',
          limit: 5       
        }
      });
      const data = response.data.products;
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  const getSingleProducts =async (req, res) => {
    try {
        const {id} = req.params
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      const data = response.data;
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  const getCategoryProducts =async (req, res) => {
    try {
      const response = await axios.get(`https://dummyjson.com/products/categories`);
      const data = response.data;
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  const getCategoryOfAProducts =async (req, res) => {
    try {
        const category=req.params.id
      const response = await axios.get(`https://dummyjson.com/products/category/${category}`);
      const data = response.data;
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  module.exports ={
    getAllProducts,
    getSingleProducts,
    getCategoryProducts,
    getCategoryOfAProducts

  }