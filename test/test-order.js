var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;
chai.use(require('chai-datetime'));

var Order = require('../app/models/models').Order
var OrderMenu = require('../app/models/models').OrderMenu

describe("Order Models Testing:",function(){
	describe("Order",function(){
		var order = new Order({
			barcode_id: String,
			status: String,
			checkin_time:Date,
			people:123,
			status: String,
			table_no: String,
			restaurant_id:{},
			total_price: 10000,
			reservation_id:{}
		});
		// barcode_id
		it('order barcode_id should be a string',(done)=>{
            assert.isString(order.barcode_id,"order barcode_id is string");
            done();
        });
        // order status
        it('order status should be a string',(done)=>{
            assert.isString(order.status,"order status is string");
            done();
        });
        // order people
        it('order people should be a number', function (done) {
            assert.isNumber(order.people, 'order people is number');
            done();
        });
        // check in time
        it('order chekin_time be Date', function (done) {
            order.checkin_time.should.equalDate(order.checkin_time)
            done();
        });

        // order menu_id 
        it('order menu_id is an array[ObjectId]', function (done) {
            assert.isArray(order.order_menu_id,"order menu_id is an objectId")
            done();
        });
         // table number
        it('order table number should be a string',(done)=>{
            assert.isString(order.table_no,"order table number is string");
            done();
        });

        // move history
        it('move history is an array[ObjectId]', function (done) {
            assert.isArray(order.move_history,"move history is an array[Object]")
            done();
        });
        // restaurant Id
        it('order restaurant_id is an array[ObjectId]', function (done) {
            assert.isArray(order.restaurant_id,"order restaurant_id is an array[Object]")
            done();
        });
        // total price
        it('total price should be a number', function (done) {
            assert.isNumber(order.total_price, 'total price is number');
            done();
        });

        // restaurant Id
        it('reservation_id is an ObjectId', function (done) {
            assert.isObject(order.reservation_id,"reservation_id is an ObjectId")
            done();
        });
	});
	describe("order menu",function(){
		var order_menu = new OrderMenu({
			comment:String,
			amount:3,
			ordered_by:{}
		});
		//  menu_id 
        it(' menu_id is an array[ObjectId]', function (done) {
            assert.isArray(order_menu.menu_id,"menu_id is an array[objectId]")
            done();
        });
        // order menu comment
        it('comment should be a string',(done)=>{
            assert.isString(order_menu.comment,"comment is string");
            done();
        });
        // amount
        it('amount should be a number', function (done) {
            assert.isNumber(order_menu.amount, 'amount is number');
            done();
        });

        // order by user id
        it("user id should be an objectId",function(done){
        	assert.isObject(order_menu.ordered_by,"user id")
        })
        
	});
});