import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import AllRoutes from "./routes/AllRoutes.tsx";
import { BuilderProvider } from "./context/BuilderContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BuilderProvider>
      <AllRoutes />
    </BuilderProvider>
  </StrictMode>
);
