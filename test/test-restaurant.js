
var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;

var Restaurant = require('../app/models/models').Restaurant
var RestaurantEvent = require('../app/models/models').RestaurantEvent
var RestaurantType = require('../app/models/models').RestaurantType

describe("Restaurant Models Testing",function(){
    describe('restaurant', function () {
        var restaurant = new Restaurant({
            name: String,
            types:{ type: String,},
            reservable:Boolean,
            rate: 4,
            feature:String,
            remark:String,
        });
        // name testing
        it('name shoud be a string',(done)=>{
            assert.isString(restaurant.name,"name is string");
            done();
        })
        // restaurant types
        it('restaurant_types should be an object', function (done) {
            assert.isObject(restaurant.types,"restaurant_types is an object")
            done();
        });
        //location testing
        it('location should be an object', function (done) {
            assert.isObject(restaurant.location,"location is an object")
            done();
        });
        // restaurant address
        it('Address should be an object', function (done) {
            assert.isObject(restaurant.address,"address is an object")
            done();
        });
        // restaurant phones
        it('phone should be an array', function (done) {
            assert.isArray(restaurant.phones, 'Phone is an array');
            done();
        });
        // restaurant sociallinks
        it('sociallink should be an array[Object]', function (done) {
            assert.isArray(restaurant.sociallinks, 'sociallinks is an array');
            done();
        });
        // restaurant pictures
        it('pictures should be an array[Object]', function (done) {
            assert.isArray(restaurant.pictures, 'pictures is an array');
            done();
        });
        // restaurant tags
        it('tags should be an array[Object]', function (done) {
            assert.isArray(restaurant.tags, 'tags is an array');
            done();
        });
        // restaurant budgets
        it('budgets should be an array[Object]', function (done) {
            assert.isObject(restaurant.budgets,"budgets is an object")
            done();
        });
        // restaurant rate
        it('rate should be a number', function (done) {
            assert.isNumber(restaurant.rate, 'rate is not NaN');
            done();
        });
        // restaurant available table number
        it('available_table_no should be an array', function (done) {
            assert.isArray(restaurant.available_table_no, 'available_table_no is an array');
            done();
        });
        // restaurant reservable
        it('reservable should be a Boolean ', function (done) {
            assert.isBoolean(restaurant.reservable, 'reservable is a Boolean');
            done();
        });
        // restaurant access
        it('access should be an array[Object]', function (done) {
            assert.isArray(restaurant.access, 'access is an array');
            done();
        });
        // restaurant operation days
        it('operation_days should be an array[Object]', function (done) {
            assert.isObject(restaurant.operation_days,"operation_days is an object")
            done();
        });
        // restaurant cards
        it('cards an array[Object]', function (done) {
            assert.isObject(restaurant.cards,"cards is an object")
            done();
        });
        // restaurant capacity 
        it('capacity is an object', function (done) {
            assert.isObject(restaurant.capacity,"capacity is an object")
            done();
        });
        // restaurant parking_lot
        it('parking_lot is an array', function (done) {
            assert.isObject(restaurant.parking_lot,"parking_lot is an object")
            done();
        });
        // restaurant feature
        it('feature shoud be a string',(done)=>{
            assert.isString(restaurant.feature,"feature is string");
            done();
        })
        //r estaurant remark
        it('remark shoud be a string',(done)=>{
            assert.isString(restaurant.remark,"remark is string");
            done();
        })
        // restaurant event id
        it('event_id is an array[ObjectId]', function (done) {
            assert.isArray(restaurant.event_id,"event_id is an objectId")
            done();
        });
        // restaurant worker
        it('worker is an array[ObjectId]', function (done) {
            assert.isArray(restaurant.worker,"worker is an objectId")
            done();
        });

    });
    describe("restaurantEvent",function(){
        var res_event = new RestaurantEvent({
            user_id:{},
            name: String,
            details:String,
            status:Boolean,
            comment:String
        });

        // user id
        it('capacity is an object', function (done) {
            assert.isObject(res_event.user_id,"user_id is an object")
            done();
        });
        // event period
        it('period is an object', function (done) {
            assert.isObject(res_event.period,"period is an object")
            done();
        });
        // event name
        it('event name shoud be a string',(done)=>{
            assert.isString(res_event.name,"event name is string");
            done();
        });
        //  event pictures
        it('event pictures is an array[Object]', function (done) {
            assert.isArray(res_event.pictures,"event pictures is an array(object)")
            done();
        });
        // event name
        it('event details shoud be a string',(done)=>{
            assert.isString(res_event.details,"event details is string");
            done();
        });
        // event status
        it('event status should be a Boolean ', function (done) {
            assert.isBoolean(res_event.status, 'event status is a Boolean');
            done();
        });
        // event comment
        it('event comment shoud be a string',(done)=>{
            assert.isString(res_event.comment,"event comment is string");
            done();
        });

    });
    describe("restaurantType",function(){
        var rest_types = new RestaurantType({
            name: String,
            slug: String,
            description: String
        });
        // restaurant type name
        it('name shoud be a string',(done)=>{
            assert.isString(rest_types.name,"name");
            done();
        });
        // restaurant type slug
        it('slug shoud be a string',(done)=>{
            assert.isString(rest_types.slug,"slug");
            done();
        });
        // restaurant type description
        it('description shoud be a string',(done)=>{
            assert.isString(rest_types.description,"description");
            done();
        });

    });
})


// describe('GraphQL', function () {
//     describe('Query', function () {
//         it('restaurants', function (done) {
//             chai.request('http://localhost:3000')
//                 .get('/graphql?query={restaurants{name}}')
//                 .end(function (err, res) {
//                     //ສົ່ງສະຖານະເປັນ 200
//                     expect(res).to.have.status(200);
//                     //ຄວນເປັນ arrays
//                     res.body.data.restaurants.should.be.an('array');
//                     //ຕ້ອງມີ field : ID
//                     //expect(res.body.data.restaurants).to.deep.include.keys('0');
//                     console.log(Restaurant.getFields())
//                     done();
//                 });
//         });
//         it('restaurant', function (done) {
//             chai.request('http://localhost:3000')
//                 .get('/graphql?query={restaurant(id="XXXXXXXX"){name}}')
//                 .end(function (err, res) {
                    

//                     done();
//                 });
//         });
//         it('restaurant_types', function (done) {
//             chai.request('http://localhost:3000')
//                 .get('/graphql?query={restaurant(id="XXXXXXXX"){name}}')
//                 .end(function (err, res) {

//                     done();
//                 });
//         });
//         it('restaurant_type', function (done) {
//             chai.request('http://localhost:3000')
//                 .get('/graphql?query={restaurant(id="XXXXXXXX"){name}}')
//                 .end(function (err, res) {

//                     done();
//                 });
//         });

//     });
// });
