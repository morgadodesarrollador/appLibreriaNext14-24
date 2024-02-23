import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import Link from "next/link";

const links = [
  { name: 'Libros', href: '/public/libros' },
  {
    name: 'Generos',
    href: '/public/generos',
  },
  { name: 'Editoriales', href: '/public/editoriales' },
  { name: 'Nuestras Tiendas', href: '/public/tiendas' },
  { name: 'Quienes Somos', href: '/public/qsomos' },
  { name: 'Servicios', href: '/public/servicios' },
  
]
export const MenuLink = () => {
   
  return (
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">LOGO</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          links.map ( (link) => ( //return
            <NavbarItem>
              <Link color="foreground" href={ link.href }>
                { link.name }
              </Link>
            </NavbarItem>
          ))
        }
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
