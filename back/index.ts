import RunApi from "./api/modules/RunApi";

(async () => {
    // Connect to database
    // await require('./modules/database').connect();

    // const api = new RunApi({user: {username: 'test'}});
    //
    // const response = await api.request({
    //     url: 'https://6182de8791d76c00172d16af.mockapi.io/api/v1/exampleApi'
    // })
    //     .catch(e => ({success: false, error: e.message}))
    //
    // console.log(response);

    // Init server
    await require('./api/app').start()

})()
