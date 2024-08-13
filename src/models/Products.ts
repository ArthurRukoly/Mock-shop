import Product from "@/types/Product";
import image1 from "../assets/products/product1.png";
import image2 from "../assets/products/product2.png";
import image3 from "../assets/products/product3.png";
import { StaticImageData } from "next/image";

const IMAGES = [image1, image2, image3];

function getRandomIamge(): StaticImageData {
  return IMAGES[Math.floor(Math.random() * IMAGES.length)];
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    title: "Syltherine",
    category: "Stylish cafe chair",
    price: 2500,
    oldPrice: 3500,
    img: getRandomIamge(),
  },
  {
    id: "2",
    title: "Syltherine",
    category: "Stylish cafe chair",
    price: 2500,
    img: getRandomIamge(),
  },

  {
    id: "3",
    title: "Syltherine",
    category: "Stylish cafe chair",
    price: 2500,
    oldPrice: 3500,
    img: getRandomIamge(),
  },
  {
    id: "4",
    title: "Syltherine",
    category: "Stylish cafe chair",
    price: 2500,
    img: getRandomIamge(),
  },
  {
    id: "5",
    title: "Syltherine",
    category: "Stylish cafe chair",
    price: 2500,
    img: getRandomIamge(),
  },
  {
    id: "6",
    title: "Syltherine",
    category: "Stylish cafe chair",
    price: 2500,
    img: getRandomIamge(),
  },
  {
    id: "7",
    title: "Syltherine",
    category: "Stylish cafe chair",
    price: 2500,
    img: getRandomIamge(),
  },
  {
    id: "8",
    title: "Syltherine",
    category: "Stylish cafe chair",
    price: 2500,
    img: getRandomIamge(),
  },
  {
    id: "1",
    title: "Syltherine",
    category: "Stylish cafe chair",
    price: 2500,
    img: getRandomIamge(),
  },
  {
    id: "1",
    title: "Syltherine",
    category: "Stylish cafe chair",
    price: 2500,
    img: getRandomIamge(),
  },
];

export default PRODUCTS;
