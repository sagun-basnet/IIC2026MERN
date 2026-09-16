import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const [value, setValue] = useState([]);
  const token = localStorage.getItem("appToken");
  //   const data = fetch("https://jsonplaceholder.typicode.com/posts");
  //   data.json();

  const fetchData = async () => {
    try {
      const data = await axios.get("https://fakestoreapi.com/products", {
        headers: {
          Authorization: token,
        },
      });
      console.log(data.data);
      setValue(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`https://fakestoreapi.com/products/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <div className="flex gap-80">
        <input
          placeholder="Search For Products...."
          type="search"
          name=""
          id=""
        />
        <Link to={"/add-product"}>
          <button className="bg-green-500">Add Product</button>
        </Link>
      </div>
      <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table class="w-full text-sm text-left rtl:text-right text-body">
          <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
            <tr>
              <th scope="col" class="px-6 py-3 font-medium">
                Image
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Product name
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Description
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Category
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Price
              </th>
              <th scope="col" class="px-6 py-3 font-medium">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {value?.map((item, index) => {
              return (
                <>
                  <tr class="bg-neutral-primary border-b border-default">
                    <td class="px-6 py-4">
                      <img src={item.image} alt="" />
                    </td>
                    <th class="px-6 py-4">{item.title}</th>
                    <td class="px-6 py-4">{item.description}</td>
                    <td class="px-6 py-4">{item.category}</td>
                    <td class="px-6 py-4">Rs. {item.price}</td>
                    <td class="px-6 py-4 flex justify-center items-center gap-4">
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-500"
                      >
                        Delete
                      </button>
                      <Link to={`/edit-product/${item.id}`}>
                        <button className="bg-blue-500">Edit</button>
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
