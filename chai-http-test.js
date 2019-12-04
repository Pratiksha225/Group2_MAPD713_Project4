var chai = require('chai');
var chaiHttp = require('chai-http');
var expect = chai.expect;
chai.use(chaiHttp);

describe("when we issue a 'GET' to /patients with text='GET TEST'", function(){
    it("should return HTTP 200", function(done) {
        chai.request('https://healthcareapp1.herokuapp.com')
            .get('/patients')
            .end(function(req, res){
                expect(res.status).to.equal(200);
                done();
            });
    });
});

describe("when we issue a 'POST' to /patients with text='POST TEST'", function(){
    it("should return 201", function(done) {
        chai.request('https://healthcareapp1.herokuapp.com')
            .post('/patients')
            .send({ name: 'Mark', gender:'Male', date_of_birth:65, address:'canada', doctor:'Pratiksha', department:'Dept1'})
            .end(function(req, res)
            {
                console.log("Response: " + JSON.stringify(res))
                
                expect(res.status).to.equal(201);
                done();
            });
    });
});

describe("when we issue a 'DELETE' to /patients with text='POST TEST'", function(){
    it("should return 200", function(done) {
        chai.request('https://healthcareapp1.herokuapp.com')
            .del('/patients/1')
        
            .end(function(req, res)
            {
                //console.log("Response: " + JSON.stringify(res))
        
                expect(res.status).to.equal(200);
                done();
            });
    });
});


/*describe("when we issue a 'GET' to /filter with text='aa bb cc'", function(){
    it("should return ''", function(done) {
        chai.request('http://localhost:3000')
            .get('/filter')
            .query({text: 'aa bb cc'}).end(function(req, res){
                expect(res.text).to.equal('');
                done();
            });
    });
});*/


/*
chai.request('http://mydomain.com')
  .post('/myform')
  .field('_method', 'put')
  .field('username', 'dgonzalez')
  .field('password', '123456').end(...)
*/