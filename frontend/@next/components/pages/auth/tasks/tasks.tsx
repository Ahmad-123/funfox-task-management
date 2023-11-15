import { useState, useEffect } from "react";
import { useAxiosFetch } from "@hooks";
import { changeTaskStatus, deleteTaskEndpoint, getUserTasks } from "@ApiReq";
import { Task, statusTypes } from "@types";
import { CustomButton, Heading, TaskTab } from "@atoms";
import { useAppSelector } from "@hooks";
import { Loader } from "@molecules";
import { AppLayout } from "@layouts";
import { useRouter } from "next/router";

export const Tasks = (): JSX.Element => {
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  const router = useRouter();

  const [tasks, setTasks] = useState<Array<Task>>([]);
  const [refresh, setRefresh] = useState(true);
  const { evalApiPromise, isLoading } = useAxiosFetch(true);

  const changeStatus = async (taskId: string, status: string) => {
    const data = await evalApiPromise(changeTaskStatus(taskId, status));
    setRefresh(!refresh);
  };
  const deleteTask = async (taskId: string) => {
    const data = await evalApiPromise(deleteTaskEndpoint(taskId));
    setRefresh(!refresh);
  };

  useEffect(() => {
    const fetchTask = async () => {
      const data = await evalApiPromise(getUserTasks(userInfo?.group));
      if (data?.responseCode === statusTypes.OK) {
        setTasks(data?.data);
      }
    };
    fetchTask();
  }, [refresh]);
  return (
    <div className="w-full relative min-h-full flex flex-col items-center justify-center">
      {isLoading && <Loader />}
      {/* Add new Task */}
      <div className="sm:w-[550px] flex flex-col mb-4 items-end">
        <CustomButton
          text={"Create New Task"}
          onClick={() => router.push("/app/new-task")}
        />
      </div>

      <div className="sm:w-[550px] h-[550px] flex flex-wrap items-center bg-white p-2 sm:p-8 rounded-lg shadow-2xl">
        <Heading title="Tasks" />

        {/* list tasks */}
        {tasks?.length ? (
          <div className="w-full h-[85%] flex flex-col gap-4 pt-4">
            <p className="w-full text-center font-bold">
              Group: {userInfo?.group}
            </p>
            <div className="w-full flex flex-col gap-4 overflow-y-auto">
              {tasks?.map((task) => {
                return (
                  <TaskTab
                    task={task}
                    changeStatus={changeStatus}
                    deleteTask={deleteTask}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div className="w-full h-full items-center justify-center flex text-xl opacity-50">
            No Tasks Available
          </div>
        )}
      </div>
    </div>
  );
};

Tasks.getLayout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
