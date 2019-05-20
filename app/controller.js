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
      name: "pendaftarans",
      url: "daftar()"
    },
    {
      name: "mahasiswa",
      url: "mhs()"
    },
    {
      name: "dosen",
      url: "dosen()"
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
      name: "perkuliahan",
      url: "kuliah()"
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
