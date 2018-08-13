window.settings = function() {
  // You an replace this timeframe with other relative timeframes
  // Examples: 'this_6_months', 'previous_6_weeks', or 'this_7_days'
  // See the Keen API docs for more relative timeframes: https://keen.io/docs/api/#relative-timeframes
  const timeframe = "this_4_weeks";

  // This is the projectId and readKey for an example project
  // Replace both with your own projectId and readKey to visualize data from your own Auto-Collector project
  window.renderCharts(new KeenAnalysis({
    projectId: '5812b6058db53dfda8a75af9',
    readKey: '9AD57194D00E31D4D7D0DF02EF72E00162C6E515B343BB3BB75EFFD0B00D8DF1'
  }), timeframe);
}
