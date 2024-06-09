import { toast } from "react-toastify";

export { load } from "../slice/productSlice";
import { load } from "../slice/productSlice";


export const deleteProduct = (id) => (dispatch, getState) => {
  const { products } = getState().productSlice;
  const filtered = products.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(filtered));
  dispatch(load());
  toast.success("Product Deleted Successfully!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
};


export const addProduct = (obj) => (dispatch, getState) => {
  const { products } = getState().productSlice;
  localStorage.setItem('products', JSON.stringify([...products,obj]));
};


export const editProduct = (obj,id) => (dispatch, getState) => {
  const { products } = getState().productSlice;
  localStorage.setItem(
    "products",
    JSON.stringify(
      products.map((product) =>
        product.id === id ? obj : product
      )
    )
  );
};
