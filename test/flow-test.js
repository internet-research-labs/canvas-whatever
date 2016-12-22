let FLOW_STATES = new FlowBuilder()
  .addState("starting")
  .addState("thinking")
  .addState("success")
  .addState("failure")
  .addConnection("starting", "thinking")
  .addConnection("thinking", "success")
  .addConnection("thinking", "failure")
  .build();

// Make these into unit tests
//  console.log(
//    flow.hasState("starting"),
//    flow.hasState("thinking"),
//    flow.hasState("success"),
//    flow.hasState("failure"),
//    flow.hasConnection("starting", "thinking"),
//    flow.hasConnection("thinking", "success"),
//    flow.hasConnection("thinking", "failure"),
//  );
//  console.log(
//    flow.hasState("xzzzd"),
//    flow.hasState(undefined),
//    flow.hasConnection("starting", "failure"),
//    flow.hasConnection("zebra", "cat"),
//  );
