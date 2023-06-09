import GameItem from "@/components/GameItem";
import React from "react";

const page = () => {
  return (
    <div className="w-full pt-20">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-slate-800">
          Game Systems, Technical Design
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <GameItem
            title="Arcane Acres - Inventory System"
            backgroundImg="/assets/projects/arcane/inventory.png"
            projectUrl="/inventory-system"
            tech="GML"
          />
          <GameItem
            title="Arcane Acres - Character Creator"
            backgroundImg="/assets/projects/arcane/creatorpreview.png"
            projectUrl="/character-creator"
            tech="GML"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
