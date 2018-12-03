window.settings = () => {
  // You an replace this timeframe with other relative timeframes
  // Examples: 'this_6_months', 'previous_6_weeks', or 'this_7_days'
  // See the Keen API docs for more relative timeframes: https://keen.io/docs/api/#relative-timeframes
  const timeframe = 'this_4_weeks';
  window.timezone = 'UTC'; // https://keen.io/docs/api/#timezone

  // This is the projectId and readKey for an example project
  // Replace both with your own projectId and readKey to visualize data from your own Auto-Collector project
  window.initializeDashboard(new KeenAnalysis({
  //   projectId: '5812b6058db53dfda8a75af9',
  //  readKey: '9AD57194D00E31D4D7D0DF02EF72E00162C6E515B343BB3BB75EFFD0B00D8DF1'
   projectId: '5011efa95f546f2ce2000000',
    readKey: 'D9E2872BB0841C7D080D77BA1CC6E49E07FBBF8C9312D650396711AA0B02B2F8'
  }), timeframe);

  const elementCurrentDatetime = document.getElementById('current-datetime');
  if (elementCurrentDatetime) elementCurrentDatetime.innerHTML = new Date().toUTCString();

}
