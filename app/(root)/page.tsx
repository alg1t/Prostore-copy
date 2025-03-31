// import sampleData from "@/db/sample-data";
// import ProductList from "@/components/shared/product/product-list";
// import { getLatestProducts } from "@/lib/actions/product.actions";

// // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
// const Homepage = async () => {
//   const latestProducts = await getLatestProducts();
//   return (
//     <>
//
//       <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
//     </>
//   );
// };

import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  return (
    <div className="space-y-8">
      <ProductList title="Newest Arrivals" data={latestProducts} />
    </div>
  );
};

export default Homepage;
// export const runtime = "nodejs";
// export const dynamic = "force-dynamic";

// import ProductList from "@/components/shared/product/product-list";
// // import sampleData from "../../../db/sample-data";
// import { getLatestProducts } from "@/lib/actions/product.actions";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Home",
// };

// export default async function HomePage() {
//   const latestProductsRaw = await getLatestProducts();
//   const latestProducts = latestProductsRaw.map((prod) => ({
//     ...prod,
//     price: prod.price.toString(),
//     rating: prod.rating.toString(),
//   }));

//   return (
//     <>
//       <ProductList data={latestProducts} title="Newest Arrival" limit={4} />
//     </>
//   );
// }
