import GameItem from "@/components/GameItem";
import creatorIMG from "../../../public/assets/projects/arcane/creatorpreview.png";
import invIMG from "../../../public/assets/projects/arcane/inventory.png";
import React from "react";

const page = () => {
  return (
    <div className="w-full pt-20">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-slate-800">
          Game Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <GameItem
            title="Arcane Acres - Character Creator"
            backgroundImg={creatorIMG}
            projectUrl="/character-creator"
            tech="GML"
          />
          <GameItem
            title="Arcane Acres - Inventory System"
            backgroundImg={invIMG}
            projectUrl="/inventory-system"
            tech="GML"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
