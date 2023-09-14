import FormSubmitButton from "@/components/FormSubmitButton";
import {prisma} from "@/lib/db/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata = {
    title:"Add Product - Ecommerce"
}
async function addProduct(formData: FormData){
    "use server";
    const session = await getServerSession(authOptions);  

    if(!session){
        redirect("/api/auth/signin?callbackUrl=/add-product");
    }

    const name  = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageURL = formData.get("imageURL")?.toString();
    const price = Number(formData.get("price")|| 0);
    // throw Error("bazings")

    if(!name || !description || !imageURL || !price){
        throw Error("Misssing required fields");
    }
    

    await prisma.product.create({
        data:{name, description,imageURL, price}
    })
    redirect('/');
}
export default async function AddProductPage(){
    const session = await getServerSession(authOptions);
    if(!session){
        redirect("/api/auth/signin?callbackUrl=/add-product");
    }
    return(
        <div>
            <h1 className="text-lg mb-3 font-bold">Add Product</h1>
            <form action={addProduct}>
                <input 
                type="text" 
                required
                name="name"
                placeholder="Name"
                className="input-bordered mb-3 w-full p-2 " />
                <textarea 
                name="description" 
                required 
                placeholder="Description"
                className="textarea-bordered textarea mb-5 w-full"
                ></textarea>
                <input 
                type="url" 
                required
                name="imageURL"
                placeholder="Image URL"
                className="input-bordered mb-3 w-full p-2 " />
                <input 
                type="number" 
                required
                name="price"
                placeholder="Price"
                className="input-bordered mb-3 w-full p-2 " />
                <FormSubmitButton className=" btn-block" type="submit">Add Product</FormSubmitButton>
            </form>
        </div>
    )
}