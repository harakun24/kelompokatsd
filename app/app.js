let app = angular.module("app", ["ngAnimate", "ui.router"]);
app.directive("login", () => {
  var dir = {};
  dir.restrict = "E";
  dir.templateUrl = "page/login.html";
  return dir;
});
