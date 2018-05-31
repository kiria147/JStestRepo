let isName = function() {
    this.john = function() {
        console.log("John");
    return this;
    }

    this.go = function() {
       console.log("goes to");
       return this;
    }

    this.shop = function() {
       console.log("shop to buy food");
       return this;
    }
}

let chainas = new isName();
chainas.john().go().shop();