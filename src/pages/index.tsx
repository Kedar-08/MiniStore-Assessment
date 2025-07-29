import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { fetchProducts } from "@/features/product/productSlice";
import ProductCard from "@/components/ProductCard";
import { Search, Grid, Column, Heading, Loading } from "@carbon/react";

export default function Home() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);
  const [query, setQuery] = useState(""),
    [debouncedQuery, setDebouncedQuery] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(t);
  }, [query]);

  const filteredItems = useMemo(
    () =>
      !debouncedQuery.trim()
        ? items
        : items.filter((item) =>
            item.title.toLowerCase().includes(debouncedQuery.toLowerCase())
          ),
    [debouncedQuery, items]
  );

  if (loading)
    return (
      <Loading
        active
        className="some-class"
        description="Loading..."
        withOverlay
      />
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Heading className="page-heading">MiniStore</Heading>
      <div className="search-bar">
        <Search
          closeButtonLabelText="Clear search input"
          id="search-products"
          labelText="Search Products"
          placeholder="Type product name..."
          role="searchbox"
          size="md"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Grid fullWidth className="product-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <Column key={item.id} lg={4} md={4} sm={2}>
              <ProductCard product={item} />
            </Column>
          ))
        ) : (
          <Column>
            <p className="no-products-message">
              No products match your search.
            </p>
          </Column>
        )}
      </Grid>
    </>
  );
}
