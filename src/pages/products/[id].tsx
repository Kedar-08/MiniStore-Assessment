import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Tile, Tag, AspectRatio, Heading, Loading } from "@carbon/react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Product not found");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setError(null);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading active description="Loading..." withOverlay />;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  if (!product) return null;

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 24 }}>
      <Heading>{product.title}</Heading>
      <Tile>
        <AspectRatio ratio="16x9">
          <img
            src={product.image}
            alt={product.title}
            style={{ objectFit: "contain", width: "100%" }}
          />
        </AspectRatio>
        <p>
          <strong>Price:</strong> ${product.price.toFixed(2)}
        </p>
        <Tag type="blue">{product.category}</Tag>
        <p style={{ marginTop: 16 }}>{product.description}</p>
      </Tile>
    </div>
  );
}
