module.exports = rawRequest => {
  
  const [method, path]  = rawRequest.toString().split('\n')[0].split(' ');
  console.log(rawRequest.toString());

  const reqBody = rawRequest.toString().split('\n')[4];
  
  const parsedReq = {
    method: `${method}`,
    path: `${path}`
  };

  if(reqBody) {
    parsedReq.body = reqBody;
    console.log(reqBody);
    // I realized console.log of reqBody was undefined because the test
    // doesn't HAVE a body. This caused the test to fail, as written
  }

  return parsedReq;
};
