import React from "react";
import { CustomButton } from "@atoms";
import { authActions } from "@store";
import { useAppDispatch, useAppSelector } from "@hooks";
import { useRouter } from "next/router";

export const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const userInfo = useAppSelector((state) => state.auth.userInfo);

  return (
    <div className="w-full h-[90px] flex text-white items-center justify-end bg-gray-800 px-2 sm:px-4">
      <div className="w-full flex gap-4 items-center justify-between">
        <p className="font-semibold">{userInfo?.name}</p>
        <p className="font-bold sm:text-xl text-center">Task Management</p>
        <CustomButton
          text="Log Out"
          onClick={() => {
            dispatch(authActions.logout());
            void router.push("/");
          }}
        />
      </div>
    </div>
  );
};
