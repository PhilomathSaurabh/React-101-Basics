import React from "react";

import Product from "./components/Product";

function AmazonApp() {
  return (
    <div>
      <h1>List of All the Products</h1>
      {/* We have used curly braces because we had entered number otherise we used single commas.  */}
      <Product name="P1" description="this is new product" price={59.99} />

      <Product
        name="P2"
        description="This is another produce 2"
        price={49.99}
      />

      <Product
        name="P3"
        description="This is another produce 3"
        price={99.99}
      />
    </div>
  );
}

export default AmazonApp;
