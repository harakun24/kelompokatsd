app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state({
      name: "home",
      url: "/home",
      replace: true,
      templateUrl: "./app/view/home.html"
    })
    .state({
      name: "/",
      url: "/",
      replace: true,
      templateUrl: "./app/view/home.html"
    })
    .state({
      name: "akademik",
      url: "/akademik",
      replace: true,
      templateUrl: "./app/view/akademik.html"
    })
    .state({
      name: "profil",
      url: "/profil",
      templateUrl: "./app/view/profil.html"
    })
    .state({
      name: "award",
      url: "/award",
      templateUrl: "./app/view/award.html"
    })
    .state({
      name: "alm",
      url: "/alumni",
      templateUrl: "./app/view/alumni.html"
    })
    .state({
      name: "daftar",
      url: "/Pendaftaran",
      templateUrl: "./app/view/pendaftaran.html"
    })
    .state({
      name: "ortu",
      url: "/orang_tua",
      templateUrl: "./app/view/orangtua.html"
    })
    .state({
      name: "prodi",
      url: "/Program_Studi",
      templateUrl: "./app/view/prodi.html"
    })
    .state({
      name: "kuliah",
      url: "/kuliah",
      templateUrl: "./app/view/kuliah.html"
    })
    .state({
      name: "org",
      url: "/org",
      templateUrl: "./app/view/org.html"
    })
    .state({
      name: "logindosen",
      url: "/login_dosen",
      templateUrl: "./app/view/ldosen.html"
    })
    .state({
      name: "sdosen",
      url: "/aktif_dosen:id",
      templateUrl: "./app/view/sdosen.html"
    })
    .state({
      name: "berandadosen",
      url: "/beranda_dosen",
      templateUrl: "./app/view/dosen.html"
    })
    .state({
      name: "chkd",
      url: "/dosen_masuk",
      templateUrl: "./app/view/landing_dosen.html"
    })
    .state({
      name: "registrasi",
      url: "/registrasi",
      templateUrl: "./app/view/registrasi.html"
    })
    .state({
      name: "loginmhs",
      url: "/login_mhs",
      templateUrl: "./app/view/lmhs.html"
    });
});
