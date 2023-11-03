
const link = "httpS://passwordarris.somee.com/api/fecha/2024-01-01T00:00:00";

var result = fetch (link).then(Response=> Response.text()).then(data=>console.log(data))
//
//http://passwordarris.somee.com/api/fecha/2024-01-01T00:00:00
//http://www.passwordarris.somee.com/api/fecha/2024-01-01T00:00:00