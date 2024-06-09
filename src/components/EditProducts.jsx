import React, { useContext, useRef, useState } from "react";
import Button2 from "./Button2";
import { datacontext } from "../datacontext/DataContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../store/reducers/productAction";

const EditProducts = () => {

  const {products} = useSelector(state => state.productSlice)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const params = useParams();

  const currentProduct = products.find((product) => product.id == params.id);

  const fileElem = useRef(null);
  const [image, setimage] = useState(currentProduct.image);
  const [preview, setPreview] = useState(currentProduct.image);
  const clickFileInp = () => {
    fileElem.current.click();
  };
  const showImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a URL for the selected file
      const previewUrl = URL.createObjectURL(file);
      // Update state
      setimage(`/images/${file.name}`);
      setPreview(previewUrl);
    }
  };

  const [productName, setproductName] = useState(currentProduct.productName);
  const [productPrice, setproductPrice] = useState(currentProduct.productPrice);
  const [productDescription, setproductDescription] = useState(
    currentProduct.productDescription
  );

  const submitHandler = (e) => {
    e.preventDefault();

    if (image && productName && productDescription && productPrice) {
      const obj = {
        id: currentProduct.id,
        image,
        productName,
        productPrice,
        productDescription,
      };
      dispatch(editProduct(obj, params.id));
      toast.success("Product Edited Successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      navigate("/myProducts");
    } else {
      toast.error("All Inputs Are Required!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="addProduct my-5 flex justify-center items-center">
      <form onSubmit={submitHandler} className="flex gap-[3vw] h-fit w-fit">
        <div className="addProductLeft w-[26vw]">
          <div className="previewImg h-[26vw] w-full bg-zinc-800/[.5] flex justify-center items-center rounded-lg my-2">
            <img src={preview} className="h-full w-full object-cover" alt="" />
          </div>
          <input onChange={showImage} ref={fileElem} hidden type="file" />
          <div onClick={clickFileInp} className="showPreviewImage">
            <Button2 type2="button" text="select Image" type="fill" />
          </div>
        </div>

        <div className="addProductRight px-2 flex flex-col justify-center">
          <div>
            <span className="capitalize">Product Name</span> <br />
            <input
              name="name"
              onChange={(e) => setproductName(e.target.value)}
              value={productName}
              type="text"
              className=" my-1 bg-transparent w-[30vw] border border-zinc-700 rounded-md px-2 py-1"
            />
          </div>
          <div>
            <span className="capitalize">Price ($)</span> <br />
            <input
              onChange={(e) => setproductPrice(e.target.value)}
              value={productPrice}
              name="price"
              type="number"
              className=" my-1 bg-transparent w-[30vw] border border-zinc-700 rounded-md px-2 py-1"
            />
          </div>
          <div>
            <span className="capitalize">Description</span> <br />
            <textarea
              onChange={(e) => setproductDescription(e.target.value)}
              value={productDescription}
              name="description"
              className="my-1 bg-transparent w-[30vw] border border-zinc-700 rounded-md px-2 py-1"
              rows="5"
            ></textarea>
          </div>
          <Button2 text="Save product" />
        </div>
      </form>
    </div>
  );
};

export default EditProducts;
