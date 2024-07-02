import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { FaChevronDown } from "react-icons/fa6";
import initialPage from "../../data/InitialPage";

export function SidebarMenu() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className="hidden lg:block h-full w-full max-w-[20rem] p-4 shadow-none rounded-none bg-gray-50 dark:bg-blue-800 overflow-y-auto">
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
                                {menu.GLYPH && (
                                    <ListItemPrefix>
                                        <img
                                            src={`/assets/images/${menu.GLYPH}`}
                                            alt={JSON.stringify(menu.GLYPH)}
                                        />
                                    </ListItemPrefix>
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
                                        {sub.GLYPH && (
                                            <ListItemPrefix>
                                                <img
                                                    src={`/assets/images/${sub.GLYPH}`}
                                                    alt={JSON.stringify(
                                                        sub.GLYPH
                                                    )}
                                                    className="w-10 h-auto"
                                                />
                                            </ListItemPrefix>
                                        )}
                                        {sub.APRESENTACAO}
                                    </ListItem>
                                ))}
                            </List>
                        </AccordionBody>
                    </Accordion>
                ))}
            </List>
        </Card>
    );
}
