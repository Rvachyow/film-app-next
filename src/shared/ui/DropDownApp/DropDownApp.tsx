"use client";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { NavBarItem } from "~/shared/constant/items";

export const DropDownApp = () => {
  const route = useRouter();
  const handleRoute = (id: string) => {
    route.push(`/lists/${id}`);
  };
  return (
    <Dropdown
      classNames={{
        base: "before:bg-default-200",
        content: "p-0 bg-background",
      }}
      backdrop="blur"
    >
      <DropdownTrigger style={{ cursor: "pointer", color: "#9353D3" }}>
        <p>LISTS</p>
      </DropdownTrigger>
      <DropdownMenu aria-label="Navigation">
        {NavBarItem.map((item) => (
          <DropdownItem
            onClick={() => handleRoute(item.url)}
            color="primary"
            key={item.id}
          >
            {item.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
