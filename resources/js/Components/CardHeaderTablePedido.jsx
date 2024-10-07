import { Button, Input, Tab, Tabs, TabsBody, TabsHeader, Typography } from "@material-tailwind/react";
import PopoverForm from "./PopoverForm";
import { FaMagnifyingGlass, FaUserPlus } from "react-icons/fa6";

const CardHeaderTablePedido = ({ tabs = [] }) => {
    const TABS = tabs;

    function linkValueTabs(value) {
        window.location.href = `/aplicacoes/esic/${value}`;
    }
    return (
        <>
            <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                    <Typography
                        variant="h5"
                        className="text-gray-800 dark:text-white"
                    >
                        Informações de interesse coletivo
                    </Typography>
                    <Typography className="mt-1 font-normal text-gray-800 dark:text-white">
                        Veja abaixo alguns pedidos que podem te ajudar
                    </Typography>
                </div>
                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <PopoverForm
                        routerForm={"/aplicacoes/esic"}
                        label={"Consultar pedido"}
                        labelInputFieldOne={"Protocolo"}
                        labelInputFieldTwo={"CPF"}
                        nameInputFieldOne={"protocolo"}
                        nameInputFieldTwo={"cpf"}
                        method={"post"}
                    />
                    <Button
                        className="interaction flex items-center gap-3"
                        size="sm"
                    >
                        <FaUserPlus strokeWidth={2} className="h-4 w-4" />
                        Novo pedido
                    </Button>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                {TABS.length > 0 ? (
                    <Tabs value="all" className="w-full md:w-max">
                        <TabsHeader
                            className="bg-red dark:bg-blue-900"
                            indicatorProps={{
                                className: "bg-gray-50 dark:bg-blue-800",
                            }}
                        >
                            {tabs.map(({ label, value, classes }) => (
                                <Tab key={value} value={value} className={classes ? classes : ""} onClick={() => linkValueTabs(value)}>
                                    <Typography className="text-gray-800 dark:text-white">
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Typography>
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                ) : (<></>)
                }
                <div className="w-full md:w-72 bg-white dark:bg-blue-900">
                    <Input
                        label="Pesquisar"
                        icon={
                            <FaMagnifyingGlass
                                onClick={() => console.log("SearchTable")}
                                className="h-5 w-5 cursor-pointer fill-gray-800 dark:fill-white"
                            />
                        }
                        labelProps={{ className: "!text-gray-400" }}
                        className="text-gray-800 dark:text-white"
                    />
                </div>
            </div>
        </>
    );
}

export default CardHeaderTablePedido;
