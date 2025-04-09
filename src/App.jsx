import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="menu" />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="menu" element={<Menu />} />
              <Route path="orders" element={<Orders />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "50px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              zIndex: "10000",
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#e2e8f0",
              color: "#1e293b",
            },
          }}
        />
      </QueryClientProvider>
    </>
  );
}

export default App;
