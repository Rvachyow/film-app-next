"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { authInstance } from "../../shared/api/axiosClient";
import { useState } from "react";
import { useAppDispatch } from "~/shared/lib/hook/hooksRedux";
import { getMe } from "~/entities/Auth/actions";

export const Login = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActive, setIsActive] = useState(false);
  const route = useRouter();

  const handleLogin = async () => {
    try {
      if (!(password.length > 3 && email.length > 5)) return;
      await authInstance.post("/auth/login", {
        email,
        password,
      });
      dispatch(getMe());
      console.log("nice");
      return handleCloseModal();
    } catch (error) {
      setPassword("");
      alert(error);
    }
  };

  const handleOpenModal = () => {
    route.push("/?login");
    setIsActive(!isActive);
  };
  const handleCloseModal = () => {
    route.push("/");
    setIsActive(false);
  };

  return (
    <>
      <Button variant="shadow" onPress={handleOpenModal} color="secondary">
        Sign In
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isActive}
        onOpenChange={handleCloseModal}
        radius="lg"
        classNames={{
          body: "py-6",
          base: "border-[#292f46] bg-purple-950 dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 items-center">
                Login
              </ModalHeader>
              <ModalBody>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  color="secondary"
                  type="email"
                  label="Email"
                  value={email}
                />
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  color="secondary"
                  type="password"
                  label="Password"
                  value={password}
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button onClick={handleLogin} color="primary">
                  Login
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
