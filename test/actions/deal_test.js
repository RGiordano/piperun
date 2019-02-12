const plg = require('pluga-plg');
const expect = require('chai').expect;
const action = require('../../lib/actions/deal');

const timestamp = Date.now();
const title = `Deal Test-${timestamp}`;

const event = {
    meta:{
        baseURI: process.env.BASE_URI
    },
    auth: {
        token: process.env.TOKEN
    },
    input:{
        title: title,
        stage_id: 7487,
    }
};

describe('Action: Create deal', () => {
    it('Should create a deal', function (done) {
        action.handle(plg, event).then(result => {
            expect(result).to.include({
                title: title
            });

            done();
        }).catch(done);
    });
});