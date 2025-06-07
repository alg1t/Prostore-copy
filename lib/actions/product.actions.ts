"use server";
import { PrismaClient } from "@prisma/client";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

export async function getLatestProducts() {
  const prisma = new PrismaClient();
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  // return convertToPlainObject(data);
  return data.map((product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString(),
  }));
}

// ("use server");
// // import { PrismaClient } from "@prisma/client";
// import { prisma } from "@/db/prisma";
// import { convertToPlainObject } from "../utils";
// import { LATEST_PRODUCTS_LIMIT } from "../constants";

// export async function getLatestProducts() {
//   // const prisma = new PrismaClient();
//   const data = await prisma.product.findMany({
//     take: LATEST_PRODUCTS_LIMIT,
//     orderBy: { createdAt: "desc" },
//   });
//   return convertToPlainObject(data);

//   return data.map((product) => ({
//     ...product,
//     price: product.price.toString(),
//     rating: product.rating.toString(),
//   }));

export async function getProductsBySlug(slug: string) {
  return await prisma.product.findFirst({ where: { slug: slug } });
}

// Get single product by it's ID
export async function getProductById(productId: string) {
  const data = await prisma.product.findFirst({
    where: { id: productId },
  });

  return convertToPlainObject(data);
}
