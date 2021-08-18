
//delete this since they declare features and hash
var features = []
let chars = "abcdef1234567890";
var hash = "0x";
while (hash.length < 64) hash = hash + chars.charAt(Math.floor(Math.random() * 16));
var featuresReduced = features;

//uncomment this in final script
// hash = tokenData.hash 

var bgType;
console.log("hash:" + hash)
let type = xx(2) == 69 ? "Based" : xx(2) < 200 ? "Light" : "Dark"

features.push("Type: " + type);

console.log(xx(2))
let bgSelect = xx(3);
if (type == "Light") {
    if (bgSelect < 6) {
        features.push("Uniform")
    }
    if (bgSelect > 5 && bgSelect < 50) {
        features.push("Dots")
        // dotsbg();
    }
    if (bgSelect > 49 && bgSelect < 100) {
        features.push("Grid")
        // gridbg();
    }
    if (bgSelect > 99 && bgSelect < 126) {
        bgType = "notebook"
        features.push("90's Notebook")
        // notebookbg(width);
    }
    if (bgSelect > 125 && bgSelect < 160) {
        features.push("3D Grid")
        // grid3Dbg();
    }
    if (bgSelect > 159 && bgSelect < 180) {
        features.push("Retrowave")
        // horizonbg();
    }
    if (bgSelect > 179 && bgSelect < 190) {
        features.push("Sprinkles")
        // sprinklesbg();
    }
    if (bgSelect > 189 && bgSelect < 200) {
        features.push("Vibing Sprinkles")
        // sprinklesGradientbg();
    }
    if (bgSelect > 199 && bgSelect < 226) {
        features.push("Memphis")
        // wormsbg();
    }
    if (bgSelect > 225) {
        features.push("Vibing Grid")
        // fakegridbg();
    }
}
if (type == "Dark") {
    if (bgSelect < 8) {
        features.push("Dots")
        // dotsbg();
    }
    if (bgSelect > 7 && bgSelect < 17) {
        features.push("Uniform")
        // background(00, 00, 00);
    }
    if (bgSelect > 16 && bgSelect < 26) {
        features.push("Starscape")
        // starscapebg(randomOffset4, randomOffset5);
    }
    if (bgSelect > 25 && bgSelect < 100) {
        features.push("Grid")
        // gridbg();
    }
    if (bgSelect > 99 && bgSelect < 126) {
        features.push("3D Grid")
        // grid3Dbg();
    }
    if (bgSelect > 125 && bgSelect < 176) {
        features.push("Retrowave")
        // horizonbg();
    }
    if (bgSelect > 175 && bgSelect < 227) {
        features.push("90's Notebook")
        bgType = "notebook"
        // notebookbg();
    }
    if (bgSelect > 226) {
        features.push("Vibing Grid")
        // fakegridbg();
    }
}
if (type == "Based") {
    features.push("Void")

}
let framingShape = xx(22);
if (framingShape > -1 && framingShape < 8 && bgType != "notebook") {
    features.push("90's Notebook Circle")
}
if (framingShape > 7 && framingShape < 16) {
    frameShape = "ellipse";
    features.push("Circle")
}
if (framingShape > 15 && framingShape < 26) {
    frameShape = "square";
    features.push("Square")
}
if (framingShape > 25 && framingShape < 41) {
    frameShape = "default_triangle";
    features.push("Triangle")
}
if (framingShape > 40 && framingShape < 50) {
    frameShape = "gradient_default_triangle";
    features.push("Vibing Triangle")
}
if (framingShape > 249 && bgType == "grid") framingShape = 50;
if (framingShape > 49 && framingShape < 75) {
    frameShape = "gradient_flipped_triangle";
    features.push("Vibing Triangle")
}
if (framingShape > 74 && framingShape < 120) {
    frameShape = "flipped_triangle";
    features.push("Triangle")
}
if (framingShape > 119 && framingShape < 150) {
    frameShape = "gradientellipse";
    features.push("Vibing Circle")
}
if (framingShape > 149 && framingShape < 225) {
    frameShape = "inverse_flipped_triangle";
    features.push("Triangle")
}
if (framingShape > 224 && framingShape < 250) {
    frameShape = "default_flipped_triangle";
    features.push("Triangle")
}
if (framingShape > 249 && bgType != "grid") {
    frameShape = "gridTriangle";
    features.push("Grid Triangle")
}
let curveType = xx(14);
if (curveType < 16) {
features.push("Vibing Flourish")
}
if (curveType > 15 && curveType < 65) {
features.push("Regular Flourish")
}
if (curveType > 64 && curveType < 128) {
features.push("Regular Flourish")
   }
if (curveType > 129 && curveType < 241) {
    features.push("Regular Flourish")
}
if (curveType > 240) {
   features.push("Vibing Flourish")
}
console.log(features)
function xx(a) {
    return parseInt(hash.substring(a, a + 2), 16)
}
