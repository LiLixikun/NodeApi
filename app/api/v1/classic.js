const Router = require('koa-router')
const router = new Router({
    prefix: '/v1/classic'
})

const { Auth } = require('../../validators/auth')

router.get('/latest', new Auth(9).m, (ctx, next) => {
    ctx.body = ctx.auth.uid
})

module.exports = router