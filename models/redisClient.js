import { createClient } from 'redis';

const client = createClient();
try{
    await client.connect();
  }
catch (err){
    console.log('An error occurred : ', err.name);
    process.exit();
  }

export default client;