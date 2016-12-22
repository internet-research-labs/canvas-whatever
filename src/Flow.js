
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

  hasConnection(state) {
    return this.connected.hasOwnProperty(state.idName);
  }
}

/**
 * Digraph
 * Maybe this should be immutable... and we should just use the builder/make
 * make function to make these.
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

  /**
   * Return a list of nodes
   */
  getNodes() {
    return Object.values(this.lookup);
  }

  /**
   * Return a list of edges
   */
  getEdges() {
    throw new Error("getEdges is Unimplemented");
    return undefined;
  }

  hasState(id) {
    return this.lookup.hasOwnProperty(id);
  }

  hasConnection(startId, endId) {
    var start = this.getState(startId);
    var end = this.getState(endId);
    if (start == undefined || end == undefined) {
      return false;
    } else {
      return start.hasConnection(end);
    }
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
