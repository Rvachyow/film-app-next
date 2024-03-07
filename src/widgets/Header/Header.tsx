"use server";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import { SearchTitleHeader } from "../SearchTitleHeader/SearchTitleHeader";
import { AcmeLogo } from "~/shared/ui/AcmeLogo/AcmeLogo";
import { NavbarItemApp } from "~/shared/ui/NavbarItemApp/NavbarItemApp";
import { DropDownApp } from "~/shared/ui/DropDownApp/DropDownApp";
import { Auth } from "../Auth/Auth";

export const Header = () => {
  return (
    <Navbar className="bg-purple-950" shouldHideOnScroll maxWidth="xl">
      <NavbarBrand>
        <AcmeLogo />
        <Link href="/" className="font-bold text-inherit">
          FILM-APP
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="end">
        <DropDownApp />
        <NavbarItemApp text={"random film"} />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <SearchTitleHeader />
        </NavbarItem>
        <NavbarItem>
          <div></div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
