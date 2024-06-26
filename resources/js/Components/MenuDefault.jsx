import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
    Typography,
} from "@material-tailwind/react";

export function MenuDefault({ props }) {
    return (
        <Menu>
            <MenuHandler>
                <Button className="w-full h-24 bg-gray-50 dark:bg-blue-800">
                    {props.GLYPH && (
                        <img
                            src={`../../assets/images/${props.GLYPH}`}
                            alt={JSON.stringify(props.GLYPH)}
                        />
                    )}
                    <Typography className="text-gray-800 dark:text-white font-semibold">
                        {props.APRESENTACAO}
                    </Typography>
                </Button>
            </MenuHandler>
            <MenuList>
                {props.submenu.map((sub) => (
                    <MenuItem key={sub.CODIGO} className="flex flex-row gap-2">
                        {sub.GLYPH && (
                            <img
                                src={`../../assets/images/${sub.GLYPH}`}
                                alt={JSON.stringify(sub.GLYPH)}
                                className="w-10 h-auto"
                            />
                        )}
                        <Typography className="text-gray-800 dark:text-white font-semibold">
                            {sub.APRESENTACAO}
                        </Typography>
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
