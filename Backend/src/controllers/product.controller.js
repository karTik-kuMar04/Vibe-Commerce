
const products = [
  { id: 1, name: "Wireless Mouse", price: 799, image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcThzy1xHgbqfEg2pXQPf40-zWL2C2h7ElKm18mEU62M6psU6AgIz8oFAWo2cbGfX_V3gLswWEkv9LRW36Ve8BIucMPUnrMdWPqaoQGbCfh0iZMpzE5SNOQm_g" },
  { id: 2, name: "Mechanical Keyboard", price: 2499, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmZFd2mhw1dRDhrngeV9MCj1dRRbGd4h_AmMxUNo8Fc74vy1NxbhQUbd-qlXPCWWqv4CriajSmaWZKFs1U5s6ZPaW1WPIpjQWmKmF_xahBKzHkQpiV4tQozw" },
  { id: 3, name: "Gaming Headset", price: 1999, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ3Sp4TBEItwe4l9GNaAdjwSGsTTYCsiLTtPmkpenHRbKa1NNkAFc_orSXCa4X7vR5CKB0v43kO4MQwwb_qazw0f-npbBz63sBJGKiO3b7Vfb-ieq1Mbgyk" },
  { id: 4, name: "USB-C Hub", price: 1299, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSfR2zKebKoD0sKM3XWyRtr7NkwLfH_ByBzfM5nb5zrudnvASzQKQKYNaFrMcqpGSYty3VtgU30E4Dcr16A3O3qEUlzR2eZ4Jz82Yy5rQgFNclXNhi4Jln10w" },
  { id: 5, name: "Webcam", price: 999, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTQkRil7YO2kRLIGo9wceXcZ6HR0DyrVoe0CBkHFwSitVTq76uF8Khvoz-ERtv_5OpLu8_I_C0EEiVVVyhC2XLfhr07mqHjrOZVxKRSjYmk" },
  { id: 6, name: "Laptop Stand", price: 699, image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQsTu5skYOHa8cxokfLk-vFE1GV65IW-iprvWlSWPuJzp-DAL4idohF6C2nQbGEpB4jbEWq4P3KwsHDxG-hw_0MbTz5stCvFnP3LT-ASMBDgCesf4BjFTB4" },
  { id: 7, name: "Monitor 24\"", price: 8999, image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTgdOflC-_7gTrbvQv940dnn0sqSD81lbaRMWVzZrTXAJocjaJHlpSKD6XBvQVMRaBoO40-hg3TFmT8MDSgpOD2ngIpa1ML9qUfDP2d1bTXZ9rTPVE00Jr8Nw" },
  { id: 8, name: "Bluetooth Speaker", price: 1499, image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSYa2YSWBL1iS_XLHgljosQSfR8kjr5CbtABcgZcFxNvmS6jM9Gvl_sDoVw1kHlrE8Mz3xOFbS4Vu5xbuOIW7c5VBeh7_yg_eGk9o8KLTkl" },
];

export const getProducts = (req, res) => {
  res.json(products);
};

export default products;
