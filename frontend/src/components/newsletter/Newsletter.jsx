import React, { useState, useEffect } from "react";
import "./newsletter.scss";

const Newsletter = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const response = await fetch("http://localhost:8800/api/collections");
        if (response.ok) {
          const data = await response.json();
          setCollections(data);
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
      <div className="collection-scroll">
        {collections.map((collection) => (
          <a key={collection._id} href={`/collections/${collection._id}`}>
            <span>&#x25A0;</span> {collection.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Newsletter;
