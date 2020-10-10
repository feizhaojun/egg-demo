'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }

  async ctx() {
    // ctx.query
    // ctx.params
    ctx.body = ctx;
  }
}

module.exports = HomeController;
