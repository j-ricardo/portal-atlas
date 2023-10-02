import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Layout, Space, Button } from 'antd';
import { 
    DivHeader,
    StyledMenu,
    StyledDrawer,
} from '@/app/antd_styled';
const { Header } = Layout;
import headerIconPt from '@/public/ico/pt/LOGO_TOPO_BRANCA.png'
import headerIconEn from '@/public/ico/en/LOGO_TOPO_BRANCA.png';
import ptIcon from "@/public/ico/icon_pt.png";
import enIcon from "@/public/ico/icon_en.png";
import Icon, { GithubOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { LocaleLang, changeLocale, langSelector } from "@/app/features/localeSlice";
import { MenuSelected, changePage, menuSelector } from '@/app/features/menuSlice';
import en from "@/public/static/locales/en.json";
import pt from "@/public/static/locales/pt.json";
import en_pu from "@/public/static/publications/en.json";
import pt_pu from "@/public/static/publications/pt.json";

export default function HeaderComponent(props: any){
    const router = useRouter();
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [localeSel, setLocaleSel] = useState<LocaleLang>();
    const [menuS, setMenuS] = useState<MenuSelected>();
    const selectedUsers = useAppSelector(langSelector);
    const menuSel = useAppSelector(menuSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setLocaleSel(selectedUsers);
    }, [selectedUsers]);

    useEffect(() => {
        setMenuS(menuSel!);        
    }, [menuSel])

    const items: MenuProps['items'] = [
        {
          label: localeSel?.languageJson.menu_1,
          key: 'projeto'
        },
        {
          label: localeSel?.languageJson.menu_2,
          key: 'colaboradores'
        },
        {
          label: localeSel?.languageJson.menu_3,
          key: 'perfil'
        },
        {
          label: localeSel?.languageJson.menu_4,
          key: 'tutorial'
        },
        {
          label:  localeSel?.languageJson.menu_5,
          key: 'grupo_pesquisa'
        },
    ];

    const onClickChangeLocale = () => {
        if(localeSel?.language === 'en'){
            console.log('pt');
            const loc: LocaleLang = {
                language : 'pt',
                languageJson : pt,
                publish: pt_pu
            };
            dispatch(changeLocale(loc));
        } else {
            console.log('en');
            const loc: LocaleLang = {
                language : 'en',
                languageJson : en,
                publish: en_pu
            };
            dispatch(changeLocale(loc));
        }
    }

    const onClickMenu = (key: any) => {
        if(key == 'grupo_pesquisa'){
            window.location.assign('https://www.ufrgs.br/gpmc/');
        } else if (key == 'projeto'){
            router.push('/');
        } else if (key == 'colaboradores'){
            router.push('/colaboradores');
        }
    }

    return (
        <Header
            style={{
                display: "flex",
                alignItems: "center",
                background: "transparent",
                width: "100%",
                height: 120,
                padding: 0,
                position: "absolute",
                zIndex: 999,
            }}
        >
            <DivHeader>
                <Image
                    src={(localeSel?.language === 'en'? headerIconEn.src : headerIconPt.src)}
                    width={159}
                    height={80}
                    style={{ marginRight: 0 }}
                    alt="Logo header"
                />
                <Space size={"middle"}>
                {
                    props.windows[0] > 1300 ? (
                    <>
                        <StyledMenu 
                            selectedKeys={[menuS!.keyName]}
                            mode={"horizontal"} 
                            items={items}
                            onClick={(e: any) => onClickMenu(e.key)}
                        />
                            <Link href="https://github.com/gpmc-lab-ufrgs/atlas-of-opportunity" rel="noopener noreferrer" target="_blank">
                                <Button
                                    style={{ background: "#0A74A638", border: 0 }}
                                    icon={<GithubOutlined style={{ color: "#fff" }} />}
                                />
                            </Link>
                            <Button
                                style={{
                                    width: 32,
                                    height: 32,
                                    background: "#0A74A638",
                                    border: 0,
                                    padding: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                                onClick={onClickChangeLocale}
                            >
                                {/* <img
                                    src={(localeSel?.language === 'en'? enIcon.src : ptIcon.src)}
                                    style={{ 
                                        marginLeft: 'auto',
                                        marginRight: 'auto',
                                        width: 21,
                                        height: 18.7
                                    }}
                                /> */}
                                <Image
                                    src={(localeSel?.language === 'en'? enIcon.src : ptIcon.src)}
                                    width={21}
                                    height={18.7}
                                    style={{ 
                                        marginLeft: 'auto',
                                        marginRight: 'auto'
                                    }}
                                    alt="Logo header"
                                />
                            </Button>
                            <Link href="http://3.92.188.34:3000/" rel="noopener noreferrer" target="_blank">
                                <Button
                                    style={{
                                        background: "#0A74A6",
                                        textTransform: "uppercase",
                                        color: "#fff",
                                        border: 0,
                                        paddingLeft: 30,
                                        paddingRight: 30,
                                        fontSize: 13,
                                    }}
                                >
                                    {localeSel?.languageJson.btn_ir_atlas}
                                </Button>
                            </Link>
                        </>
                    ) : ( <></> )
                }
                {
                    props.windows[0] < 1359 ? (
                    <>
                        <Button
                            icon={<MenuOutlined style={{ color: "#fff" }} />}
                            style={{ background: "transparent" }}
                            onClick={() => setOpenMenu(true)}
                        />
                        <StyledDrawer
                            width={500}
                            onClose={() => setOpenMenu(false)}
                            open={openMenu}
                            headerStyle={{ backgroundColor: "#0d3559" }}
                            closeIcon={<CloseOutlined style={{ color: "#fff" }} />}
                            onClick={(e:any) => console.log(e)}
                            extra={
                                <Space size="middle">
                                    <Link href="https://github.com/gpmc-lab-ufrgs/atlas-of-opportunity" rel="noopener noreferrer" target="_blank">
                                        <Button
                                            style={{ background: "#0A74A638", border: 0 }}
                                            icon={<GithubOutlined style={{ color: "#fff" }} />}
                                        />
                                    </Link>
                                    <Button
                                        style={{
                                            width: 32,
                                            height: 32,
                                            background: "#0A74A638",
                                            border: 0,
                                            padding: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between'
                                        }}
                                        onClick={onClickChangeLocale}
                                    >
                                        {/* <img
                                            src={(localeSel?.language === 'en'? enIcon.src : ptIcon.src)}
                                            style={{ 
                                                marginLeft: 'auto',
                                                marginRight: 'auto',
                                                width: 21,
                                                height: 18.7
                                            }}
                                        /> */}
                                        <Image
                                            src={(localeSel?.language === 'en'? enIcon.src : ptIcon.src)}
                                            width={21}
                                            height={18.7}
                                            style={{ 
                                                marginLeft: 'auto',
                                                marginRight: 'auto'
                                            }}
                                            alt="Logo header"
                                        />
                                    </Button>
                                    <Link href="http://3.92.188.34:3000/" rel="noopener noreferrer" target="_blank">
                                        <Button
                                            style={{
                                            background: "#0A74A6",
                                            textTransform: "uppercase",
                                            color: "#fff",
                                            border: 0,
                                            paddingLeft: 30,
                                            paddingRight: 30,
                                            fontSize: 13,
                                            }}
                                        >
                                            {localeSel?.languageJson.btn_ir_atlas}
                                        </Button>
                                    </Link>
                                </Space>
                            }
                        >
                            <StyledMenu 
                                selectedKeys={[menuS!.keyName]}
                                mode={"vertical"} 
                                items={items}
                                onClick={(e: any) => onClickMenu(e.key)}
                            />
                        </StyledDrawer>
                    </>
                    ) : (
                    <></>
                    )
                }                    
                </Space>
            </DivHeader>
        </Header>
    );
}