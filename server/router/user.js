/**
 * Created by Administrator on 2017/12/30.
 */
const Router = require('koa-router');
const userController = require('../controllers').user;


let user = new Router();

user.get('/getuser', userController.getUser);


module.exports = user;