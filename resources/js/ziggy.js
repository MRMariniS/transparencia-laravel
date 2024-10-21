const Ziggy = {
    url: "http://localhost",
    port: null,
    defaults: {},
    routes: {
        "sanctum.csrf-cookie": {
            uri: "sanctum/csrf-cookie",
            methods: ["GET", "HEAD"],
        },
        "{entidade?}.index": {
            uri: "{entidade?}",
            methods: ["GET", "HEAD"],
            parameters: ["entidade"],
        },
        "esic.index": { uri: "aplicacoes/esic", methods: ["GET", "HEAD"] },
        "esic.create": {
            uri: "aplicacoes/esic/create",
            methods: ["GET", "HEAD"],
        },
        "esic.store": { uri: "aplicacoes/esic", methods: ["POST"] },
        "esic.show": {
            uri: "aplicacoes/esic/{esic}",
            methods: ["GET", "HEAD"],
            parameters: ["esic"],
        },
        "esic.edit": {
            uri: "aplicacoes/esic/{esic}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["esic"],
        },
        "esic.update": {
            uri: "aplicacoes/esic/{esic}",
            methods: ["PUT", "PATCH"],
            parameters: ["esic"],
        },
        "esic.meuspedidos": {
            uri: "aplicacoes/esic/consulta/meus-pedidos",
            methods: ["POST"],
        },
        "esic.tipospedidos": {
            uri: "aplicacoes/esic/pedidos/{tipo}",
            methods: ["GET", "HEAD"],
            parameters: ["tipo"],
        },
        "selo.index": { uri: "aplicacoes/selo", methods: ["GET", "HEAD"] },
        "publicacao.index": {
            uri: "aplicacoes/publicacao",
            methods: ["GET", "HEAD"],
        },
        "publicacao.create": {
            uri: "aplicacoes/publicacao/create",
            methods: ["GET", "HEAD"],
        },
        "publicacao.store": { uri: "aplicacoes/publicacao", methods: ["POST"] },
        "publicacao.show": {
            uri: "aplicacoes/publicacao/{publicacao}",
            methods: ["GET", "HEAD"],
            parameters: ["publicacao"],
        },
        "publicacao.edit": {
            uri: "aplicacoes/publicacao/{publicacao}/edit",
            methods: ["GET", "HEAD"],
            parameters: ["publicacao"],
        },
        "publicacao.update": {
            uri: "aplicacoes/publicacao/{publicacao}",
            methods: ["PUT", "PATCH"],
            parameters: ["publicacao"],
        },
        "publicacao.destroy": {
            uri: "aplicacoes/publicacao/{publicacao}",
            methods: ["DELETE"],
            parameters: ["publicacao"],
        },
        "eproc.publicarqsview": {
            uri: "PublicArqsView/{iddoc}",
            methods: ["GET", "HEAD"],
            parameters: ["iddoc"],
        },
    },
};
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
