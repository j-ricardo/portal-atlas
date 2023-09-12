import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Layout, Space, Button } from 'antd';
import { 
    DivHeader,
    StyledMenu,
    StyledDrawer,
} from '../../antd_styled';
const { Header } = Layout;
import headerIconPt from '../../ico/pt/LOGO_TOPO_BRANCA.png';
import headerIconEn from '../../ico/en/LOGO_TOPO_BRANCA.png';
import Icon, { GithubOutlined, MenuOutlined, CloseOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import ptIcon from "../../ico/icon_pt.png";
import enIcon from "../../ico/icon_en.png";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { LocaleLang, changeLocale, langSelector } from "../../features/localeSlice";
import en from "../../../public/static/locales/en.json";
import pt from "../../../public/static/locales/pt.json";


export default function HeaderComponent(props: any){
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [localeSel, setLocaleSel] = useState<LocaleLang>();
    const selectedUsers = useAppSelector(langSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setLocaleSel(selectedUsers);
    }, [selectedUsers]);

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
          label: localeSel?.languageJson.menu_5,
          key: 'grupo_pesquisa'
        },
    ];

    const onClickChangeLocale = () => {
        if(localeSel?.language === 'en'){
            console.log('pt');
            const loc: LocaleLang = {
                language : 'pt',
                languageJson : pt
            };
            dispatch(changeLocale(loc));
        } else {
            console.log('en');
            const loc: LocaleLang = {
                language : 'en',
                languageJson : en
            };
            dispatch(changeLocale(loc));
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
                    src={(localeSel?.language === 'en'? headerIconEn : headerIconPt)}
                    width={159}
                    height={80}
                    style={{ marginRight: 0 }}
                    alt="Logo header"
                />
                <Space size={"middle"}>
                {
                    props.windows[0] > 1358 ? (
                    <>
                        <StyledMenu mode={"horizontal"} items={items} />
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
                                <Image
                                    src={(localeSel?.language === 'en'? enIcon : ptIcon)}
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
                                        <Image
                                            src={(localeSel?.language === 'en'? enIcon : ptIcon)}
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
                            <StyledMenu mode={"vertical"} items={items} />
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