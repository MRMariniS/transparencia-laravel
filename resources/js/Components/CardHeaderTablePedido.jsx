import {
    Button,
    Input,
    Tab,
    Tabs,
    TabsHeader,
    Typography,
} from "@material-tailwind/react";
import PopoverForm from "./PopoverForm";
import { FaMagnifyingGlass } from "react-icons/fa6";
import PopoverPrint from "./PopoverPrint";
import { Link, router } from "@inertiajs/react";

const CardHeaderTablePedido = ({ tabs = [], routeCreate }) => {
    const TABS = tabs;
    const currentPath = window.location.pathname;
    const selectedTab = currentPath.split("/").pop();
    const tabSelect =
        "desclassificados" == selectedTab ? selectedTab : "coletivo";

    function linkValueTabs(value) {
        router.get(`/aplicacoes/esic/pedidos/${value}`);
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
                        routerForm={"/aplicacoes/esic/consulta/meus-pedidos"}
                        label={"Consultar pedido"}
                        labelInputFieldOne={"Protocolo"}
                        labelInputFieldTwo={"CPF"}
                        nameInputFieldOne={"protocolo"}
                        nameInputFieldTwo={"cpf"}
                        method={"post"}
                    />
                    <Link href={routeCreate}>
                        <Button
                            className="interaction flex items-center gap-3"
                            size="sm"
                        >
                            Novo Pedido
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                <div className="flex flex-row gap-4 justify-between h-fit">
                    {TABS.length > 0 ? (
                        <Tabs value={tabSelect} className="w-full md:w-max">
                            <TabsHeader
                                className="bg-red dark:bg-blue-900"
                                indicatorProps={{
                                    className: "bg-gray-50 dark:bg-blue-800",
                                }}
                            >
                                {tabs.map(({ label, value, classes }) => (
                                    <Tab
                                        key={value}
                                        value={value}
                                        className={classes ? classes : ""}
                                        onClick={() => {
                                            linkValueTabs(value);
                                        }}
                                    >
                                        <Typography className="text-gray-800 dark:text-white">
                                            &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                        </Typography>
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
                    ) : (
                        <></>
                    )}

                    <PopoverPrint />
                </div>

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
};

export default CardHeaderTablePedido;
