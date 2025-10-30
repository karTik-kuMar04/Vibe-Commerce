
const products = [
  { id: 1, name: "Wireless Mouse", price: 799 },
  { id: 2, name: "Mechanical Keyboard", price: 2499 },
  { id: 3, name: "Gaming Headset", price: 1999 },
  { id: 4, name: "USB-C Hub", price: 1299 },
  { id: 5, name: "Webcam", price: 999 },
  { id: 6, name: "Laptop Stand", price: 699 },
  { id: 7, name: "Monitor 24\"", price: 8999 },
  { id: 8, name: "Bluetooth Speaker", price: 1499 },
];

export const getProducts = (req, res) => {
  res.json(products);
};

export default products;
