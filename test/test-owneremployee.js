var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;

var OwnerOrEmployee = require('../app/models/models').OwnerOrEmployee

describe("OwnerOrEmployee Model Testing",function(){
	var ownem = new OwnerOrEmployee({
		name: String,
		password: String,
		email: String,
		phonenumber: [String],
		position: {},
		employee_id: String,
	});
	// barcode_id
	it('name should be a string',(done)=>{
        assert.isString(ownem.name,"name is string");
        done();
    });
    // password
	it('password should be a string',(done)=>{
        assert.isString(ownem.password,"password is string");
        done();
    });
    // password
	it('email should be a string',(done)=>{
        assert.isString(ownem.email,"email is string");
        done();
    });
 	// user phones
    it('phone should be an array', function (done) {
        assert.isArray(ownem.phonenumber, 'Phone is an array');
        done();
    });
    // password
	it('employee_id should be a string',(done)=>{
        assert.isString(ownem.employee_id,"employee_id is string");
        done();
    });
    it("position should be an Object",function(done){
    	assert.isObject(ownem.position,"position");
    	done();
    });
    // social login
    it('social login be an array', function (done) {
        assert.isArray(ownem.social_login, 'social login');
        done();
    });
});