import {
    Input,
    Button,
    Typography,
    Select,
    Option,
    Textarea,
} from "@material-tailwind/react";
import { useContext } from "react";
import { PropsContext } from "../Layouts/RootLayout";
import DatePicker from "./DatePicker";

const PedidoForm = ({ tipo = "" }) => {
    const { darkMode } = useContext(PropsContext);

    return (
        <form className="flex flex-col gap-4">
            <div className="w-full flex flex-col gap-1">
                <Typography
                    variant="h4"
                    className="text-gray-800 dark:text-white"
                >
                    Registro de pedido {tipo}
                </Typography>
                <Typography className="font-normal text-gray-800 dark:text-white">
                    Informe os dados abaixo e clique em enviar pedido para gerar
                    o número do protocolo.
                </Typography>
            </div>
            <div className="flex flex-col gap-2">
                <Typography
                    variant="h5"
                    className="text-gray-800 dark:text-white text-lg"
                >
                    Dados Pessoais
                </Typography>
                <div className="flex flex-row gap-2 w-full">
                    <div className="flex flex-row gap-2 w-1/2">
                        <div className="w-2/3">
                            <Input
                                label="Nome"
                                placeholder="Fulano da Silva"
                                color={darkMode ? "white" : "gray"}
                                className="w-full"
                                containerProps={{
                                    className:
                                        "min-w-0 bg-white dark:bg-blue-900 rounded-lg",
                                }}
                                labelProps={{
                                    className: "!text-gray-400",
                                }}
                            />
                        </div>
                        <div className="w-1/3">
                            <Input
                                label="CPF"
                                placeholder="000.000.000-00"
                                color={darkMode ? "white" : "gray"}
                                className="w-full"
                                containerProps={{
                                    className:
                                        "min-w-0 bg-white dark:bg-blue-900 rounded-lg",
                                }}
                                labelProps={{
                                    className: "!text-gray-400",
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 w-1/2">
                        <Input
                            label="Telefone"
                            placeholder="(99) 99999-9999"
                            color={darkMode ? "white" : "gray"}
                            className="w-1/3"
                            containerProps={{
                                className:
                                    "min-w-0 bg-white dark:bg-blue-900 rounded-lg",
                            }}
                            labelProps={{
                                className: "!text-gray-400",
                            }}
                        />
                        <div className="w-1/3">
                            <Select
                                label="Sexo"
                                className="text-gray-800 dark:text-white"
                                labelProps={{
                                    className: "text-gray-800 dark:text-white",
                                }}
                                containerProps={{
                                    className:
                                        "bg-white dark:bg-blue-900 rounded-lg",
                                }}
                                menuProps={{
                                    className:
                                        "bg-white dark:bg-blue-900 text-gray-800 dark:text-white border-gray-500",
                                }}
                            >
                                <Option>Masc</Option>
                                <Option>Fem</Option>
                                <Option>Outros</Option>
                            </Select>
                        </div>
                        <DatePicker classeHerdada={"w-1/3"} />
                    </div>
                </div>
                <div className="flex flex-row gap-2 w-full">
                    <Input
                        label="E-mail"
                        placeholder="fulanosilva@email.com"
                        color={darkMode ? "white" : "gray"}
                        className="w-1/2"
                        containerProps={{
                            className:
                                "min-w-0 bg-white dark:bg-blue-900 rounded-lg",
                        }}
                        labelProps={{
                            className: "!text-gray-400",
                        }}
                    />
                    <Input
                        label="Confirme seu e-mail"
                        placeholder="fulanosilva@email.com"
                        color={darkMode ? "white" : "gray"}
                        className="w-1/2"
                        containerProps={{
                            className:
                                "min-w-0 bg-white dark:bg-blue-900 rounded-lg",
                        }}
                        labelProps={{
                            className: "!text-gray-400",
                        }}
                    />
                </div>
                <div className="flex flex-row gap-2 w-full">
                    <div className="w-1/2">
                        <Select
                            label="Escolaridade"
                            className="text-gray-800 dark:text-white"
                            labelProps={{
                                className: "text-gray-800 dark:text-white",
                            }}
                            containerProps={{
                                className:
                                    "bg-white dark:bg-blue-900 rounded-lg",
                            }}
                            menuProps={{
                                className:
                                    "bg-white dark:bg-blue-900 text-gray-800 dark:text-white border-gray-500",
                            }}
                        >
                            <Option value="Fundamental - Incompleto">
                                Fundamental - Incompleto
                            </Option>
                            <Option value="Fundamental - Completo">
                                Fundamental - Completo
                            </Option>
                            <Option value="Médio - Incompleto">
                                Médio - Incompleto
                            </Option>
                            <Option value="Médio - Completo">
                                Médio - Completo
                            </Option>
                            <Option value="Técnico - Incompleto">
                                Técnico - Incompleto
                            </Option>
                            <Option value="Técnico - Completo">
                                Técnico - Completo
                            </Option>
                            <Option value="Superior - Incompleto">
                                Superior - Incompleto
                            </Option>
                            <Option value="Superior - Completo">
                                Superior - Completo
                            </Option>
                            <Option value="Pós-graduação - Incompleto">
                                Pós-graduação - Incompleto
                            </Option>
                            <Option value="Pós-graduação - Completo">
                                Pós-graduação - Completo
                            </Option>
                            <Option value="Mestrado - Incompleto">
                                Mestrado - Incompleto
                            </Option>
                            <Option value="Mestrado - completo">
                                Mestrado - completo
                            </Option>
                            <Option value="Doutorado - incompleto">
                                Doutorado - incompleto
                            </Option>
                            <Option value="Doutorado - completo">
                                Doutorado - completo
                            </Option>
                        </Select>
                    </div>
                    <div className="w-1/2">
                        <Input
                            label="Profissão"
                            placeholder="Agente de vendas"
                            color={darkMode ? "white" : "gray"}
                            className="w-full"
                            containerProps={{
                                className:
                                    "min-w-0 bg-white dark:bg-blue-900 rounded-lg",
                            }}
                            labelProps={{
                                className: "!text-gray-400",
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <Typography
                    variant="h5"
                    className="text-gray-800 dark:text-white text-lg"
                >
                    Dados do Pedido
                </Typography>
                <div className="flex flex-row gap-2 w-full">
                    <div className="w-1/2">
                        <Select
                            label="Poder"
                            className="text-gray-800 dark:text-white"
                            labelProps={{
                                className: "text-gray-800 dark:text-white",
                            }}
                            containerProps={{
                                className:
                                    "bg-white dark:bg-blue-900 rounded-lg",
                            }}
                            menuProps={{
                                className:
                                    "bg-white dark:bg-blue-900 text-gray-800 dark:text-white border-gray-500",
                            }}
                        >
                            <Option value="executivo">Executivo</Option>
                            <Option value="legislativo">Legislativo</Option>
                            <Option value="previdencia">Previdência</Option>
                        </Select>
                    </div>
                    <div className="w-1/2">
                        <Select
                            label="Estrutura Organizacional"
                            className="text-gray-800 dark:text-white"
                            labelProps={{
                                className: "text-gray-800 dark:text-white",
                            }}
                            containerProps={{
                                className:
                                    "bg-white dark:bg-blue-900 rounded-lg",
                            }}
                            menuProps={{
                                className:
                                    "bg-white dark:bg-blue-900 text-gray-800 dark:text-white border-gray-500",
                            }}
                        >
                            <Option value="executivo">Executivo</Option>
                            <Option value="legislativo">Legislativo</Option>
                            <Option value="previdencia">Previdência</Option>
                        </Select>
                    </div>
                </div>
                <div className="flex flex-row gap-2 w-full">
                    <div className="w-1/2">
                        <Select
                            label="Objetivo"
                            className="text-gray-800 dark:text-white"
                            labelProps={{
                                className: "text-gray-800 dark:text-white",
                            }}
                            containerProps={{
                                className:
                                    "bg-white dark:bg-blue-900 rounded-lg",
                            }}
                            menuProps={{
                                className:
                                    "bg-white dark:bg-blue-900 text-gray-800 dark:text-white border-gray-500",
                            }}
                        >
                            <Option value="info">Informação</Option>
                        </Select>
                    </div>
                    <div className="w-1/2">
                        <Select
                            label="Prioridade"
                            className="text-gray-800 dark:text-white"
                            labelProps={{
                                className: "text-gray-800 dark:text-white",
                            }}
                            containerProps={{
                                className:
                                    "bg-white dark:bg-blue-900 rounded-lg",
                            }}
                            menuProps={{
                                className:
                                    "bg-white dark:bg-blue-900 text-gray-800 dark:text-white border-gray-500",
                            }}
                        >
                            <Option value="baixa">Baixa</Option>
                            <Option value="normal">Normal</Option>
                            <Option value="alta">Alta</Option>
                        </Select>
                    </div>
                </div>
                <div className="w-full">
                    <Textarea
                        label="Pedido"
                        className="bg-white dark:bg-blue-900 text-gray-800 dark:text-white w-full h-52 overflow-auto"
                        containerProps={{
                            className:
                                "min-w-0 bg-white dark:bg-blue-900 rounded-lg",
                        }}
                        labelProps={{
                            className: "!text-gray-800 dark:!text-white",
                        }}
                    />
                </div>
            </div>
            <Button className="interaction" fullWidth>
                Enviar Pedido
            </Button>
        </form>
    );
};

export default PedidoForm;
