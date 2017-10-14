(function(){
    "use strict";

    const fs = require("fs");
    const args = process.argv.slice(2);

    if( !args[0] ){
        console.log("Usage:");
        console.log("node " + process.argv[1] + " [file]" );
        return -1;
    }

    const marked = require("marked");
    const renderer = new marked.Renderer();
    renderer.heading = function( text, level ){
        return "<h" + level + ">" + text + "</h" + level + ">";
    }
    marked.setOptions({
        renderer: renderer,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
    });

    const text = fs.readFileSync(args[0],"utf-8")
    const html = marked(text);
    console.log(html);
})();
