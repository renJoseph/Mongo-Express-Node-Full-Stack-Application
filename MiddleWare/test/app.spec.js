const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);

describe('server', () => {

    it('should do this', () => {
        chai.expect(true).to.eq(true);
    });
    it('does another thing', () => {
        chai.expect(false).to.eq(false);
    });
    it('should process get request', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            chai.expect(res.status).to.eq(200);
            chai.expect(res.text).to.eq('Hello World!');
            //signifies test is complete
            done();
        })
    });
});