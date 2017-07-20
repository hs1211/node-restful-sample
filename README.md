# node-restful-sample

How to Start?
```
At first, I did a setup to manage the packages to use at node project.

Step 1. npm install -g yarn 
Step 1. yarn init (If there isn't yarn installed in your env, please go to step 0)

```



# Six Constraints when design RestFul API

Resource can be abstract concept that that is identifiable by a URI and can be represented in transmittable data.

Representation is the data (or state) that represents the resource.

```
* Uniform Interface(Simplify and Decouples the architecture)
    * Resource Based: Individual resources are identified in requests using URIs as resource identifiers.
    * Manipulation of resource through Representations
    * Self-descriptive Message: Each message includes enough information to describe how to process the message.
    * HATEOAS: To supply the URI for retrieval of object itself or related objects


* Stateless
        : Representational State transfer stateless is key. The client must include all information for the         
        server to fulfill the request

* Cacheable
* Client-Server
    * Servers and clients may also be replaced and developedindependently, as long as the interface is not altered.

* Layered System
* Code on Demand(Optional)
```
