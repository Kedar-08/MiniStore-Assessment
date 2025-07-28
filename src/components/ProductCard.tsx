import React, { useState } from "react";
import { Tile, Tag, AspectRatio, Link as CarbonLink } from "@carbon/react";
import NextLink from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

type ProductCardProps = { product: Product };

function ProductCard({ product }: ProductCardProps) {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <NextLink href={`/products/${product.id}`} passHref legacyBehavior>
      <a style={{ textDecoration: "none", color: "inherit" }}>
        <Tile id={`tile-${product.id}`} className="product-tile">
          <AspectRatio ratio="16x9">
            <div className="product-image-wrapper">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
            </div>
          </AspectRatio>
          <h3 className="product-title">{product.title}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <Tag type="blue">{product.category}</Tag>
          <div className="product-actions">
            <CarbonLink
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setShowDescription((prev) => !prev);
              }}
            >
              {showDescription ? "Hide details" : "View details"}
            </CarbonLink>
            {showDescription && (
              <p className="product-description">{product.description}</p>
            )}
          </div>
        </Tile>
      </a>
    </NextLink>
  );
}

export default ProductCard;
