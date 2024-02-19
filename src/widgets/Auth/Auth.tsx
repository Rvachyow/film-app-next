import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Auth = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isActive, setIsActive] = useState(false);
  const route = useRouter();

  const handleOpenModal = () => {
    route.push("/?auth");
    setIsActive(!isActive);
  };
  const handleCloseModal = () => {
    route.push("/");
    setIsActive(false);
  };

  return (
    <>
      <Button variant="shadow" onPress={handleOpenModal} color="secondary">
        Sign Up
      </Button>
      <Modal
        backdrop="blur"
        isOpen={isActive}
        onOpenChange={handleCloseModal}
        radius="lg"
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader
                style={{ alignItems: "center" }}
                className="flex flex-col gap-1"
              >
                Modal Title
              </ModalHeader>
              <ModalBody></ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  className="bg-[#6f4ef2] shadow-lg shadow-indigo-500/20"
                  onPress={onClose}
                >
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
