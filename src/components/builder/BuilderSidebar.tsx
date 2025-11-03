import React from "react";
import { useDraggable } from "@dnd-kit/core";

import { components } from "../../constants";
import { useBuilder } from "../../hooks/useBuilder";

interface DraggableComponentProps {
  id: string;
  label: string;
  disabled: boolean;
}

const DraggableComponent: React.FC<DraggableComponentProps> = ({
  id,
  label,
  disabled,
}) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
      disabled,
    });

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    opacity: isDragging ? 0.6 : 1,
    cursor: disabled ? "not-allowed" : "grab",
  };

  return (
    <button
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      disabled={disabled}
      className={`block w-full border rounded-lg px-4 py-2 mb-2 transition-all ${
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-white hover:bg-gray-200"
      }`}
    >
      {label}
    </button>
  );
};

const BuilderSidebar: React.FC = () => {
  const { selectedComponents } = useBuilder();

  const isCategoryUsed = (category: string) =>
    selectedComponents.some((comp) => comp.category === category);

  return (
    <div className="w-1/4 bg-gray-100 p-4 border-r border-gray-300">
      <h2 className="text-lg font-semibold mb-4">Component Library</h2>
      {components.map((comp) => (
        <DraggableComponent
          key={comp.name}
          id={comp.name}
          label={comp.label}
          disabled={isCategoryUsed(comp.category)}
        />
      ))}
    </div>
  );
};

export default BuilderSidebar;
