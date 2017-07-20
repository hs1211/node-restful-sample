# **node-koa-restful**



# Koa Hello world
```
What is koa?
 - New web framework(node v7.6.0 above if not, start from Step 0)

Installation
- Step 0. nvm install 7(As now node 8)
- Step 1. yarn add koa

const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

```

----------

# Koa Middleware
```
const Koa = require('koa');
const app = new Koa();

// x-response-time

app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);

```
