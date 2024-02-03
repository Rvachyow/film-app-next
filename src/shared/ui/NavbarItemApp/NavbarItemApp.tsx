import { Link, NavbarItem } from "@nextui-org/react";
export const NavbarItemApp = ({ text }: { text: string }) => {
  return (
    <NavbarItem>
      <Link color="secondary" href="#">
        {text.toUpperCase()}
      </Link>
    </NavbarItem>
  );
};
