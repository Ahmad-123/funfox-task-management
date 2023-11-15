import { TaskTypes } from "@types";
import React from "react";

export const DropDown = ({
  taskId,
  selectedValue,
  options,
  changeStatus,
}: {
  taskId: string;
  selectedValue: string;
  options: Array<{ title: string; value: string }>;
  changeStatus: (taskId: string, status: string) => void;
}) => {
  return (
    <select
      value={selectedValue}
      className="h-[2.875rem] px-2 rounded-md"
      onChange={(e) => {
        changeStatus(taskId, e.target.value);
      }}
    >
      {options?.map((option) => (
        <option value={option.value}>{option.title} </option>
      ))}
    </select>
  );
};
