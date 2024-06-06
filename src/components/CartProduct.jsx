import React from 'react'

const CartProduct = ({productImage,productName,productDescription,productPrice}) => {

  

  return (
    <div className="cartProduct flex w-full justify-between items-center border-b border-zinc-800 py-3 px-5">
            <div className="cartProductLeft flex items-center gap-4">
              <i className="ri-close-large-fill text-2xl"></i>
              <div className="flex items-center gap-2">
                <div className="h-full w-fit bg-zinc-800 rounded-md overflow-hidden">
                  <img
                    className="h-[5vw] w-[5vw] object-contain"
                    src={productImage}
                    alt=""
                  />
                </div>
                <div className='w-[15vw] leading-none'>
                  <h1 className="text-xl font-bold">{productName}</h1>
                  <h3 className="text-xs font-light">{productDescription.split(" ").slice(0,8).join(" ")}</h3>
                </div>
              </div>
            </div>
            <div className="cartProductRight flex items-center gap-10">
              <div className="quantity flex gap-4 items-center">
                <div className="w-[2vw] h-[2vw] bg-zinc-800 rounded-full flex items-center justify-center">
                  <i className="ri-subtract-line"></i>
                </div>
                <div>1</div>
                <div className="w-[2vw] h-[2vw] bg-zinc-800 rounded-full flex items-center justify-center">
                  <i className="ri-add-line"></i>
                </div>
              </div>
              <div className="price">
                <span className="font-semibold">$ {productPrice}</span>
              </div>
            </div>
          </div>
  )
}

export default CartProduct