import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ConfigProvider, Spin } from "antd";
import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { customStyle, direction, themeColor } from "./configs/theme.tsx";
import "./index.scss";
import { routers } from "@/routers";
import { AnyElement } from "./types.ts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      retryDelay: 1000,
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      staleTime: 0,
      refetchIntervalInBackground: true,
      refetchOnReconnect: true,
      notifyOnChangeProps: "all",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        direction={direction}
        form={{
          colon: false,
          scrollToFirstError: true,
        }}
        theme={{
          ...customStyle,
          components: themeColor.components as AnyElement,
        }}
      >
        <Suspense fallback={<Spin spinning={true} />}>
          <RouterProvider router={routers} />
        </Suspense>

        {/* ✅ Toast container hiển thị toàn cục */}
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          draggable
          pauseOnHover
          theme="light"
        />

        <ReactQueryDevtools initialIsOpen={false} />
      </ConfigProvider>
    </QueryClientProvider>
  </StrictMode>
);
