import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactFCWithChildren } from "types";

const queryClient = new QueryClient();

const QueryClientAppProvider: ReactFCWithChildren = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryClientAppProvider;
