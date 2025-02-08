import React from "react";

const Blocks = () => {
  return (
    <div className="flex p-2 text-center">
      <div className="border border-black p-2 flex-1 w-24">BLOCK-1</div>
      <div className="border border-black p-2 flex-1 w-24 bg-[#6EC0E2]">
        BLOCK-2
      </div>
      <div className="border border-black p-2 flex-1 w-24">BLOCK-3</div>
      <div className="border border-black p-2 flex-1 w-24">BLOCK-4</div>
      <div className="border border-black p-2 flex-1 w-24">BLOCK-5</div>
      <div className="border border-black p-2 flex-1 w-24">BLOCK-6</div>
    </div>
  );
};

export default Blocks;
