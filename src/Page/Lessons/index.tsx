import React, { useCallback } from "react";
import Card from "@/Components/Cards/Card";
import History from "@/Utils/Lib/History";
interface Props {}

const Lessons: React.FC<Props> = (props) => {
  return (
    <div className="container mt-5">
      <div className="grid grid-cols-5 gap-y-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
          (item, index) => (
            <Card key={index} item={item} />
          )
        )}
      </div>
    </div>
  );
};

export default Lessons;
