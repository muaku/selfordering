var chai = require('chai');
var expect = chai.expect;
var should = chai.should;
var assert = chai.assert;

var User = require('../app/models/models').User
var Acl = require('../app/models/models').Acl

describe("User && ACL",function(){
	describe("User Testing",function(){
		var user = new User({
			firebase_uid:String,
			user_uuid: String,
			name: String,
			fullname: String,
			password: String,
			email: String,
			phonenumber: String,
			level:String, // ADMIN DEVELOPER RESTAURANT
			secret: String,
		});
		// firebase id
        it('firebase id shoud be a string',(done)=>{
            assert.isString(user.firebase_uid,"firebase id");
            done();
        });
        // user_uuid
        it('user_uuid id shoud be a string',(done)=>{
            assert.isString(user.user_uuid,"user_uuid");
            done();
        });
        // name 
        it('user name shoud be a string',(done)=>{
            assert.isString(user.name,"name");
            done();
        });
        // full name 
        it('full name shoud be a string',(done)=>{
            assert.isString(user.fullname,"full name");
            done();
        });
        // birthday
        // it('birthday shoud be a string',(done)=>{
        //     assert.isString(user.birthday,"birthday");
        //     done();
        // });
        // password 
        it('password shoud be a string',(done)=>{
            assert.isString(user.password,"password");
            done();
        });
        // email
        it('email shoud be a string',(done)=>{
            assert.isString(user.email,"email");
            done();
        });
        // phone
        it('phonenumber shoud be a string',(done)=>{
            assert.isString(user.phonenumber,"phonenumber");
            done();
        });
        // login social 
        it('social_login shoud be a string',(done)=>{
            assert.isArray(user.social_login,"social_login");
            done();
        });
        // level
        it('level shoud be a string',(done)=>{
            assert.isString(user.level,"level");
            done();
        });
        // working station
        it('working_station shoud be a string',(done)=>{
            assert.isArray(user.working_station,"working_station");
            done();
        });
        // secret
        it('secret shoud be a string',(done)=>{
            assert.isString(user.secret,"secret");
            done();
        });
	});

	//ACL
	describe("ACL Testing",function(){
		var acl = new Acl({
			role: String,
			action:{},
			attributes:{},
			updated_at:Date
		});
		// role
        it('role shoud be a string',(done)=>{
            assert.isString(acl.role,"role");
            done();
        });
        // resource
        it('resource shoud be a string',(done)=>{
            assert.isArray(acl.resource,"resource");
            done();
        });
        // action
        it('action shoud be a string',(done)=>{
            assert.isObject(acl.action,"action");
            done();
        });
        // attributes
        it('attributes shoud be a Object',(done)=>{
            assert.isObject(acl.attributes,"attributes");
            done();
        });
	});
});