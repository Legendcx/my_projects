import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import useFetchData from "../hooks/useFetchData";
import { ProductType } from "../types";
// import register from "./register";



const addProduct = () => {
  const {addProduct, loading} = useFetchData();
  const router = useRouter();

  const {register, handleSubmit, formState: {errors}, } = useForm<ProductType>();

  const onSubmit: SubmitHandler<ProductType> = async data => { await addProduct(data); router.push("/dashboard");
    };


  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center gap-4 h-screen">
      <input
        className="registerInput"
        type="text"
        placeholder="*Name"
        {...register("name", { required: true })}
      />
      <input className="registerInput" type="text" placeholder="*Brand" 
      {...register("brand", { required: true })} />
      <input className="registerInput" type="number" placeholder="Amount" {...register("Amount")} />
      <input className="registerInput" type="number" placeholder="Vote" {...register("Vote")} />
      <input className="registerInput" type="number" placeholder="Rating" {...register("Rating")} />

      <button type="submit" className="submitButton px-5 py-2.5">
        Add
      </button>
    </form>
  );
};

export default addProduct;
