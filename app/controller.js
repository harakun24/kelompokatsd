app.controller("home", $scope => {
  $scope.lists = [
    {
      title: "dimas",
      link: "/home",
      img: "#",
      content:
        "anpfanp apfnpanfpf panapwfnp poapfpfpadasdasdas asdasdas  asd asda sd asdasdasdasd. asd asd as. sa asdasdas, asdasdasd,sad   . sasdasdasd  apaso"
    },
    {
      title: "dimas",
      link: "/home",
      img: "#",
      content:
        "anpfanp apfnpanfpf panapwfnp poapfpfpadasdasdas asdasdas  asd asda sd asdasdasdasd. asd asd as. sa asdasdas, asdasdasd,sad   . sasdasdasd  apaso"
    }
  ];

  $scope.info = [
    {
      title: "satu",
      fill:
        "dasdasd asda sdas dasd asd asd a aeh eg ea fae fef  ef aef ae  aef af awd ad d ad awd awd awd g aw aw g w ad awdawdawdawd dawd awd wd awdawdawdadw aw dawd awd  awdawdawd wad awd ad awd wdaw d adawdawdaw dad awd awd awd e"
    },
    {
      title: "dua",
      fill:
        "dasdasd asda sdas dasd asd asd a aeh eg ea fae fef  ef aef ae  aef af awd ad d ad awd awd awd g aw aw g w ad awdawdawdawd dawd awd wd awdawdawdadw aw dawd awd  awdawdawd wad awd ad awd wdaw d adawdawdaw dad awd awd awd e"
    },
    {
      title: "tiga",
      fill:
        "dasdasd asda sdas dasd asd asd a aeh eg ea fae fef  ef aef ae  aef af awd ad d ad awd awd awd g aw aw g w ad awdawdawdawd dawd awd wd awdawdawdadw aw dawd awd  awdawdawd wad awd ad awd wdaw d adawdawdaw dad awd awd awd e"
    }
  ];
  $scope.update = [
    {
      title: "satu",
      unit:
        "adawdawd awda da wda wda dad  gr sr gsr ggsrgsg srg srgsr g  hdt thd th dt thm aerhawegawge a ef awf w f wafafawfaf aw fawf awf af wafawf w fw awf",
      url: "update-satu"
    },
    {
      title: "dua",
      unit:
        "adawdawd awda da wda wda dad  gr sr gsr ggsrgsg srg srgsr g  hdt thd th dt thm aerhawegawge a ef awf w f wafafawfaf aw fawf awf af wafawf w fw awf",
      url: "update-dua"
    },
    {
      title: "tiga",
      unit:
        "adawdawd awda da wda wda dad  gr sr gsr ggsrgsg srg srgsr g  hdt thd th dt thm aerhawegawge a ef awf w f wafafawfaf aw fawf awf af wafawf w fw awf",
      url: "update-satu3"
    },
    {
      title: "empat",
      unit:
        "adawdawd awda da wda wda dad  gr sr gsr ggsrgsg srg srgsr g  hdt thd th dt thm aerhawegawge a ef awf w f wafafawfaf aw fawf awf af wafawf w fw awf",
      url: "update-empat"
    },
    {
      title: "lima",
      unit:
        "adawdawd awda da wda wda dad  gr sr gsr ggsrgsg srg srgsr g  hdt thd th dt thm aerhawegawge a ef awf w f wafafawfaf aw fawf awf af wafawf w fw awf",
      url: "update-lima"
    },
    {
      title: "enam",
      unit:
        "adawdawd awda da wda wda dad  gr sr gsr ggsrgsg srg srgsr g  hdt thd th dt thm aerhawegawge a ef awf w f wafafawfaf aw fawf awf af wafawf w fw awf",
      url: "update-enam"
    },
    {
      title: "tujuh",
      unit:
        "adawdawd awda da wda wda dad  gr sr gsr ggsrgsg srg srgsr g  hdt thd th dt thm aerhawegawge a ef awf w f wafafawfaf aw fawf awf af wafawf w fw awf",
      url: "update-tujuh"
    },
    {
      title: "delapan",
      unit:
        "adawdawd awda da wda wda dad  gr sr gsr ggsrgsg srg srgsr g  hdt thd th dt thm aerhawegawge a ef awf w f wafafawfaf aw fawf awf af wafawf w fw awf",
      url: "update-delapan"
    }
  ];
});
app.controller("nav", $scope => {
  $scope.sign = [
    {
      name: "pendaftaran",
      url: "daftar()"
    },
    {
      name: "mahasiswa",
      url: "loginmhs()"
    },
    {
      name: "dosen",
      url: "logindosen()"
    },
    {
      name: "alumni",
      url: "alm()"
    },
    {
      name: "orang tua",
      url: "ortu()"
    }
  ];
  $scope.menu = [
    {
      name: "beranda",
      url: "home()"
    },
    {
      name: "profil",
      url: "profil()"
    },
    {
      name: "akademik",
      url: "akademik()"
    },
    {
      name: "prodi",
      url: "prodi()"
    },
    {
      name: "AWARD",
      url: "award()"
    },
    {
      name: "organisasi",
      url: "org()"
    }
  ];
});
app.controller("akademik", $scope => {
  $scope.daftar = [
    {
      name: "diploma",
      isi: [
        {
          prodi: "Manajemen Informatika",
          sks: "62",
          semester: "genap",
          tahun: "2018/2019",
          url: "akademik(d3mi)"
        },
        {
          prodi: "Teknik Informatika",
          sks: "110",
          semester: "genap",
          tahun: "2018/2019",
          url: "akademik(d3ti)"
        }
      ]
    },
    {
      name: "Sarjana",
      isi: [
        {
          prodi: "Sistem Informasi",
          sks: "80",
          semester: "genap",
          tahun: "2018/2019",
          url: "akademik(s1si)"
        },
        {
          prodi: "Teknik Informatika",
          sks: "96",
          semester: "genap",
          tahun: "2018/2019",
          url: "akademik(s1if)"
        },
        {
          prodi: "SI Transfer",
          sks: "80",
          semester: "genap",
          tahun: "2018/2019",
          url: "akademik(s1sit)"
        },
        {
          prodi: "IF Transfer",
          sks: "96",
          semester: "genap",
          tahun: "2018/2019",
          url: "akademik(s1ift)"
        }
      ]
    }
  ];
  $scope.info = [
    {
      title: "ini berita pertama",
      tanggal: "02 januari 2019",
      url: "berita(1)"
    },
    {
      title: "ini berita kedua",
      tanggal: "24 Februari 2019",
      url: "berita(2)"
    },
    {
      title: "ini berita ketiga",
      tanggal: "06 April 2019",
      url: "berita(3)"
    }
  ];
  $scope.kampus = [1, 2, 3, 4, 5, 6, 7, 8];
  $scope.jadwal = [
    {
      name: "Jadwal Kuliah",
      url: "http://www.amikom.ac.id/index.php/akademik/jadwal/kuliah"
    },
    {
      name: "Jadwal Ujian",
      url: "hhttp://www.amikom.ac.id/index.php/akademik/jadwal/ujian"
    },
    {
      name: "Kalender Akademik 2018/2019",
      url:
        "http://www.amikom.ac.id/public/download/kalendar_akademik_2018_2019.pdf"
    },
    {
      name: "Kalender Akademik 2019/2020",
      url:
        "http://www.amikom.ac.id/public/download/kalender_akademik_2019-2020.pdf"
    }
  ];
});
app.controller("ldosen", $scope => {
  if (localStorage.akun != undefined) window.location.href = "akademik";
  $scope.tes = function() {
    $scope.nama = "";
    let status = 0;
    $.each($scope.name, (i, val) => {
      if ($scope.temp.user == val.user && $scope.temp.pass == val.pass) {
        $scope.nama = val.name;
        status = 1;
        localStorage.akun = val;
      }
    });
    if (status == 1) {
      window.location.href = "akademik";
    } else {
      alert("login gagal!");
    }
  };
  $scope.name = [
    {
      user: "17.11.1725",
      name: "dimas",
      pass: "123"
    },
    {
      user: "17.11.1726",
      name: "bista",
      pass: "jkt"
    },
    {
      user: "17.11.1727",
      name: "hara",
      pass: "321"
    }
  ];
});
app.controller("award", $scope => {
  $scope.daftar = [
    "Gold Remi Award, Worldfest, Houston, International Film Festival 2016",
    "Grandprize Winner, SICAF 2016, The 20th Seoul International Cartoon and Animation Festival",
    "Winner Best Animation, 3th Noida International Film Festival 2016",
    "Nominee International ICT Innovative Service Contest, Taiwan, 2016",
    "BSmart, Nominee Asia Pacific ICT Award, Taiwan, 2016",
    "Gablind, Nominee Asia Pacific ICT Award, Taiwan, 2016",
    "HICO, Nominee, The use of ICTs in education for disadvantaged groups, UNESCO 2016",
    "Ahada, Nominee, The use of ICTs in education for disadvantaged groups, UNESCO 2016 ",
    "BTOUCH, Nominee, The use of ICTs in education for disadvantaged groups, UNESCO 2016",
    "Official Selection, Holland Animation Film Festival 2016"
  ];
});
app.controller("prodi", $scope => {
  $scope.daftar = [
    {
      name: "Akuntansi",
      link: "http://akuntansi.amikom.ac.id"
    },
    {
      name: "Arsitektur",
      link: "http://arsitektur.amikom.ac.id"
    },
    {
      name: "Geografi ",
      link: "http://geografi.amikom.ac.id"
    },
    {
      name: "Ilmu Komunikasi",
      link: "http://ilmukomunikasi.amikom.ac.id"
    },
    {
      name: "Informatika",
      link: "http://informatika.amikom.ac.id"
    },
    {
      name: "Magister Teknik Informatika",
      link: "http://mti.amikom.ac.id"
    },
    {
      name: "Perencanaan Wilayah dan kota",
      link: "http://pwk.amikom.ac.id"
    },
    {
      name: "Teknik Informatika",
      link: "http://d3ti.amikom.ac.id"
    },
    {
      name: "Teknologi Informasi ",
      link: "http://ti.amikom.ac.id"
    },
    {
      name: "Ekonomi ",
      link: "http://ekonomi.amikom.ac.id"
    },
    {
      name: "Hubungan Internasional  ",
      link: "http://hi.amikom.ac.id"
    },
    {
      name: "Ilmu Pemerintahan ",
      link: "http://ilmupemerintahan.amikom.ac.id"
    },
    {
      name: "Kewirausahaan ",
      link: "http://kewirausahaan.amikom.ac.id"
    },
    {
      name: "Manajemen Informatika ",
      link: "http://d3mi.amikom.ac.id"
    },
    {
      name: "Sistem Informasi ",
      link: "http://s1si.amikom.ac.id"
    },
    {
      name: "Teknik Komputer ",
      link: "http://tk.amikom.ac.id"
    }
  ];
});
