# node-koa-restful


----------


# **How to Start?**

```
At first, I did a setup to manage the packages to use at node project.

Step 0. npm install -g yarn
Step 1. yarn init (If there isn't yarn installed in your env, please go to step 0)

  How to add packages?
  e.g) yarn add koa
       yarn add jest

  How to install from empty node_modules?
        e.g) yarn install
```
----------

# **Print Hello world**
```
var http= require('http');
var server = http.createServer(function(req, res){
 res.writeHead(200);
 res.en('Hello Http');;
});
```
----------

# **Koa Hello world**
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



# **Six Constraints when design RestFul API**


**Terminology**


> Resource can be abstract concept that that is identifiable by a URI and can be represented in transmittable data.
>     Representation is the data (or state) that represents the resource.

----------
**1. Uniform Interface(Simplify and Decouples the architecture)**
```
Resource Based: Individual resources are identified in requests using URIs as resource identifiers.
Manipulation of resource through Representations
Self-descriptive Message: Each message includes enough information to describe how to  process the message.
HATEOAS: To supply the URI for retrieval of object itself or related objects

```
**2. Stateless**
```
Representational State transfer stateless is key. The client must include all information for the server to fulfill the request
```

**3. Cacheable**
**4. Client-Server**
```
  Servers and clients may also be replaced and developedindependently, as long as the interface is not altered.
```
**5. Layered System**
**6. Code on Demand(Optional)**

----------
