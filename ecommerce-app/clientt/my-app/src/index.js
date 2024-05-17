import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Değişiklik
import "./index.css";
import "./reset.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// contexts
import { AuthProvider } from "./contexts/AuthContext";
import { BasketProvider } from "./contexts/BasketContext";

import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <ChakraProvider>
                <AuthProvider>
                    <BasketProvider>
                        <Routes> {/* Değişiklik */}
                            <Route path="/" element={<App />} /> {/* Değişiklik */}
                        </Routes> {/* Değişiklik */}
                    </BasketProvider>
                </AuthProvider>
            </ChakraProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>,
    document.getElementById("root")
);

reportWebVitals();
