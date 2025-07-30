import React, { useState, useEffect } from 'react';

interface ProductData {
  name: string;
}

const MyCustomComponent: React.FC<ProductData> = ({ name }) => {
  const [productName, setProductName] = useState(name);

  useEffect(() => {
    setProductName(name);
  }, [name]);

  return (
    <div>
      <h2>{productName}</h2>
    </div>
  );
};

export default MyCustomComponent;