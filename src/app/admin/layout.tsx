import { Menu } from "@/components/commons/Menu";
import { IChildren } from "@/interfaces/IChildren";
import { ILink } from "@/interfaces/ILinks";

export default function AdminLayout({children}: IChildren){
    const enlaces:ILink[] = [
        { name: 'Libros', href: '/admin/libros' },
        { name: 'Generos', href: '/admin/generos'},
        { name: 'Editoriales', href: '/admin/editoriales' },
        { name: 'Ventas', href: '/admin/ventas' },
        { name: 'Compras', href: '/admin/compras' },
        { name: 'Clientes', href: '/admin/ventas' },
      ]
    return (
        <>
            <header>
                <Menu links = {enlaces} />
            </header>
            <main>
                { children }
            </main>
        </>
    )
}