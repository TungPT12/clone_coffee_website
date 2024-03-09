import { createSlice } from "@reduxjs/toolkit";

const cartInit = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : {
      products: [],
      totalPrice: 0,
    };

const cartSlice = createSlice({
  name: "Cart",
  initialState: cartInit,
  reducers: {
    addProductToCart(state, payload) {
      const { productId, name, price_new, images, quantity, size } =
        payload.payload;
      const position = state.products.findIndex((product: any) => {
        return product.productId === productId && product.size === size;
      });
      if (position > -1) {
        state.products[position].quantity =
          state.products[position].quantity + quantity;
      } else {
        state.products.push({
          productId: productId,
          name: name,
          price_new: price_new,
          quantity: quantity,
          image: images[0],
          size: size,
        });
      }
      state.totalPrice = state.totalPrice + price_new * quantity;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    updateCart(state, payload) {
      const { productId, name, price_new, images, quantity, size } =
        payload.payload;
      const position = state.products.findIndex((product: any) => {
        return product.productId === productId && product.size === size;
      });
      const currentProduct = state.products[position];
      state.totalPrice =
        state.totalPrice - currentProduct.price_new * currentProduct.quantity;
      if (position > -1) {
        state.products[position].quantity = quantity;
      }
      state.totalPrice = state.totalPrice + currentProduct.price_new * quantity;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    decreaseProduct(state, payload) {
      console.log(state.products);
      const { productId, quantity, size } = payload.payload;
      const position = state.products.findIndex((product: any) => {
        return product.productId === productId && product.size === size;
      });
      const currentProduct = state.products[position];
      if (position > -1) {
        state.products[position].quantity =
          state.products[position].quantity - quantity;
      }
      state.totalPrice = state.totalPrice - currentProduct.price_new * quantity;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    deleteProductsInCart(state, payload) {
      const { productId, name, price_new, quantity, size } = payload.payload;
      state.products = state.products.filter((product: any) => {
        return !(product.productId === productId && product.size === size);
      });
      state.totalPrice = state.totalPrice - quantity * price_new;
      localStorage.setItem("cart", JSON.stringify(state));
    },

    resetCart(state) {
      state = {
        products: [],
        totalProce: 0,
      };
    },
  },
});

const cartReducer = cartSlice.reducer;
const cartActions = cartSlice.actions;

export { cartActions };

export default cartReducer;
