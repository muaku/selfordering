var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;

var Expenditure = require('../app/models/models').Expenditure
var Product = require('../app/models/models').Product
var ProductType = require('../app/models/models').ProductType

describe("Expenditure - Product - ProductType",function(){

	// expenditure
	describe("Expenditure Testing",function(){
		var expend = new Expenditure({
			comment: String,
		});
		// comment
		it('comment should be a string',(done)=>{
        assert.isString(expend.comment,"name is string");
        done();
    });
	});

	// product
	describe("Product Testing",function(){
		var product = new Product({
			name: String,
			price: 2000,
			amount: 3,
		});
		//name 
		it('name should be a string',(done)=>{
        assert.isString(product.name,"name is string");
        done();
    });
		// price
		it('price should be a number', function (done) {
            assert.isNumber(product.price, 'price');
            done();
        });
		//amount 
		it('price should be a number', function (done) {
            assert.isNumber(product.amount, 'amount');
            done();
        });
		// pictures
		it('pictures should be an array[Object]', function (done) {
            assert.isArray(product.pictures, 'pictures');
            done();
        });
	});
	// product type
	describe("ProductType",function(){
		var product_type = new ProductType({
			name:String,
			slug:String,
			description:String
		});
		//  name
        it('name shoud be a string',(done)=>{
            assert.isString(product_type.name,"name");
            done();
        });
        //  slug
        it('slug shoud be a string',(done)=>{
            assert.isString(product_type.slug,"slug");
            done();
        });
        //  description
        it('description shoud be a string',(done)=>{
            assert.isString(product_type.description,"description");
            done();
        });
	});
});