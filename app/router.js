app.config(($stateProvider, $locationProvider) => {
  $locationProvider.html5Mode(true);
  $stateProvider
    .state({
      name: "home",
      url: "/home",
      replace: true,
      templateUrl: "page/home.html"
    })
    .state({
      name: "akademik",
      url: "/akademik",
      replace: true,
      templateUrl: "page/akademik.html"
    })
    .state({
      name: "profil",
      url: "/profil",
      templateUrl: "page/profil.html"
    })
    .state({
      name: "award",
      url: "/award",
      templateUrl: "page/award.html"
    })
    .state({
      name: "prodi",
      url: "/Program_Studi",
      templateUrl: "page/prodi.html"
    })
    .state({
      name: "kuliah",
      url: "/kuliah",
      templateUrl: "page/kuliah.html"
    })
    .state({
      name: "org",
      url: "/org",
      templateUrl: "page/org.html"
    })
    .state({
      name: "logindosen",
      url: "/login_dosen",
      templateUrl: "page/ldosen.html"
    })
    .state({
      name: "loginmhs",
      url: "/login_mhs",
      templateUrl: "page/lmhs.html"
    });
});
