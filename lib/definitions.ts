import { name } from "@material-tailwind/react/types/components/select";

export type ProductType = {
  id: number;
  name: string;
  price: number;
  desc: string;
  image: string;
};

export type CartProductType = {
  name: string;
  image: string;
  price: number;
  id: number;
  onClick?: () => void;
};

export type ProductDetailType = {
  id: number;
  name: string;
  price: number;
  category: string;
  desc: string;
  image: string;
  seller : string;
  quantity : string;
  created_at : string;
};


export type LoginRequest = {
	email: string;
	password: string;
};