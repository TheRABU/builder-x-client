import { useContext } from "react";

import type { ComponentMeta } from "../types/builder";
import { BuilderContext } from "../context/BuilderContext";

interface BuilderContextType {
  selectedComponents: ComponentMeta[];
  addComponent: (component: ComponentMeta) => void;
  removeComponent: (index: number) => void;
}
export const useBuilder = (): BuilderContextType => {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error("useBuilder must be used within a BuilderProvider");
  }
  return context;
};
