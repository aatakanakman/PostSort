const Koa           = require('koa')
const Router        = require('koa-router')


const app           = new Koa();
const router        = new Router();


router.get("index", "/", (ctx) => {
  ctx.body = "<h1>welcome to the index page</h1>";
});
router.get("hakkımda", "/about", (ctx) => {
  ctx.body = "<h1>welcome to the about page</h1>";
});
router.get("iletişim", "/contact", (ctx) => {
  ctx.body = "<h1>welcome to the contact page</h1>";
});

app.use(router.routes()).use(router.allowedMethods());

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} dinleniyor.`);
});