import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./collections.scss";
import { fetchCollectionById } from "../../api";

const CollectionsPage = () => {
  const { id } = useParams(); // Get the collection ID from the URL
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCollectionById(id);
        setCollection(response);
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!collection) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }

  return (
    <div className="collection-detail">
      <h2>{collection.name}</h2>
      <img src={`/images/${collection.image}`} alt={collection.name} />
      <p>{collection.description}</p>
      <div className="products">
        <h3>Products</h3>
        {collection.products.map((product) => (
          <Link
            to={`/product/${product._id}`}
            key={product._id}
            className="product-item"
          >
            <div key={product._id} className="product-item">
              <h4>{product.name}</h4>
              <img src={`/images/${product.image[0]}`} alt={product.name} />
              <p>{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default CollectionsPage;
