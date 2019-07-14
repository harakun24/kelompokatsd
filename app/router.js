app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state({
      name: "home",
      url: "/home",
      replace: true,
      templateUrl: "./app/view/home.html",
      data: { pageTitle: "Home" }
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
      name: "bonus",
      url: "/bonus",
      replace: true,
      templateUrl: "./app/view/bonus.html"
    })
    .state({
      name: "profil",
      url: "/profil",
      replace: true,
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
      name: "eso",
      url: "/Slip_online",
      templateUrl: "./app/view/eso.html"
    })
    .state({
      name: "kuliah",
      url: "/mhs/kuliah",
      templateUrl: "./app/view/kmhs.html"
    })
    .state({
      name: "org",
      url: "/org",
      templateUrl: "./app/view/organisasi.html"
    })
    .state({
      name: "spras",
      url: "/sarana_prasarana",
      templateUrl: "./app/view/spras.html"
    })
    .state({
      name: "loginmhs",
      url: "/mhs/login",
      templateUrl: "./app/view/lmhs.html"
    })
    .state({
      name: "sarat",
      url: "/mhs/Syarat_Pendafatar",
      templateUrl: "./app/view/syarat.html"
    })
    .state({
      name: "berandamhs",
      url: "/mhs/home",
      templateUrl: "./app/view/mhs.html"
    })
    .state({
      name: "logindosen",
      url: "/login_dosen",
      templateUrl: "./app/view/ldosen.html"
    })
    .state({
      name: "sdosen",
      url: "/dosen/:id",
      templateUrl: "./app/view/sdosen.html"
    })
    .state({
      name: "ndosen",
      url: "/dosen/:id/nilai",
      templateUrl: "./app/view/ndosen.html"
    })
    .state({
      name: "mdosen",
      url: "/dosen/:id/materi",
      templateUrl: "./app/view/mdosen.html"
    })
    .state({
      name: "berandadosen",
      url: "/dosen/",
      templateUrl: "./app/view/dosen.html"
    })
    .state({
      name: "chkd",
      url: "/dosen_masuk",
      templateUrl: "./app/view/landing_dosen.html"
    })
    .state({
      name: "chkm",
      url: "/mhs_masuk",
      templateUrl: "./app/view/landing_mhs.html"
    })
    .state({
      name: "riwayat",
      url: "/dosen/:id/riwayat",
      templateUrl: "./app/view/rdosen.html"
    })
    .state({
      name: "jdosen",
      url: "/dosen/:id/jadwal",
      templateUrl: "./app/view/jdosen.html"
    })
    .state({
      name: "jmhs",
      url: "/mhs/jadwal",
      templateUrl: "./app/view/jmhs.html"
    })
    .state({
      name: "pmhs",
      url: "/mhs/perpustakaan",
      templateUrl: "./app/view/pmhs.html"
    })
    .state({
      name: "vamhs",
      url: "/mhs/pembayaran",
      templateUrl: "./app/view/vamhs.html"
    })
    .state({
      name: "registrasi",
      url: "/registrasi",
      templateUrl: "./app/view/registrasi.html"
    });
});
function MainCtrl($state) {
  $state.transitionTo("profil.login");
}
