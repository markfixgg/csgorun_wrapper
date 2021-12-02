import RunApi from "./api/modules/RunApi";

(async () => {
    // Connect to database
    await require('./modules/database').connect();

    // Init server
    await require('./api/app').start()
})()
