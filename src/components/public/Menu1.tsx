import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Link from "next/link";

export const Menu1 = () => {
   
  return (
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/public/libros">
            Libros
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Editoriales
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/public/generos">
            Generos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Nuestras Tiendas
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/public/qsomos ">
            Quienes Somos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
  
}
