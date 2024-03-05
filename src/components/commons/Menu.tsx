'use client'
import React, { FC } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Avatar} from "@nextui-org/react";
import { ILink } from '../../interfaces/ILinks';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from 'js-cookie';

interface Props {
  links: ILink[],
  edad?: number
}
//Componentes parametrizado (RECIBE PARÁMETROS)
export const Menu:FC<Props> = ({links}) => {
  // const pathname =  usePathname();
  console.log (Cookies.get('email') );
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
      
        { ! Cookies.get('email') 
          ?
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="/auth/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
          :
            <>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Jason Hughes"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
              <h2>{Cookies.get('email')}</h2>
            </>
            
      }
      
    </Navbar>
  );
  
}

