import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import {
    DivMenu,
    StyledMenu,
} from '@/app/antd_styled';
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { LocaleLang, changeLocale, langSelector } from "@/app/features/localeSlice";
import { MenuSelected, changePage, menuSelector } from '@/app/features/menuSlice';

import type { MenuProps, MenuTheme } from 'antd/es/menu';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

export default function MenuComponent(props: any){
    const pathname_src = usePathname();
    const [pathName, setPathName] = useState<string>('');
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [localeSel, setLocaleSel] = useState<LocaleLang>();
    const [menuS, setMenuS] = useState<MenuSelected>();
    const selectedLang = useAppSelector(langSelector);
    const menuSel = useAppSelector(menuSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setLocaleSel(selectedLang);
    }, [selectedLang]);

    useEffect(() => {
        setMenuS(menuSel!);     
    }, [menuSel])

    useEffect(() => {
        setPathName(pathname_src);
        console.log('alterado');
        console.log(pathname_src);
    }, [pathname_src])

    const ReturnMenuItem = (): MenuItem[] => {
        const items: MenuItem[] = [
            getItem(
                <>
                    <a href={`${pathName!.substring(0, pathName!.lastIndexOf("/") + 1)}index.html`}>
                        {localeSel?.languageJson.menu_0}
                    </a>
                </>,
                'inicio'
            ),
            getItem(
                localeSel?.languageJson.menu_1,
                'projeto'
            ),
            getItem(
                <>
                    <a href={`${pathName!.substring(0, pathName!.lastIndexOf("/") + 1)}colaboradores.html`}>
                        {localeSel?.languageJson.menu_2}
                    </a>
                </>,
                'colaboradores'
            ),
            getItem(
                <>
                    <a href={`${pathName!.substring(0, pathName!.lastIndexOf("/") + 1)}perfil_dados.html`}>
                        {localeSel?.languageJson.menu_3}
                    </a>
                </>,
                'perfil_dados'
            ),
            getItem(
                localeSel?.languageJson.menu_4,
                'tutorial'
            ),
            getItem(
                <Link href="https://www.ufrgs.br/gpmc/papers-in-journals/" rel="noopener noreferrer" target="_blank">
                    {localeSel?.languageJson.menu_5}
                </Link>,
                'grupo_pesquisa'
            )
        ];

        return items;
    }

    
    
    return (
        <StyledMenu
            selectedKeys={[props.keySel]}
            mode={props.modo} 
            items={ReturnMenuItem()}
        />
    );
}