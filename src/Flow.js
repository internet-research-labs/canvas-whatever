
/**
 * Node of a Graph
 */
export class FlowState {
  constructor(idName, props) {
    this.idName = idName;
    this.connected = {};
    this.props = props;
  }

  connect(state) {
    this.connected[state.idName] = state;
  }

  disconnect(state) {
    delete this.connected[state.idName];
  }
}

/**
 * Digraph
 */
export class Flow {
  constructor() {
    this.lookup = {};
  }

  addState(flowState) {
    this.lookup[flowState.idName] = flowState;
  }

  connectStates(startState, endState) {
    let start = this.lookup[startState.idName];
    let end = this.lookup[endState.idName];
    start.connect(end);
  }

  getState(idName) {
    return this.lookup[idName];
  }

  getNodes() {
    return Object.values(this.lookup);
  }

  getEdges() {
    throw new Error("getEdges is Unimplemented");
    return undefined;
  }


}

export class FlowBuilder {
  constructor() {
    this.flow = new Flow();
  }

  addState(idName, props) {
    this.flow.addState(new FlowState(idName, props));
    return this;
  }

  addConnection(startId, endId) {
    let start = this.flow.getState(startId);
    let end = this.flow.getState(endId);
    this.flow.connectStates(start, end);
    return this;
  }

  build() {
    return this.flow;
  }
}
