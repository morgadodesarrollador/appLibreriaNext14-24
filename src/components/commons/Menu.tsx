// 'use client'
import React, { FC } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button} from "@nextui-org/react";
import { ILink } from '../../interfaces/ILinks';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  links: ILink[],
  edad?: number
}
//Componentes parametrizado (RECIBE PARÁMETROS)
export const Menu:FC<Props> = ({links}) => {
  // const pathname =  usePathname();
  return (
    <Navbar>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-inherit">LOGO</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {
          links.map ( (link) => (
            <NavbarItem>
              <Link 
                key={ link.name } 
                // className={`${pathname == link.href ? 'text-red-600 bg-sky-100' : 'text-blue-600'}`} 
                href={ link.href }>
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
