import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Input,
} from "@nextui-org/react";
import { AcmeLogo } from "~/shared/ui/AcmeLogo/AcmeLogo";
import { SearchIcon } from "~/shared/ui/icons/SearchIcon/SearchIcon";
import { NavbarItemApp } from "~/shared/ui/NavbarItemApp/NavbarItemApp";
import { DropDownApp } from "~/shared/ui/DropDownApp/DropDownApp";

export const Header = () => {
  return (
    <Navbar
      style={{ backgroundColor: "#180828" }}
      shouldHideOnScroll
      maxWidth="xl"
    >
      <NavbarBrand>
        <AcmeLogo />
        <Link href="/" className="font-bold text-inherit">
          FILM-APP
        </Link>
      </NavbarBrand>
      <NavbarContent className="sm:flex gap-4" justify="end">
        <DropDownApp />
        <NavbarItemApp text={"randomfilm"} />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            color="primary"
            placeholder="Type to search..."
            size="sm"
            startContent={<SearchIcon size={18} />}
            type="search"
          />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="/huy">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="shadow">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
