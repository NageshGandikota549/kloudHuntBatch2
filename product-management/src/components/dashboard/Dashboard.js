import "./Dashboard.css";
export const Dashboard = () => {
  const products = [
    { image: "aston_martindb12.jpeg", model: "DB12", price: 100000 },
    {
      image: "1965-shelby-cobra-superformance.jpeg",
      model: "Cobra",
      price: 900000,
    },
    {
      image: "1965-shelby-cobra-superformance.jpeg",
      model: "ZX",
      price: 80000,
    },
    {
      image: "1965-shelby-cobra-superformance.jpeg",
      model: "TVE",
      price: 0,
    },
    {
      image: "1965-shelby-cobra-superformance.jpeg",
      model: "TVE",
      price: 0,
    },
    {
      image: "1965-shelby-cobra-superformance.jpeg",
      model: "TVE",
      price: 0,
    },
  ];

  return (
    <div>
      <div className="product-container">
        {products.map((x) => (
          <div className="product">
            <img height="50px" width="50px" src={x.image} alt="" />
            <p>Model: {x.model}</p>
            <p>Price: {x.price > 0 ? "$ " + x.price : "Not available"} </p>
          </div>
        ))}
      </div>
    </div>
  );
};
