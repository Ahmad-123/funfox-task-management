import { requestUrl } from "@hooks";
import { AxiosResponse } from "axios";

export const getUserTasks = async (
  group?: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.get(`tasks/${group}`);
};

export const createNewTask = async (
  title: string,
  description: string,
  group?: string,
  createdBy?: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.post("tasks", {
    title,
    description,
    group,
    status: "PENDING",
    createdBy,
  });
};

export const changeTaskStatus = async (
  taskId: string,
  status: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.put(`tasks/${taskId}`, {
    status,
  });
};

export const deleteTaskEndpoint = async (
  taskId: string
): Promise<AxiosResponse<unknown, any>> => {
  return await requestUrl.delete(`tasks/${taskId}`);
};
