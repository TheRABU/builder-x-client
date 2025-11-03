import React from "react";
import { useDroppable } from "@dnd-kit/core";

import NavbarOne from "../library/NavbarOne";
import HeroSectionOne from "../library/HeroSectionOne";
import BannerSectionOne from "../library/BannerSectionOne";
import NavbarTwo from "../library/NavbarTwo";
import { useBuilder } from "../../hooks/useBuilder";

const componentMap: Record<string, React.FC> = {
  NavbarOne,
  NavbarTwo,
  HeroSectionOne,
  BannerSectionOne,
};

const PreviewPanel: React.FC = () => {
  const { selectedComponents, removeComponent } = useBuilder();
  const { setNodeRef, isOver } = useDroppable({ id: "preview-panel" });

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 bg-gray-50 p-6 overflow-auto transition-all ${
        isOver ? "ring-2 ring-blue-400" : ""
      }`}
    >
      <h2 className="text-lg font-semibold mb-4">Live Preview</h2>

      {selectedComponents.length === 0 ? (
        <p className="text-gray-500">
          Drag and drop components here from the sidebar.
        </p>
      ) : (
        selectedComponents.map((comp, i) => {
          const Component = componentMap[comp.name];
          return (
            <div
              key={i}
              className="relative border border-gray-200 rounded-lg mb-4 p-2 group"
            >
              <Component />

              <button
                onClick={() => removeComponent(i)}
                className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition"
              >
                Remove
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default PreviewPanel;
