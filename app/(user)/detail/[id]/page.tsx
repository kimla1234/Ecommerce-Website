

import React from "react";
import { Metadata, ResolvingMetadata } from "next";
import { ProductDetailType } from "@/lib/definitions";
import { BASE_URL } from "@/lib/constants";
import DetailProductComponent from "@/component/card/DetailProductConponent";



async function getDetail(params: string) {
  const response = await fetch(`${BASE_URL}/api/products/${params}`);
  const data = await response.json();
  return data;
}

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product: ProductDetailType = await fetch(
    `${BASE_URL}/api/products/${id}`
  ).then((res) => res.json());

  return {
    title: product.name,
    description: product.desc,
    openGraph: {
      images: product.image,
    },
  };
}

async function Page({ params }: Props) {
  const product: ProductDetailType = await getDetail(params.id);
  return (
    <div className="p-10">
      <DetailProductComponent {...product} />
    </div>
  );
}

export default Page;
