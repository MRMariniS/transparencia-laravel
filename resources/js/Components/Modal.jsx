import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { router } from "@inertiajs/react";
 
const Modal = ({routeName}) => {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => {
    setOpen(!open);
    buscaDados(routeName);
  }

  function buscaDados(routeName){
    console.log(routeName);
  }
 
  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Modal
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>Detalhe</DialogHeader>
        <DialogBody>
          CONTEUDO AQUI
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