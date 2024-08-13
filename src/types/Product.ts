import { StaticImageData } from "next/image";

export default interface Product {
  id: string;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  img: StaticImageData;
}
