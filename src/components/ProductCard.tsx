import React, { useState } from "react";
import { Tile, Tag, AspectRatio, Link } from "@carbon/react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Tile id={`tile-${product.id}`} className="product-tile">
      <AspectRatio ratio="16x9">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </AspectRatio>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <Tag type="blue">{product.category}</Tag>
      <div className="product-actions">
        <Link
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setShowDescription((prev) => !prev);
          }}
        >
          {showDescription ? "Hide details" : "View details"}
        </Link>
        {showDescription && (
          <p className="product-description">{product.description}</p>
        )}
      </div>
    </Tile>
  );
};

export default ProductCard;
