var express = require('express');
var router = express.Router();

var ActiveDirectory = require('activedirectory');
var config = { url: 'ldap://ad.allstate.com',
             baseDN: 'dc=ad,dc=allstate,dc=com'}
var ad = new ActiveDirectory(config);

router.get('/', function(req, res, next) {
  res.render('login.html')
})

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home.html', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  var username = req.body.username + '@ad.allstate.com';
  var password = req.body.password;

  ad.authenticate(username, password, function(err, auth) {
    if (err) {
      console.log('Authentication Failed!');
      console.log('ERROR: '+JSON.stringify(err));
      return;
    }

    if (auth) {
      console.log('Authenticated!');
      res.redirect('/home')
    }
    else {
      console.log('Authentication failed!');
      res.redirect('/');
    }
  });
})


router.post('/home', function(req, res, next) {
  console.log('hi');
  // pull the data
  // var appElement = document.querySelector('[ng-app=materializeTest]')
  // var $scope = angular.element(appElement).scope()
  // $scope.$apply(function() {
  //   $scope.vm.apps = [{id: 0, title: 'IRIS', description: 'Monitors apps and stuff', monitors:
  //       [{id: 0, title: 'WORKING Monitor', description: 'A large member of the monitor reptile family Varanidae', status: 'green'},
  //        {id: 1, title: 'Savannah Monitor', description: 'A medium-sized species of  monitor lizard native to Africa', status: 'yellow'},
  //        {id: 2, title: 'Monitor 1', description: 'Monitors something', status: 'red'}
  //      ]
  //     },
  //     {id: 1, title: 'METRIXXX', description: 'Shows stats for app usage and stuff', monitors:
  //       [
  //         {id: 0, title: 'Komodo Dragon', description: 'Komodo Dragons are actually monitors and not dragons', status: 'yellow'},
  //         {id: 1, title: 'Ackies Monitor', description: 'An Australian species of lizard belonging to the genus of monitor lizards', status: 'green'},
  //         {id: 2, title: 'Asian Water Monitor', description: 'Parts of India and Malaysia eat monitor tongue and liver as an alleged aphrodisiac', status: 'yellow'}
  //       ]
  //     },
  //     {id: 2, title: 'GLU', description: 'A global queue for claims to be distributed and stuff', monitors:
  //       [{id: 0, title: 'Mangrove Monitor', description: 'Reproductive organs of monitor lizards are used in black magic in parts of Pakistan', status: 'green'},
  //       {id: 1, title: 'Crocodile Monitor', description: 'The Crocodile Monitor has been verified at up to 8 feet long, and some unverified specimens may rival the length of the Komodo Monitor', status: 'green'},
  //       {id: 2, title: 'Timor Monitor', description: 'The skin of monitor lizards is used in making a carnatic music percussion instrument called kanjira', status: 'green'}
  //       ]
  //     }
  //   ];
  // })
})

module.exports = router;
