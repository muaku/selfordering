var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;

var Reservation = require('../app/models/models').Reservation

describe("Reservation Testing",function(){
	var reservation = new Reservation({
		nonuser_info:{},
		people:10,
		comment:String,
	});
	// nonuser information
	it("nonuser_info be an Object",function(done){
    	assert.isObject(reservation.nonuser_info,"nonuser_info");
    	done();
    });
    // people
    it('people should be a number', function (done) {
        assert.isNumber(reservation.people, 'people');
        done();
    });
    // menus
    it('order menu_id is an array[ObjectId]', function (done) {
        assert.isArray(reservation.menus,"menus")
        done();
    });
    // comment
	it("nonuser_info be an Object",function(done){
    	assert.isString(reservation.comment,"comment");
    	done();
    });
});