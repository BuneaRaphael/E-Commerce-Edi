import React from "react";
import { useState, useEffect } from "react";
import "./newsletter.scss";
const Newsletter = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch("http://localhost:8800/api/collections");
        if (response.ok) {
          const data = await response.json();
          setCollections(data); // Store fetched collections in state
        } else {
          throw new Error("Failed to fetch collections");
        }
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);
  return (
    <div className="newsletter">
      <h3>Newsletter</h3>
      <div className="collection-scroll">
        {collections &&
          collections.map((collection) => (
            <a key={collection._id} href={`/collections/${collection._id}`}>
              {collection.name}
            </a>
          ))}
      </div>
    </div>
  );
};

export default Newsletter;
