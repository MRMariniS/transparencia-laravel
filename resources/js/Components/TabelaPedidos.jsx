import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import CardHeaderTablePedido from "./CardHeaderTablePedido";
import { SortableTable } from "./Tables/SortableTable";

const TabelaPedidos = ({ pedidosData, routeCreate = "/" }) => {
    return (
        <Card className="h-full w-full bg-gray-50 dark:bg-blue-800">
            <CardHeader
                floated={false}
                shadow={false}
                className="rounded-none bg-inherit"
            >
                <CardHeaderTablePedido
                    tabs={[
                        {
                            label: "Pedidos Coletivo",
                            value: "coletivo",
                            classes: "w-50",
                        },
                        {
                            label: "Pedidos Desclassificados",
                            value: "desclassificados",
                            classes: "w-50",
                        },
                    ]}
                    routeCreate={routeCreate}
                />
            </CardHeader>
            <CardBody className="overflow-y-auto overflow-x-hidden px-0">
                <SortableTable
                    tableData={pedidosData}
                    tableHeaders={[
                        "#",
                        "PROTOCOLO",
                        "OBJETIVO",
                        "PEDIDO",
                        "DATA PEDIDO",
                        "STATUS",
                    ]}
                    headerKeys={[
                        "PROTOCOLO",
                        "OBJETIVO",
                        "PEDIDO",
                        "DTHRPEDIDO",
                        "STATUS",
                    ]}
                    routeName="esic.show"
                    paramRoute="protocolo"
                    valueFieldParam="PROTOCOLO"
                    paginate={true}
                />
            </CardBody>
        </Card>
    );
};

export default TabelaPedidos;
