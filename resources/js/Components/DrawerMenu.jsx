import React, { useContext, useState } from "react";
import {
    Drawer,
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { FaChevronDown, FaX } from "react-icons/fa6";
import { Link, usePage } from "@inertiajs/react";

export function DrawerMenu({ isDrawerOpen, closeDrawer }) {
    const { props } = usePage();

    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Drawer
            open={isDrawerOpen}
            onClose={closeDrawer}
            className="bg-white dark:bg-blue-900 overflow-y-auto"
        >
            <div className="mb-2 flex flex-col justify-center items-center p-4">
                <div className="w-full h-fit flex flex-row justify-between items-center">
                    <h5 className="text-xl">Menu</h5>
                    <IconButton
                        variant="text"
                        onClick={closeDrawer}
                        className="interaction rounded-full"
                    >
                        <FaX className="h-6 w-6" />
                    </IconButton>
                </div>
            </div>
            <List>
                {props.menus.menuLateral.map((menu) => (
                    <Accordion
                        key={menu.CODIGO}
                        open={open === menu.CODIGO}
                        icon={
                            <FaChevronDown
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${
                                    open === menu.CODIGO ? "rotate-180" : ""
                                }`}
                            />
                        }
                    >
                        <ListItem
                            className="text-gray-800 dark:text-white bg-gray-50 dark:bg-blue-800"
                            selected={open === menu.CODIGO}
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(menu.CODIGO)}
                                className="border-b-0 p-3 text-gray-800 dark:text-white"
                            >
                                {menu.GLYPH ? (
                                    <ListItemPrefix>
                                        <img
                                            src={`../../assets/images/${menu.GLYPH}`}
                                            alt={JSON.stringify(menu.GLYPH)}
                                        />
                                    </ListItemPrefix>
                                ) : (
                                    <></>
                                )}
                                <Typography className="mr-auto font-normal">
                                    {menu.APRESENTACAO}
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                {menu.submenu.map((sub) => (
                                    <Link key={sub.CODIGO} href={sub.URL}>
                                        <ListItem className="bg-blue-700 dark:bg-sky-200 text-white dark:text-gray-800">
                                            {sub.GLYPH ? (
                                                <ListItemPrefix>
                                                    <img
                                                        src={`../../assets/images/${sub.GLYPH}`}
                                                        alt={JSON.stringify(
                                                            sub.GLYPH
                                                        )}
                                                        className="w-10 h-auto"
                                                    />
                                                </ListItemPrefix>
                                            ) : (
                                                <></>
                                            )}
                                            {sub.APRESENTACAO}
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                        </AccordionBody>
                    </Accordion>
                ))}
            </List>
        </Drawer>
    );
}
