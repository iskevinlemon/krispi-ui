# Krispi UI
Quick prototyping User Interface system for building mobile apps
<br/>

# At a glance
**A simple counter app** <br>
See the demo <a href="">here</a>
```js
// ContextMenu();

var count = 0;

Component(
    Text({
        Id: "",
        Text: "Counter app",
        Position: CENTER,
        MarginTop: "50px",
        FontSize: "20px"
    })
);

Component(
    Text({
        Id: "my-text",
        Text: count,
        Position: CENTER,
        MarginTop: "120px",
        FontSize: "30px"
    })
);

Component(
    Button({
        Text: "+ Add",
        Background: Color.Blue,
        Color: "#fff",
        Position: CENTER,
        Click: Function("addCount"),
    })
);

function addCount(){
    count++;
    locate("#my-text").html(count);
    console.log(`Count is ${count}`);
}

DisplayScreen();
```
