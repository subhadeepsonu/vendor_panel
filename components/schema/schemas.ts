import z from "zod";

export const addProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.string().min(1, "Price must be at least 1"),
  salePrice: z.string().min(1, "Sale Price must be at least 1"),
  nonVeg: z.boolean(),
  category: z.enum(["BIRYANI", "CURRY", "BREADS", "CHINESE"],),
});
export const AddRestaurantSchema = z.object({
  name: z.string().min(1, "Name is required"),
  address:z.string().min(1,"address is required"),
})
