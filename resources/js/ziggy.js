const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"index":{"uri":"\/","methods":["GET","HEAD"]},"esic.index":{"uri":"esic","methods":["GET","HEAD"]},"esic.create":{"uri":"esic\/create","methods":["GET","HEAD"]},"esic.store":{"uri":"esic","methods":["POST"]},"esic.show":{"uri":"esic\/{esic}","methods":["GET","HEAD"],"parameters":["esic"]},"esic.edit":{"uri":"esic\/{esic}\/edit","methods":["GET","HEAD"],"parameters":["esic"]},"esic.update":{"uri":"esic\/{esic}","methods":["PUT","PATCH"],"parameters":["esic"]},"selo.index":{"uri":"selo","methods":["GET","HEAD"]}}};
if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}
export { Ziggy };
