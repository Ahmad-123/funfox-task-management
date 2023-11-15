import { DropDown } from "@molecules";
import { Task, TaskTypes } from "@types";
import React from "react";
import { CustomButton } from "../custom-button";

interface TaskProps {
  task: Task;
  changeStatus: (taskId: string, status: string) => void;
  deleteTask: (taskId: string) => void;
}

export const TaskTab = ({ task, changeStatus, deleteTask }: TaskProps) => {
  return (
    <div className="w-full min-h-[120px] sm:min-h-[100px] px-2 sm:px-4 flex flex-wrap sm:flex-nowrap items-center rounded-lg bg-gray-100">
      <div className="sm:w-[34%]">
        <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis font-bold">
          {task.title}
        </p>
        <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis">
          {task.description}
        </p>
      </div>
      <div className="flex gap-3">
        <DropDown
          taskId={task.id}
          selectedValue={task.status}
          options={[
            { title: TaskTypes.PENDING, value: "PENDING" },
            { title: TaskTypes.COMPLETED, value: "COMPLETED" },
          ]}
          changeStatus={changeStatus}
        />
        <CustomButton text={"Delete"} onClick={() => deleteTask(task.id)} />
      </div>
    </div>
  );
};
