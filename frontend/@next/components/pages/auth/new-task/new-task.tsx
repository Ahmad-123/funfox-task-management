import { useState, useEffect } from "react";
import { useAxiosFetch } from "@hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppSelector } from "@hooks";
import { AppLayout } from "@layouts";
import { useRouter } from "next/router";
import { CustomButton, Heading, InputField } from "@atoms";
import { TaskFormValuesType } from "./task-form.types";
import { TaskSchema } from "./task-form.schema";
import { createNewTask } from "@ApiReq";
import { statusTypes } from "@types";

export const NewTask = (): JSX.Element => {
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  const { evalApiPromise, isLoading } = useAxiosFetch();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
  } = useForm<TaskFormValuesType>({
    defaultValues: { title: "", description: "" },
    resolver: yupResolver(TaskSchema),
    mode: "onChange",
  });
  const handleFormSubmit: SubmitHandler<TaskFormValuesType> = async (
    { title, description },
    event
  ) => {
    // call API here
    event?.preventDefault();
    const data = await evalApiPromise(
      createNewTask(title, description, userInfo?.group, userInfo?.id)
    );
    if (data?.responseCode === statusTypes.OK) {
      void router.push("/app/tasks");
    }
  };

  return (
    <div className="w-full relative min-h-full flex flex-col items-center justify-center">
      <div className="sm:w-[550px]  h-[400px] flex flex-wrap items-center bg-white p-4 sm:p-8 rounded-lg shadow-2xl">
        <Heading title="Create New Task" />
        <div className="w-full h-[85%] flex flex-col gap-4 pt-4">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(handleFormSubmit)}
          >
            <div className="w-full">
              <InputField
                fieldName="title"
                placeHolder="Enter Title"
                register={register}
                error={errors?.title?.message}
              />
            </div>
            <div className="w-full">
              <InputField
                fieldName="description"
                placeHolder="Enter Description"
                register={register}
                error={errors?.description?.message}
              />
            </div>

            <div className="mt-4">
              <CustomButton
                disabled={!isDirty || !isValid}
                loading={isLoading}
                text={"Add"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

NewTask.getLayout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
