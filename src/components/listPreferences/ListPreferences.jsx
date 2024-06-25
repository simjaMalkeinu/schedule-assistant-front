import { useEffect, useState } from "react";
import FilterItem from "../filterItem/filterItem";

export default function ListPreferences(props) {
  const { list } = props;

  let keys = Object.keys(list);
  keys = keys.filter((t) => t !== "list_courses");

  useState(() => {
    keys = Object.keys(list);
    keys = keys.filter((t) => t !== "list_courses");
  }, [list]);

  return (
    <div className="flex gap-4 mt-2 mb-2">
      {keys.map((k) => {
        const value = list[k];
        if (value !== null) {
          if (typeof value === "object") {
            return (
              <FilterItem
                key={k}
                text={k + " " + value.start + "-" + value.end}
              />
            );
          } else {
            return <FilterItem key={k} text={k + " " + value} />;
          }
        }
      })}
    </div>
  );
}
