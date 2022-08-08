import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type productType = {
  id: number;
  title: string;
  price: number;
  description: string;
  categoryId: number;
  image: string;
};

export function Home() {
  const [products, setProducts] = useState<productType[]>([]);

  useEffect(() => {
    fetch(`http://localhost:4000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products-container main-wrapper">
      <ul className="products-container__list">
        {products.map((product) => (
          <li>
            <Link to={`/products/${product.id}`}>
              <article className="product-item">
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
