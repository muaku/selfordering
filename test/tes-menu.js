var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;

var Menu = require('../app/models/models').Menu
var Menu_category = require('../app/models/models').Menu_category

describe("Menu Model Testing",function(){
	describe("Menu",function(){
		var menu = new Menu({
			restaurant_id: {},
			name: String,
			currency: String,
			description: String,
			discount: String


		});

		// restaurant id
		it('restaurant id should be an object', function (done) {
            assert.isObject(menu.restaurant_id,"menu restaurant_id is an object")
            done();
        });
        // menu name
		it('menu name shoud be a string',(done)=>{
            assert.isString(menu.name,"menu name is string");
            done();
        });
        // menu category
        it('menu category should be an array', function (done) {
            assert.isArray(menu.category, 'menu category is an array');
            done();
        });
        // restaurant pictures
        it('menu pictures should be an array[Object]', function (done) {
            assert.isArray(menu.pictures, 'menu pictures is an array');
            done();
        });
        // restaurant rate
        it('menu price should be a number', function (done) {
            assert.isNotNaN(menu.price, 'menu price is not NaN');
            done();
        });
        // menu currency 
        it('menu currency should be a string',(done)=>{
            assert.isString(menu.currency,"menu currency is string");
            done();
        })
        // menu description 
        it('menu description should be a string',(done)=>{
            assert.isString(menu.description,"menu description is string");
            done();
        })
        // menu discount
        it('menu discount should be a string',(done)=>{
            assert.isString(menu.discount,"menu discount is string");
            done();
        });
	});
	describe("Menu_category",function(){
		var menu_category = new Menu_category({
			name: String,
			slug: String,
			description: String
		});
		// menu_category name
        it('menu_category name should be a string',(done)=>{
            assert.isString(menu_category.name,"event name is string");
            done();
        });
        // menu category slug
        it('menu_category slug should be a string',(done)=>{
            assert.isString(menu_category.slug,"menu_category slug is string");
            done();
        });
        // event name
        it('event description should be a string',(done)=>{
            assert.isString(menu_category.description,"menu_category description is string");
            done();
        });
	})
});
