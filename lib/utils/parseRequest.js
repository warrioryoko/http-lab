module.exports = rawRequest => {
  
  const [method, path]  = rawRequest.toString().split('\n')[0].split(' ');
  console.log(rawRequest.toString());

  const reqBody = rawRequest.toString().split('\n')[4];
  
  return parsedRes = {
    method: `${method}`,
    path: `${path}`,
    body: reqBody
  };
};
