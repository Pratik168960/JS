// fetch ()
// a global function starts the process of fetching a resource from network
// retuning a promise which is fulfilled once the response is available

// if we request from promise and there occurs a 404 error
// where it would occur : resolve or reject

// it will always occur as a response it is not a error
// error only if browser is not able to request

// A fetch() promise only rejects when the request fails, for example, because
// of a badly-formed request URL or a network error. 
// A fetch() promise does not reject if the server responds with HTTP status 
// codes that indicate errors (404, 504, etc.). 
// Instead, a then() handler must check the Response.ok and/or 
// Response.status properties.