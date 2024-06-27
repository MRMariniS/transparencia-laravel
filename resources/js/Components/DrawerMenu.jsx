import React, { useState } from "react";
import {
    Card,
    Drawer,
    IconButton,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa6";
import initialPage from "../../data/InitialPage";

export function DrawerMenu({ isDrawerOpen, closeDrawer }) {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <React.Fragment>
            <Drawer
                open={isDrawerOpen}
                onClose={closeDrawer}
                className="bg-white dark:bg-blue-900 overflow-y-auto"
            >
                <div className="mb-2 flex items-center justify-between p-4">
                    <h5 className="text-xl">Menu</h5>
                    <IconButton
                        variant="text"
                        onClick={closeDrawer}
                        className="interaction rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <List>
                    {initialPage.menus.menuLateral.map((menu) => (
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
                                className="text-gray-800 dark:text-white"
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
                                        <ListItem
                                            key={sub.CODIGO}
                                            className="text-gray-800 dark:text-white"
                                        >
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
                                    ))}
                                </List>
                            </AccordionBody>
                        </Accordion>
                    ))}
                </List>
            </Drawer>
        </React.Fragment>
    );
}
