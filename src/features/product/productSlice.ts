import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define a Product type (adjust fields as needed)
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetch",
  async () =>
    (await axios.get<Product[]>("https://fakestoreapi.com/products")).data
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [] as Product[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Error fetching products";
      });
  },
});

export default productSlice.reducer;
