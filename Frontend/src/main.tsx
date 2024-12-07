import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.scss";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./Store/Store.ts";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ClerkProvider>
        </Provider>
    </StrictMode>
);
