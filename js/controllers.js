var app = angular.module('materializeTest', []);

app.controller('indexCtrl', [indexCtrl]);

function indexCtrl() {
  var vm = this;

  vm.apps = [
    {id: 0, title: 'IRIS', description: 'Monitors apps and stuff', monitors: [{id: 0, title: 'Nile Monitor', description: 'A large member of the monitor reptile family Varanidae', status: 'green'}, {id: 1, title: 'Savannah Monitor', description: 'A medium-sized species of  monitor lizard native to Africa', status: 'yellow'}, {id: 2, title: 'Monitor 1', description: 'Monitors something', status: 'red'}]}, {id: 1, title: 'METRIXXX', description: 'Shows stats for app usage and stuff', monitors: ['Stat Tester 1', 'Stat Tester 2', 'Nile Monitor']}, {id: 2, title: 'GLU', description: 'A global queue for claims to be distributed and stuff', monitors: ['Claims monitor 1', 'Claims tester 1', 'Claims thing']}
  ]
  vm.currentApp;
  vm.currentMonitor;
  vm.showMonitors = function(id) {
    vm.currentApp = vm.apps[id];
  }
  vm.showMonitorDetail = function(id) {
    vm.currentMonitor = vm.currentApp.monitors[id];
  }
}
