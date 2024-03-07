"use client";
import { Button } from "@nextui-org/react";
import { useAppDispatch } from "~/shared/lib/hook/hooksRedux";
import { logout } from "~/entities/Auth/actions";

export const LogoutBtn = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    return dispatch(logout());
  };
  return (
    <Button onClick={handleLogout} variant="shadow" color="danger">
      Logout
    </Button>
  );
};
