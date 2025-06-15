const Supplementmodel = require('../Models/Supplement'); // Import the model

const addnewsupplemet = async (req, res) => {
   try {
      const { name, price, image, category, discount } = req.body;
      const data = await Supplementmodel.create({
         name,
         price,
         image,
         category,
         discount
      });
      console.log(data);
      res.send("New product created successfully");
   } catch (error) {
      res.send(error.message);
   }
};

const getallproducts = async (req, res) => {
   try {
      const productsdata = await Supplementmodel.find();
      res.json({
         success: true,
         message: "Sucessfully fetched All products",
         data: productsdata
      })
   } catch (error) {
      res.json({
         success: false,
         message: error.message
      })

   }
}

const updateproduct = async (req, res) => {
   try {
      const id = req.params.id;
      const bodyy = req.body;
      const productsdata = await Supplementmodel.findByIdAndUpdate(id, bodyy);
      if (!productsdata) {
         return res.json({
            success: false,
            message: "Product not found"
         })
      }
      res.json({
         success: true,
         message: "Sucessfully iupdatwed This products",
         data: productsdata
      })

   } catch (error) {
      res.json({
         success: false,
         message: error.message
      })

   }
}






const getsingleproduct = async (req, res) => {
   try {
      const id = req.params.id;
      const productsdata = await Supplementmodel.findById(id);

      if (!productsdata) {
         return res.json({
            success: false,
            message: "Product not found"
         })
      }

      res.json({
         success: true,
         message: "Sucessfully fetched This products",
         data: productsdata
      })
   } catch (error) {
      res.json({
         success: false,
         message: error.message
      })

   }
}

const deleteproducts = async (req, res) => {
   try {
      const { id } = req.params;
      const productsdata = await Supplementmodel.findByIdAndDelete(id);
      res.json({
         success: true,
         message: "Sucessfully deleted This products",
         data: productsdata
      })
   }
   catch (error) {
      res.json({
         success: false,
         message: error.message
      })

   }
}



module.exports = { addnewsupplemet, getallproducts, updateproduct, getsingleproduct, deleteproducts }; // Export the function