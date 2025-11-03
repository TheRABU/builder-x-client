import React from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import BuilderSidebar from "../../components/builder/BuilderSidebar";
import PreviewPanel from "../../components/builder/PreviewPanel";

import { components } from "../../constants";
import { useBuilder } from "../../hooks/useBuilder";

const BuilderPage: React.FC = () => {
  const { addComponent } = useBuilder();
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { over, active } = event;
    if (over?.id === "preview-panel") {
      const comp = components.find((c) => c.name === active.id);
      if (comp) {
        addComponent(comp);
      }
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <div className="flex min-h-screen">
        <BuilderSidebar />
        <PreviewPanel />
      </div>
    </DndContext>
  );
};

export default BuilderPage;
