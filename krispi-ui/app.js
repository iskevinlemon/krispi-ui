// ContextMenu();

var count = 0;

Component(
    H1({
        Id: "",
        Text: "Counter app",
        Position: CENTER,
        MarginTop: "50px"
    })
);

Component(
    H1({
        Id: "my-text",
        Text: count,
        Position: CENTER,
        MarginTop: "120px"
    })
);

Component(
    Button({
        Text: "+ Add",
        Background: Color.Blue,
        Color: "#fff",
        Position: CENTER,
        Click: Function("addCount")
    })
);

function addCount(){
    count++;
    locate("#my-text").html(count);
}

DisplayScreen();