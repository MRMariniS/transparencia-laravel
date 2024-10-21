import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { router } from "@inertiajs/react";
import DetalhePublicacao from "./ContentsModal/DetalhePublicacao";
import DetalhePedido from "@/Pages/DetalhePedido";
import { useState, useEffect } from "react";
import { PropsContext } from "@/Layouts/RootLayout";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Inertia } from "@inertiajs/inertia";

const Modal = ({ routeName, aplicacao, icon = (<FaArrowUpRightFromSquare />), labelButton = "Detalhar" }) => {
    const [open, setOpen] = useState(false);
    const [dados, setDados] = useState(null);

    const handleOpen = () => {
        setOpen(!open);
        Inertia.get(routeName, {}, {
            preserveState: false, // Preserve o estado anterior
            onSuccess: () => {
                console.log('Dados recebidos com sucesso!');
            },
            onError: () => {
                console.error('Erro ao obter dados.');
            }
        });
    }

    console.log(routeName);

    return (
        <>
            <Button onClick={handleOpen} className="interaction flex items-center gap-3"
                size="sm">
                {labelButton} {icon}
            </Button>
            <Dialog
                open={open}
                handler={handleOpen}
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0.9, y: -100 },
                }}
                
            >
                <DialogHeader>Detalhes</DialogHeader>
                <DialogBody className={"max-h-80 overflow-y-auto [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-slate-300 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-track]:bg-slate-100"}>
                    {aplicacao == "publicacao" ? <DetalhePublicacao dadosPublicacao={dados} /> :
                        aplicacao == "esic" ? <></> :
                            <></>
                    }
                </DialogBody>
                <DialogFooter>
                    {/* <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cance</span>
          </Button> */}
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Fechar</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
export default Modal;