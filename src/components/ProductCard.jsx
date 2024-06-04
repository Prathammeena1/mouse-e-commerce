import React from 'react'
import Button2 from "./Button2";


const ProductCard = ({imageUrl,productName,productPrice,productDescription}) => {
  return (
    <div className="product w-[15vw] text-center bg-zinc-800/[.5] px-[2vw] py-[1vw] rounded-md">
          <div className="productImage h-[13vw] text-center">
            <img className="h-full object-cover text-center mx-auto" src={imageUrl} alt="" />
          </div>
          <div className="productDetails mt-[1vw] text-center">
            <div className="productName text-xl font-bold">{productName}</div>
            <div className="productPrice font-medium">{productPrice}</div>
            <div className="productDescription text-[.7vw] leading-none font-thin mb-[.7vw]">{productDescription}</div>
            <Button2 text='ADD TO CART' type='fill' />
          </div>
        </div>
  )
}

export default ProductCard