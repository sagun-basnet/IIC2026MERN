import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const navigate = useNavigate()
  //   const init = {
  //     title: "",
  //     price: "",
  //     description: "",
  //     category: "",
  //     image: "",
  //   };
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("https://fakestoreapi.com/products", formData)
      .then((res) => {
        console.log(res);
        navigate('/products');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="h-screen grid place-items-center">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-4 shadow-2xl rounded-lg w-[30rem] p-8"
      >
        <h1 className="font-bold text-4xl">Add Product</h1>
        <input
          value={formData.title}
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Enter Your Title"
        />
        <input
          value={formData.price}
          onChange={handleChange}
          name="price"
          type="number"
          placeholder="Enter Your Price"
        />
        <textarea
          value={formData.description}
          onChange={handleChange}
          name="description"
          placeholder="Enter Your Discription"
        />
        <input
          value={formData.category}
          onChange={handleChange}
          name="category"
          type="text"
          placeholder="Enter Your category"
        />
        <input
          value={formData.image}
          onChange={handleChange}
          name="image"
          type="text"
          placeholder="Enter Your Image"
        />

        <button type="submit" className="bg-blue-500 text-white font-bold">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
