app.controller('MainController', ['$scope', '$http', function($scope, $http) {
  $scope.title = 'Client Directory';
  $scope.secondaryTitle = '';
  $scope.questionText = 'These are the Questions';
  //$scope.name = '';
  //$scope.website = '';
  // Object for storing category names and questions
  $scope.clients = [];
  $scope.clients = [{
      name: 'A2B Tracking',
      id: 'a2btracking',
      website: '',
      emailPlatform: '',
      unbounce: '',
      faviconURL: 'http://www.a2btracking.com/favicon.ico'
  },
  {
      name: 'Abode',
      id: 'abode',
      website: '',
      emailPlatform: '',
      unbounce: '',
      faviconURL: 'http://abodeparkcity.com/wp-content/uploads/2015/07/favicon.ico'
  },
  {
      name: 'Aerospike',
      id: 'aerospike',
      website: '',
      emailPlatform: '',
      unbounce: '',
      faviconURL: 'http://www.google.com/s2/favicons?domain=http://www.aerospike.com/'
  },
  {
      name: 'Belleza',
      id: 'belleza',
      website: '',
      emailPlatform: '',
      unbounce: '',
      faviconURL: 'http://www.google.com/s2/favicons?domain=http://bellezzaspa.com/'
  },
  {
      name: 'Blackline Group',
      id: 'blacklinegroup',
      website: '',
      emailPlatform: '',
      unbounce: '',
      faviconURL: 'http://www.google.com/s2/favicons?domain=http://blacklinegroup.com/'
  }

  ];

  // Gets data from DB on load
  $http.get('/clients').success(function(objectArray)
  {
      console.log('The get response is: ');
      console.log(objectArray);

      // Iterates through array received from get request
      // adds each to the scope variable
      angular.forEach(objectArray, function (object) {
        $scope.clients.push(object);
      });

  });

  //http request - How to correctly do that
  // Though the funtcion is irrelevant legacy code from another project
  $scope.genCategories = function()
  {
    console.log("The Button has been clicked.");

    $http.get('/clients').success(function(data)
    {
        console.log(data);
    });

  };


  $scope.genNewUserPage = function()
  {
      console.log("Going to New User Page");
  };

  $scope.submit = function()
  {
      console.log("The Button has been clicked.");

      // Create object from form data submission
      var formObj =
      { name: $scope.clientName,
        website: $scope.clientSite,
        analytics: $scope.googleAnalyticsID,
        emailPlatform: $scope.emailPlatform,
        unbounce: $scope.ifUnbounce,
        faviconURL:'http://www.google.com/s2/favicons?domain=http://'+$scope.clientSite
      };
      //console.log(formObj);

      $http.post('/clients', formObj).success(function(data)
      {
          //console.log('The object: ' + data + ' has been posted');
          console.log(data);
      });

      //console.log($scope.clientName);
      $scope.name = $scope.clientName;
      //console.log($scope.clientSite);
      $scope.website = $scope.clientSite;
      //console.log($scope.emailPlatform);
      $scope.email = $scope.emailPlatform;
  };




}]);


// Current Plan

// Add Nav-Bar
// 