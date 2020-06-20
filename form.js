class FORm{
    constructor(){};

    display(){
        var title = createElement("h2");
        title.html("");
        title.position(230,0);
        var input = createInput("name");
        var Button = createButton("OPEN");
        var HELLO = createElement("h3");
        input.position(230,260);
        Button.position(350,300);
        Button.mousePressed(function(){
            input.hide();
            Button.hide();
            var name = input.value();
            PlayerCount+=1;
            playor.update(name);
            playor.updateCount(PlayerCount);
            HELLO.html("Hello, "+name);
            HELLO.position(130,160);
        });
    }
}