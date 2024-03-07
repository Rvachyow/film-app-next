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
import { useState } from "react";
import { authInstance } from "../../shared/api/axiosClient";

export const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const route = useRouter();

  const handleRegistration = async () => {
    try {
      if (!(password.length > 5 && email.length > 5 && fullName.length > 5))
        return;
      await authInstance.post("/auth/register", {
        email,
        password,
        fullName,
      });
      return handleCloseModal();
    } catch (error) {
      alert(error);
    }
  };

  const handleOpenModal = () => {
    route.push("/?registration");
    setIsActive(!isActive);
  };
  const handleCloseModal = () => {
    route.push("/");
    setIsActive(false);
  };

  return (
    <>
      <Button variant="shadow" onPress={handleOpenModal} color="primary">
        Sign Up
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
                Registration
              </ModalHeader>
              <ModalBody>
                <Input
                  onChange={(e) => setFullName(e.target.value)}
                  color="secondary"
                  type="fullName"
                  label="FullName"
                />
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  color="secondary"
                  type="email"
                  label="Email"
                />
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  color="secondary"
                  type="password"
                  label="Password"
                />
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={handleRegistration}>
                  Registration
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
