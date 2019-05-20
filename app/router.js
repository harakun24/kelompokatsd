app.config($stateProvider => {
  $stateProvider
    .state({
      name: "home",
      url: "/home",
      templateUrl: "page/home.html"
    })
    .state({
      name: "akademik",
      url: "/akademik",
      templateUrl: "page/akademik.html"
    }).state({
      name: "profil",
      url: "/profil",
      templateUrl: "page/profil.html"
    })
    .state({
      name: "award",
      url: "/award",
      templateUrl: "page/award.html"
    }).state({
      name: "kuliah",
      url: "/kuliah",
      templateUrl: "page/kuliah.html"
    })
    .state({
      name: "org",
      url: "/org",
      templateUrl: "page/org.html"
    });
});
