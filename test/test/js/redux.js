'use strict';

//Reducer
function mainReducer() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? { "message": "hello" } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case 'CHANGE':
      console.log(action.text);
      state.message = action.text;
      return state;
    case 'INIT':
      console.log(state);
      return state;
    default:
      return state;
  }
}

//store
var apps = Redux.combineReducers({
  main: mainReducer
});

// ページが読み込まれたら、ローカルストレージから状態を読み込む
var defaultState = JSON.parse(localStorage.getItem('state')) || { "message": "hello" };
console.log("defaultState:" + JSON.stringify(defaultState));
var store = Redux.createStore(apps, defaultState);
//var store = Redux.createStore(apps);

/* Action + action creators */
var TestAction = { //action creators
  init: function init() {
    store.dispatch({
      type: 'INIT'
    });
  },
  change: function change(value) {
    console.log(value);
    store.dispatch({
      type: 'CHANGE',
      text: value
    }); //action creators
  }
};

function localStorageRender() {
  // ローカルストレージに最新の状態を保存
  localStorage.setItem('state', JSON.stringify(store.getState()));
  //console.log("defaultState:" + JSON.stringify(store.getState()));
}

/* View */

var render = function render() {
  ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
};

store.subscribe(localStorageRender);
store.subscribe(render);

/* render initial component */
render();

function stringify(str) {
  var cache = [];
  return JSON.stringify(str, function (key, value) {
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    if (key == 'parentNode') return;
    return value;
  }, "\t");
}