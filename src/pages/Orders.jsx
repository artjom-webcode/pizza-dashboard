import Filter from "../orders/Filter";
import OrdersTable from "../orders/OrdersTable";

function Orders() {
  return (
    <div>
      <header className="border-b-4 flex justify-between items-center gap-2 mb-10 pb-5 flex-col sm:flex-row">
        <h2 className="text-3xl ">Orders</h2>
        <Filter />
      </header>
      <OrdersTable />
    </div>
  );
}

export default Orders;
