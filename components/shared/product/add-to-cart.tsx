"use client";

import { Button } from "@/components/ui/button";
import { addItemToCart } from "@/lib/actions/cart.actions";
import { CartItem } from "@/types";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { toast } from "sonner"; // <-- Changed this import

const AddToCart = ({ item }: { item: CartItem }) => {
  const router = useRouter();

  const handelAddToCart = async () => {
    const res = await addItemToCart(item);

    if (!res.success) {
      toast.error(res.message);
      return;
    }

    toast.success(`${item.name} added to cart`, {
      // Changed to use toast.success (dot notation)
      action: {
        label: "Go to Cart",
        onClick: () => router.push("/cart"),
      },
    });

    // toast.success(`${item.name} added to cart`, {
    //   action: (
    //     <Button
    //       className="bg-primary text-white hover:bg-gray-800"
    //       onClick={() => router.push("/cart")}
    //     >
    //       Go to cart
    //     </Button>
    //   ),
    // });

    // Handel successful add to cart
    // toast.custom((t) => (
    //   <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex items-center space-x-4">
    //     <span className=" text-gray-700">{`${item.name} added to cart`}</span>
    //     <Button
    //       onClick={() => {
    //         router.push("/cart"); // Navigate to cart page
    //         // toast.dismiss(t.id); // Dismiss toast after clicking
    //       }}
    //       className="ml-auto bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
    //     >
    //       Go to Cart
    //     </Button>
    //   </div>
    // ));
  };

  // Add item to cart logic here

  return (
    <Button className="w-full" type="button" onClick={handelAddToCart}>
      <PlusIcon />
      Add To Cart
    </Button>
  );
};

export default AddToCart;
