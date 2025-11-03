import React, { createContext, useState, type ReactNode } from "react";
import type { ComponentMeta } from "../types/builder";

interface BuilderContextType {
  selectedComponents: ComponentMeta[];
  addComponent: (component: ComponentMeta) => void;
  removeComponent: (index: number) => void;
}

export const BuilderContext = createContext<BuilderContextType | undefined>(
  undefined
);

export const BuilderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedComponents, setSelectedComponents] = useState<ComponentMeta[]>(
    []
  );

  const addComponent = (component: ComponentMeta) => {
    // Prevent adding same category twice
    setSelectedComponents((prev) => {
      if (prev.some((c) => c.category === component.category)) {
        alert(`A ${component.label} is already added.`);
        return prev;
      }
      return [...prev, component];
    });
    console.log("selected components::", selectedComponents);
  };

  const removeComponent = (index: number) => {
    setSelectedComponents((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <BuilderContext.Provider
      value={{ selectedComponents, addComponent, removeComponent }}
    >
      {children}
    </BuilderContext.Provider>
  );
};
