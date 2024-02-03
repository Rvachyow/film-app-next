"use client";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import { NavBarItem } from "~/shared/constant/items";

export const DropDownApp = () => {
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
          <DropdownItem color="primary" key={item.id}>
            <Link style={{color:"white"}} color="secondary" href={`/lists/${item.url}`}>{item.text}</Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};
