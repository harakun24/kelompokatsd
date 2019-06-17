let app = angular.module("app", ["ngAnimate", "ui.router"]);
app.directive("login", () => {
  var dir = {};
  dir.restrict = "E";
  dir.templateUrl = "app/view/login.html";
  return dir;
});
app.directive("info", () => {
  var dir = {};
  dir.restrict = "E";
  dir.templateUrl = "app/view/akun.html";
  return dir;
});
