app.controller("home", $scope => {
  $scope.lists = home.list;

  $scope.info = home.info;
  $scope.update = home.update;
});
app.controller("nav", $scope => {
  $scope.sign = nav.sign;
  $scope.menu = nav.menu;
});
app.controller("akademik", $scope => {
  $scope.daftar = akademik.daftar;
  $scope.info = akademik.info;
  $scope.kampus = akademik.kampus;
  $scope.jadwal = akademik.jadwal;
});
app.controller("ldosen", ($scope, $state) => {
  $scope.tes = function() {
    $scope.nama = "";
    let status = 0;
    $.each($scope.name, (i, val) => {
      if ($scope.temp.user == val.user && $scope.temp.pass == val.pass) {
        localStorage.user = val.user;
        localStorage.nama = val.name;
        status = 1;
      }
    });
    if (status == 1) {
      $state.go("chkd");
    } else {
      alert("login gagal!");
    }
  };
  $scope.name = akun.mhs;
});
app.controller("award", $scope => {
  $scope.daftar = award;
});
app.controller("prodi", $scope => {
  $scope.daftar = prodi;
});
app.controller("daftar", $scope => {
  $scope.gel = daftar.gel;
  $scope.menu = daftar.menu;
});
app.controller("dosen", $scope => {
  $scope.user = localStorage.user;
  $scope.name = localStorage.nama;
  $scope.dosen = akun.dosen;
});
app.controller("chkd", $state => {
  if (localStorage.user != undefined) $state.go("berandadosen");
  else $state.go("logindosen");
});
app.controller("sdosen", ($scope, $stateParams) => {
  $scope.user = localStorage.user;
  $scope.name = localStorage.nama;
  $scope.id = $stateParams.id;
  $scope.dosen = null;
  $.each(akun.dosen, (i, val) => {
    if ($scope.id == val.email) {
      $scope.dosen = val;
    }
  });
});
app.controller("formReg", $scope => {
  $scope.formlist = form.single;
  $scope.formOption = form.multi;
});
