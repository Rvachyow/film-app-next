"use client";
import { useAppDispatch, useAppSelector } from "~/shared/lib/hook/hooksRedux";
import { LogoutBtn } from "~/shared/ui/LogoutBtn/LogoutBtn";
import { Login } from "../Login/Login";
import { Registration } from "../Registration/Registration";
import { useEffect } from "react";
import { getMe } from "~/entities/Auth/actions";

export const Auth = () => {
  const isAuthorized = useAppSelector((state) => state.auth.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  return (
    <>
      {isAuthorized === "authorized" ? (
        <LogoutBtn />
      ) : (
        <div className="flex gap-2">
          <Login />
          <Registration />
        </div>
      )}
    </>
  );
};
