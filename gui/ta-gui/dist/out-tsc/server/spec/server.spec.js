var base_url = "http://localhost:3000/";
describe("O servidor", () => {
    var server;
    beforeAll(() => { server = require('../ta-server'); });
    afterAll(() => { server.closeServer(); });
    it("envia emails", () => {
        return request.post(base_url + "email", { "json": { "subject": "teste subject", "body": "teste body" } }).then(body => {
            expect(body).toEqual({ success: "O email foi enviado com sucesso" });
        });
    });
    it("retorna a lista de destinatários do email", () => {
        return request.post(base_url + "email", { "json": { "subject": "teste subject", "body": "teste body" } }).then(body => {
            expect(body).toEqual({ success: "O email foi enviado com sucesso" });
            return request.get(base_url + "email").then(body => {
                expect(body).toContain('{"subject": "teste subject", "body" : "teste body"}');
            });
        });
    });
    it("deleta emails da database", () => {
        return request.post(base_url + "emaildelete", { "json": { "subject": "teste subject", "body": "teste body" } }).then(body => {
            expect(body).toEqual({ success: "O email foi deletado com sucesso" });
        });
    });
});
//# sourceMappingURL=server.spec.js.map