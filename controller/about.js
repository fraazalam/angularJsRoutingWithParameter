app.controller('AboutController',['$routeParams', function(rp){
    console.log(rp.name);
    this.title = rp.name;
}])