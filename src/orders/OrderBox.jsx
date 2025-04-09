import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formatCurrency, formatDate } from "../helpers";
import { changeReadyTimeApi, changeStatusApi } from "./apiOrders";
import toast from "react-hot-toast";
import OrderBoxItem from "./OrderBoxItem";

function OrderBox({ order }) {
  const { id, created_at, cart, customer, estimatedDelivery, orderPrice, status, phone, comment } =
    order;

  const queryClient = useQueryClient();

  const { mutate: changeStatus, isLoading: isChangingStatus } = useMutation({
    mutationFn: (id) => changeStatusApi(id),
    onSuccess: function () {
      toast.success("Status is changed!");
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });

  const { mutate: changeTimeReady, isLoading: isChangingTime } = useMutation({
    mutationFn: changeReadyTimeApi,
    onSuccess: function () {
      toast.success("Order time was changed!");
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });
    },
  });

  function handleTimeReady(id, time) {
    changeTimeReady({ id: id, estimatedDelivery: time });
  }

  return (
    <li
      className={`max-w-[1160px] rounded border-2 my-4 py-5 px-2 ${
        status ? "border-green-400" : "border-orange-400"
      }`}
    >
      <div className="flex flex-wrap">
        <OrderBoxItem text="Order number" data={"#" + id} />
        <OrderBoxItem text="Date & Time" data={formatDate(created_at)} />
        <OrderBoxItem text="Customer" data={customer} />
        <OrderBoxItem text="Contact" data={"+" + phone} />
        <OrderBoxItem text="Order price" data={formatCurrency(orderPrice)} />

        <div className="mx-5 my-2 sm:basis-16 flex sm:block justify-between  basis-full">
          <span className="text-sm text-gray-400">Status</span>
          {status ? (
            <div className="bg-green-500 text-xs text-gray-100 w-fit rounded-md px-2 py-1">
              completed
            </div>
          ) : (
            <div className="bg-orange-500 text-xs text-gray-100 w-fit rounded-md px-2 py-1">
              pending
            </div>
          )}
        </div>
      </div>

      {/* down */}
      <div className="border-t mx-5">
        <span className="text-sm text-gray-400">Ordered items</span>
        <ul className="flex flex-wrap">
          {cart.map((item) => (
            <li
              key={item.name}
              className={`px-2 text-sm m-2 text-gray-900 py-1 rounded-lg ${
                status ? "bg-green-400" : "bg-orange-400"
              }`}
            >
              {item.name} X {item.quantity}
            </li>
          ))}
        </ul>
        <div className="my-2 sm:basis-28 flex flex-wrap sm:block justify-between  basis-full">
          <span className="text-sm text-gray-400">Comment from customer</span>
          <p className="text-red-700">{comment}</p>
        </div>
        <div className="flex flex-col sm:flex-row border-t mx-1 justify-end gap-4 items-center pt-5">
          {!status && (
            <>
              <span className="font-light">Order will be ready in: </span>
              <select
                disabled={status}
                onChange={(e) => handleTimeReady(id, e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block  p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name=""
                id=""
              >
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="35">35</option>
                <option value="40">40</option>
              </select>

              <button
                disabled={status}
                onClick={() => changeStatus(id)}
                className="border px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-800 transition "
              >
                Order is ready
              </button>
            </>
          )}
        </div>
      </div>
    </li>
  );
}

export default OrderBox;
