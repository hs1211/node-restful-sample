const Koa= require('koa');
const app= new Koa();

//X-Response-Time

app.use(async function(ctx, next){
  const start =new Date();
  console.log("response time start");
  await next();
  const ms= new Date() - start;
  console.log('X-Response-Time', `${ms}ms`);
  console.log("response time End");
});

//logger
app.use(async function(ctx, next){
  const start =new Date();
  console.log("Logger Start");
  await next();
  const ms= new Date() - start;
  console.log(`${ctx.method} ${ctx.host}${ctx.url} - ${ms}ms`);
  console.log("Logger End");
});


app.use(ctx =>{
  ctx.body='Hello MiddleWare';
  console.log("Main Execution");
});

app.listen(3000);
