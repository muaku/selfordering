var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;

var Cupon = require('../app/models/models').Cupon

describe("Cupon Model testing",function(){
	var cupon = new Cupon({
		name: String,
		description: String,
		period: {}
	});
	// name
	it('name should be a string',(done)=>{
        assert.isString(cupon.name,"name");
        done();
    });
    // description
    it('description should be a string',(done)=>{
        assert.isString(cupon.description,"description");
        done();
    });
    // cupon types
    it('cupon types should be Array',(done)=>{
        assert.isArray(cupon.cupon_type,"cupon types");
        done();
    });
    // period
    it('period should be a string',(done)=>{
        assert.isObject(cupon.period,"period");
        done();
    });
});
