import { Menu } from '@/components/commons/Menu';
import { IChildren } from '@/interfaces/IChildren';
import { ILink } from '../../interfaces/ILinks';


export default function PublicLayout({children}: IChildren){
   //peticion la BD <-- LINKS DEL FRONTEND
    const enlaces:ILink[] = [
        { name: 'Libros', href: '/public/libros' },
        { name: 'Generos', href: '/public/generos'},
        { name: 'Editoriales', href: '/public/editoriales' },
        { name: 'Nuestras Tiendas', href: '/public/tiendas' },
        { name: 'Quienes Somos', href: '/public/qSomos' }
      ]
    return (
        <>
            <header>
                <Menu links = {enlaces} />
                {/* <MenuLink /> */}

            </header>
            <main className='container mx-auto'>
                { children }
            </main>
        </>
        
    )
  }