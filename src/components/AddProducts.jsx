import React, { useRef, useState } from "react";
import Button2 from "./Button2";

const AddProducts = () => {

  const {products} = useContext(second)

  const fileElem = useRef(null);
  const [image, setimage] = useState(null);
  const [preview, setPreview] = useState(null);
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

  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productDescription, setproductDescription] = useState("");
  
  const submitHandler = (e) => {
    e.preventDefault();
    
    const obj = {
      image,
      productName,
      productPrice,
      productDescription
    }


    
  };

  return (


    <div className="addProduct my-5 flex justify-center items-center">
      <form onSubmit={submitHandler} className="flex gap-[3vw] h-fit w-fit">
        <div className="addProductLeft w-[26vw]">
          <div className="previewImg h-[26vw] w-full bg-zinc-800/[.5] flex justify-center items-center rounded-lg my-2">
            {preview ? (
              <img
                src={preview}
                className="h-full w-full object-cover"
                alt=""
              />
            ) : (
              <span className="text-sm font-medium">No Preview</span>
            )}
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
            onChange={(e)=> setproductName(e.target.value)}
            value={productName}
              type="text"
              className=" my-1 bg-transparent w-[30vw] border border-zinc-700 rounded-md px-2 py-1"
            />
          </div>
          <div>
            <span className="capitalize">Price ($)</span> <br />
            <input
            onChange={(e)=> setproductPrice(e.target.value)}
            value={productPrice}
            name="price"
              type="number"
              className=" my-1 bg-transparent w-[30vw] border border-zinc-700 rounded-md px-2 py-1"
            />
          </div>
          <div>
            <span className="capitalize">Description</span> <br />
            <textarea onChange={(e)=> setproductDescription(e.target.value)}
            value={productDescription}
             name="description" className="my-1 bg-transparent w-[30vw] border border-zinc-700 rounded-md px-2 py-1" rows='5'></textarea>
          </div>
          <Button2 text='Add product'  />
          
          
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
