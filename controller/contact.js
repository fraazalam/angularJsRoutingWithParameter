app.controller('ContactController',['$routeParams', function (rp) {
    
    if(rp.name){
        this.title = rp.name;
        console.log(rp.name);
    }else{
        this.title = 'Contact Us';
    }
}])