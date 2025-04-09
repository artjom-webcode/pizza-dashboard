import { useForm } from "react-hook-form";
import { editPizzaApi } from "./apiMenu";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { IoCloseCircleOutline } from "react-icons/io5";

function ChangePizza({ pizzaToChange, closeForm }) {
  const { created_at, id, imageUrl, ingredients, name, soldOut, unitPrice } = pizzaToChange;

  const { register, handleSubmit, formState } = useForm({ defaultValues: pizzaToChange });
  const { errors } = formState;
  const queryClient = useQueryClient();
  const { mutate: editPizza, isLoading: isEditing } = useMutation({
    mutationFn: ({ newPizzaData, id }) => editPizzaApi(newPizzaData, id),
    onSuccess: () => {
      toast.success("Pizza successfully edited");
      queryClient.invalidateQueries({ queryKey: ["menu"] });
      closeForm(false);
    },
    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    editPizza({ newPizzaData: data, id: id });
  }
  function onError(errors) {
    console.log(errors);
  }

  return (
    <div className="fixed top-0 left-0 bottom-0 backdrop-blur-sm bg-gray-800 bg-opacity-90  min-w-[100%]  p-5 pt-12 z-50">
      <form
        className=" relative w-[420px] m-auto p-7 rounded-lg bg-gray-200"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="flex flex-col justify-between mb-4">
          <label className="text-gray-500 text-sm" htmlFor="name">
            Pizza name
          </label>
          <input
            className="border p-2 mt-1 rounded focus:outline-gray-400"
            id="name"
            type="text"
            {...register("name")}
          />
          {errors?.pizza_name?.message && <span>{errors.pizza_name.message}</span>}
        </div>

        <div className="flex flex-col justify-between mb-4">
          <label className="text-gray-500 text-sm" htmlFor="unitPrice">
            Pizza price
          </label>
          <input
            className="border p-2 mt-1 rounded focus:outline-gray-400"
            {...register("unitPrice")}
            id="unitPrice"
            type="text"
          />
          {errors?.pizza_price?.message && <span>{errors.pizza_price.message}</span>}
        </div>

        <div className="flex flex-col justify-between mb-4">
          <label className="text-gray-500 text-sm" htmlFor="ingredients">
            Pizza ingredients
          </label>
          <textarea
            className="border p-2  rounded focus:outline-gray-400 h-32"
            id="ingredients"
            defaultValue=""
            {...register("ingredients")}
          />
          {errors?.pizza_ingr?.message && <span>{errors.pizza_ingr.message}</span>}
        </div>
        <div className="flex gap-3">
          <label htmlFor="soldOut">Sold Out</label>
          <input
            className="w-4 border-gray-700"
            id="soldOut"
            type="checkbox"
            {...register("soldOut")}
          />
        </div>

        <div className="flex justify-end mt-6">
          <button className="bg-orange-500 hover:bg-orange-600 px-4 py-1 rounded  text-gray-100">
            Edit pizza
          </button>
        </div>
        <button className="absolute right-3 top-3 " onClick={() => closeForm(false)}>
          <IoCloseCircleOutline className="w-7 h-7 text-orange-500 hover:text-orange-600" />
        </button>
      </form>
    </div>
  );
}

export default ChangePizza;
