var surfaceConstant = 1024; let type; let bars_used = false;
let grid_used = false; let sprinkles_used = false;
let checkerEven = false; let two_straight = false; let worms_used = false; let ss_circle = false;
var frameShape; var bgType; var floatingShapeType;
var centeredShapeType; var framingShapeType;
var framingShape_failsafe = 0; var hash; var clrs;
var palettes; var globalBlack; var globalWhite;

function setup(){ 
  createCanvas(1024,1024);
  globalBlack = color('#000000');globalWhite = color('#FFFFFF');
  clrs = [color(000000),color(000000),color(000000),color(000000),color(000000)];
  palettes = [
  [//LIGHT
    [color('#FFFFFF'), color('#ec89b5'), color('#7ecfbc'), color('#f4ef94'), color('#acd6d4')],
    [color('#000000'), color('#ec89b5'), color('#7ecfbc'), color('#f4ef94'), color('#acd6d4')],
    [color('#554bf9'), color('#34ffec'), color('#ffbeff'), color('#f3abae'), color('#fc6f00')],
    [color('#ffeb84'), color('#f2d8db'), color('#ffbae0'), color('#9fe6d6'), color('#000000')],
    [color('#b2a3c5'), color('#8bcfc0'), color('#2a68b1'), color('#ff605d'), color('#fbcb21')],
    [color('#000000'), color('#ffd9e4'), color('#fc635d'), color('#aee6cd'), color('#faca1e')],
    [color('#000000'), color('#f1a9bf'), color('#4bcac1'), color('#e66494'), color('#f6df53')],
    [color('#000000'), color('#f27998'), color('#04b7e2'), color('#f2fa66'), color('#a885a6')],
    [color('#000000'), color('#dcb710'), color('#ff7c62'), color('#c62781'), color('#3babad')],
    [color('#000000'), color('#6dfee1'), color('#ff9fe4'), color('#69cfff'), color('#fff59c')],
    [color('#000000'), color('#f6c7bf'), color('#fdef96'), color('#88cac6'), color('#d2a5e0')],
    [color('#000000'), color('#f41651'), color('#ff3fb2'), color('#ffa624'), color('#00a5b2')],
    [color('#000000'), color('#fec3b5'), color('#2cae8c'), color('#ffe44f'), color('#c539a4')],
    [color('#000000'), color('#03bcd8'), color('#e7b949'), color('#f25a35'), color('#eb9bbe')],
    [color('#000000'), color('#dbeded'), color('#99d4e4'), color('#f8bee4'), color('#faff7a')],
    [color('#000000'), color('#fe2284'), color('#fbf650'), color('#0fc2d6'), color('#01d4b1')],
    [color('#000000'), color('#f9ce80'), color('#fb8372'), color('#6cdabf'), color('#0ebf6f')],
    [color('#dc787a'), color('#fff681'), color('#0df7fe'), color('#ff7170'), color('#8383ff')],
    [color('#000000'), color('#01aaad'), color('#bfaad3'), color('#9dd9d7'), color('#f59cb0')],
    [color('#000000'), color('#f7bfda'), color('#fdeb3f'), color('#82d2e9'), color('#0050a3')],
    [color('#000000'), color('#f7cbe2'), color('#904762'), color('#fce935'), color('#75e8bf')],
    [color('#3fda65'), color('#ff5aa9'), color('#fe9bc7'), color('#00d7ec'), color('#fddd0c')],
    [color('#000000'), color('#89d0c0'), color('#f87980'), color('#b2a4c8'), color('#eed55e')],
    [color('#000000'), color('#e0378a'), color('#eb7b4d'), color('#13a1b7'), color('#e9b955')],
    [color('#542f63'), color('#deb505'), color('#fd5d5d'), color('#0069ad'), color('#7ba1c6')],
    [color('#fff44d'), color('#f7a5bb'), color('#ed008c'), color('#01babc'), color('#00b7f1')]
  ],
  [ //DARK
    [color('#FFFFFF'), color('#eee30f'), color('#65fadc'), color('#f37990'), color('#3b3ff7')],
    [color('#FFFFFF'), color('#eee30f'), color('#65fadc'), color('#f37990'), color('#3b3ff7')],
    [color('#000000'), color('#ff3396'), color('#2cd6cb'), color('#ffde02'), color('#ff7ef1')],
    [color('#0f6ced'), color('#fbf259'), color('#efa7b3'), color('#6aecbe'), color('#ffffff')],
    [color('#000000'), color('#fff757'), color('#e969fe'), color('#2bfbff'), color('#ffffff')],
    [color('#ff7e36'), color('#ec0d77'), color('#13abdc'), color('#deea7c'), color('#56fdc5')],
    [color('#000000'), color('#fe47b3'), color('#5bcdff'), color('#fee229'), color('#ffffff')],
    [color('#d7d30f'), color('#fa4d83'), color('#df7a2a'), color('#3bbda1'), color('#9c68b3')],
    [color('#e14f8e'), color('#84931c'), color('#e8d403'), color('#639fde'), color('#ea9ac1')],
    [color('#000000'), color('#69479d'), color('#ee3f76'), color('#4687c7'), color('#fce500')],
    [color('#e4018c'), color('#96cce4'), color('#29ace4'), color('#fecf0d'), color('#ffffff')],
    [color('#ed7193'), color('#f3e86c'), color('#47b375'), color('#87dcd7'), color('#e2ff6b')],
    [color('#ff2e7f'), color('#9421ff'), color('#ff8e48'), color('#9df27b'), color('#ffe65a')],
    [color('#d123d0'), color('#ff528b'), color('#015bf0'), color('#45fbc0'), color('#fe3a48')],
    [color('#54bcbf'), color('#f6df43'), color('#e85d9e'), color('#e49cb2'), color('#ffffff')],
    [color('#000000'), color('#fec3b5'), color('#01b9c3'), color('#885dd3'), color('#ffe44f')],
    [color('#ec6da0'), color('#00b2a4'), color('#f2bb20'), color('#e9031d'), color('#ffffff')],
    [color('#000000'), color('#feaab9'), color('#3ecabf'), color('#fcde58'), color('#fe8364')],
    [color('#000000'), color('#ff4aa9'), color('#21adba'), color('#ffcb7b'), color('#ff80b7')],
    [color('#44d0ff'), color('#b8f363'), color('#f91794'), color('#f4ad41'), color('#78289b')],
    [color('#36e8da'), color('#f4f10e'), color('#e78f4f'), color('#f080e4'), color('#ffffff')],
    [color('#ff44ad'), color('#feca16'), color('#8614c1'), color('#34e1db'), color('#00bed4')],
    [color('#ff7785'), color('#000000'), color('#44e5d5'), color('#fdf9af'), color('#ffbcc3')],
    [color('#d1ef1f'), color('#000000'), color('#28cbc8'), color('#ee56ad'), color('#b28dec')],
    [color('#ffed0c'), color('#000000'), color('#036089'), color('#e30994'), color('#a6be50')],
    [color('#02ffc9'), color('#000000'), color('#ff00a4'), color('#f0ea60'), color('#1701d2')],
  ],
  [ //BASED
    [color('#7eb8da'), color('#92ddea'), color('#ffa5d8'), color('#be9ddf'), color('#9579d1')]
  ]
];
}
function draw(){
  frameShape = "";
  type = "based";
  bgType="";
  bars_used=false;
  sprinkles_used=false;
  floatingShapeType="";
  centeredShapeType="";
  framingShapeType="";
  framingShape_failsafe = 0;
  checkerEven = false;
  two_straight = false;
  worms_used = false;
  
  let chars = "abcdef1234567890";
   hash = "0x";
  while(hash.length <64) hash = hash + chars.charAt(Math.floor(random(0,16)));
  console.log("Generated Seed:" + hash);
  let testhash1 = "0xf553bed38bd649dba715cc70201624463a28a1baeff19cfd03b2d39f20a598";
  let testhash2 = "0xb400272b2ec7fc76a0ec390393b401298ccd78f24212b135a6e96203267056";
  let testhash3 = "0x7c964593c7d69ba14aee67ea780ecee59d9ee7cd69c833e02608facb64560f";
  let testhash4 = "0x6a8e7e4a2eeba9d6aee2bc75f1172d02adaa051805728d4e97d5baceefbf0a"; //notebook bg
  let testhash5 = "0x0a011c727ee0455047a573987a7c8fd82655abd6bf9241cf3dc8fba1ce0803"; //light notebook ellipse
  let testhash6 = "0x7b892b356738095b266887c131935f7dd8f132bc8d3a71f9affd178cb8c548"; //gradient flourish test
  let testhash7 = "0x6c646f816692db533cf00dae1e12c4c46bd68efaabaf296ad738b9cc2b8901"; //gradient ellipse + dots circle
  let testhash8 = "0x8a50709af0d74174f86d04425fc3d483e6c5263998877c41766b8a3a608b6a"; //no flourish???
  let testhash9 = "0x141b7cd4f6fc09488c67cfe8b6bac179ec1c8e6f94a16082c2059968ea5741"; //splinter
  let testhasha = "0x141b7cd4f6fc09488c672de8b6bac179ec1c8e6f94a16082c2059968ea5741"; //splinter
	// hash = testhasha;
	randomSeed(hash);

  //global variable access for production
  //hash = tokenData.hash

type=xx(2)==69?"based":xx(2)<200?"light":"dark";

let palette_select = Math.floor(xx(4)/10); //out of 255, divides by 10 and rounds to get 1 of 25 palettes
if(palette_select == 0){palette_select = 25;}
let palette = palettes[2][0];
if(type=="light") palette = palettes[0][palette_select];
if(type=="dark") palette = palettes[1][palette_select];
//palette = palettes[1][22];
console.log("Palette Selected: ",type,palette_select);

var sortCols = [0,0,0,0,0];
//sortCols[0] = x(6); clrs[0] = 0;
for(var i = 0; i < 5; i++){
  let j = i -1;
  while(j >= 0 && xx(6+2*i) < sortCols[j]){
    sortCols[j+1] = sortCols[j]; clrs[j+1] = clrs[j];
    j--;
  }
  sortCols[j+1] = xx(6+2*i); clrs[j+1] = palette[i];

}

let randomOffset = xx(16);
if (randomOffset < 63){ randomOffset *=-5;}
else if(randomOffset < 126){ randomOffset *=2;}
else if(randomOffset < 189){ randomOffset *=-3; randomOffset/=2;}
else { randomOffset /=2;}
let randomOffset2 = xx(26) < 165 ? 0-xx(26):xx(26);
let randomOffset3 = xx(46) < 165 ? 0-xx(46):xx(46);
let randomOffset4 = xx(48) % 2 == 0 ? 0-xx(48):xx(48);
let randomOffset5 = xx(52) % 2 == 0 ? 0-xx(52):xx(52);
  console.log("randomOffset:",randomOffset,"randomOffset2:", randomOffset2,"randomOffset3:", randomOffset3,"randomOffset4:", randomOffset4,"randomOffset5:", randomOffset5);
let bgSelect = xx(3);
  

if(type == "light"){ // LIGHT BACKGROUNDS -----------------------------------
  if (bgSelect < 6){background(255,255,255);}
  if (bgSelect > 5 && bgSelect < 50){dotsbg();}
  if (bgSelect > 49 && bgSelect < 100){ gridbg();}
  if (bgSelect > 99 && bgSelect < 126){ notebookbg(width);}
  if (bgSelect >125 && bgSelect <160){ grid3Dbg();}
  if (bgSelect > 159 && bgSelect < 180){ horizonbg();}
  if (bgSelect > 179 && bgSelect < 190){sprinklesbg();} //added for p5js
  if (bgSelect > 189 && bgSelect < 200){sprinklesGradientbg();} //added for p5js
  if (bgSelect > 199 && bgSelect <226){wormsbg();} //added for p5js
  if (bgSelect > 225){ fakegridbg();}
} //END LIGHT BACKGROUNDS
if(type == "dark"){ // DARK BACKGROUNDS -----------------------------------
  if (bgSelect < 8){dotsbg();}
  if (bgSelect >7 && bgSelect < 17){background(00,00,00);} 
  if (bgSelect > 16 && bgSelect < 26){starscapebg(randomOffset4,randomOffset5);}
  if (bgSelect > 25 && bgSelect < 100){gridbg();}
  if (bgSelect >99 && bgSelect <126){ grid3Dbg();}
  if (bgSelect > 125 && bgSelect < 176){ horizonbg();}
  if (bgSelect > 175 && bgSelect <227){ notebookbg();}
  if (bgSelect > 226){ fakegridbg();}
} // END DARK BACKGROUNDS
 if (type =="based"){
   bgType = "based";
   let x_lerp =0; let y_lerp = 0;
   let w_lerp = 1024+(bgSelect < 128 ? 4 : 0);
   let h_lerp = 1024;
   let based_bg1 = bgSelect < 128 ? color('#00b0d7') : color('#ffb7af');
   let based_bg2 = bgSelect < 128 ? color('#ffb7af') : color('#00b0d7');
   let basedGradient;
   basedGradient = createGraphics(1024,1024);
   for (var i = y_lerp; i <= y_lerp+h_lerp; i++) {
      let inter = map(i, y_lerp, y_lerp+h_lerp, 0, 1);
      let c = lerpColor(based_bg1, based_bg2, inter);
      basedGradient.strokeWeight(2);
      basedGradient.stroke(c);
      basedGradient.line(x_lerp-2, i, x_lerp+w_lerp, i);
    }
  image(basedGradient,0,0);
 } 
console.log("Background: ", type," ", bgSelect," ", bgType," Palette:", palette_select);
let framingShape = xx(22)+framingShape_failsafe;
  console.log("FramingShape#:",framingShape);
if (framingShape > -1 && framingShape < 8 && bgType != "notebook"){ //notebook framing ellipse
  console.log("FramingShape: notebook framing ellipse");
  if (type == "based"){blendMode(ADD);} //avoids bw contrast for based
  frameShape = "ellipse"; framingShapeType = "notebook";
  let notebookFrameEllipse;
  let notebookFrameEllipseMask;
  notebookFrameEllipse = createGraphics(1024,1024);
  let f = 0.02;
  'use strict'
  let grid = []
  let notebook = []
  var seed=floor(xx(18)) // GENERATES RANDOM SEED FOR NOISE
  noiseSeed(seed) // SET THIS TO USE HASH IN FINAL VERSION
  notebook[0] =  color(0, 0,0);
  notebook[1] = color(255,255,255);
  let ratio = .5;
  if (type == "light") { ratio = .39 }
  else {ratio = .58 }
  notebookFrameEllipse.noStroke();
  for (var y=0; y<1024; y++) {
    for (var x = 0; x < 1024; x++) {
      let i = noise(x*f,y*f) < ratio ? 1 : 0;
      grid.push({x,y,i});
    }
  }
  grid.forEach((g, index) => {
    notebookFrameEllipse.fill(notebook[g.i])
    notebookFrameEllipse.rect(g.x, g.y, 1, 1);
  });
   notebookFrameEllipseMask = createGraphics(1024,1024);
   notebookFrameEllipseMask.noStroke();
   notebookFrameEllipseMask.fill(255);
   let frameOffset = randomOffset/3;
   let frameOffset2 = randomOffset2/3;
   notebookFrameEllipseMask.ellipse(512+frameOffset,512+frameOffset2,1024-456-frameOffset,1024-456-frameOffset);
   applyMask(notebookFrameEllipse, notebookFrameEllipseMask);
   noFill();stroke(clrs[4]);strokeWeight(16);
   ellipse(512+frameOffset,512+frameOffset2,1024-456-frameOffset,1024-456-frameOffset);
   blendMode(BLEND);
}
if (framingShape > 7 && framingShape < 16){ //default framing ellipse
  frameShape = "ellipse";
  noFill(); strokeWeight(16);
  stroke(nonBGColor(4));
  let frameOffset = xBetween(19,-100,100)
  let frameOffset2 = xBetween(20,-100,100)
	let diameter = xBetween(21, 550, 800)
  ellipse(512+frameOffset,512+frameOffset2,diameter,diameter);
}
if (framingShape > 15 && framingShape < 26){ //default framing square
  frameShape = "square";
  noFill(); strokeWeight(16); stroke(nonBGColor(4));
  let frameOffset = Math.floor(randomOffset/3);
  let frameOffset2 = Math.floor(randomOffset2/3);
  square(256+frameOffset,256+frameOffset2,1024/2-frameOffset);
}
if (framingShape > 25 && framingShape < 41 ){ //default framing triangle
  frameShape = "default_triangle";
  noFill();strokeWeight(16);stroke(nonBGColor(4));
  let frameOffset = randomOffset/3;
  let frameOffset2 = randomOffset2/3;
  triangle(128+frameOffset, 768+frameOffset, 768+frameOffset2, 128+frameOffset2, 720+frameOffset, 940+frameOffset);
}
if (framingShape>40 && framingShape <50){ //--------gradient default framing triangle
  frameShape = "gradient_default_triangle";
  let sourceDefaultFramingTriangle;
  let maskDefaultFramingTriangle;
  sourceDefaultFramingTriangle = createGraphics(1024,1024);
  let x_lerp =0;let y_lerp = 0;
  let w_lerp = 1024;let h_lerp = 1024;
  for (var i = y_lerp; i <= y_lerp+h_lerp; i++) {
      let inter = map(i, y_lerp, y_lerp+h_lerp, 0, 1);
     let c = lerpColor(clrs[0], clrs[1], inter);
      sourceDefaultFramingTriangle.strokeWeight(2);
      sourceDefaultFramingTriangle.stroke(c);
      sourceDefaultFramingTriangle.line(x_lerp, i, x_lerp+w_lerp, i);
    }
    maskDefaultFramingTriangle = createGraphics(1024,1024);
    maskDefaultFramingTriangle.noFill();
    maskDefaultFramingTriangle.strokeWeight(16);
    maskDefaultFramingTriangle.stroke(255);
    let frameOffset = randomOffset/3;
    let frameOffset2 = randomOffset2/3;
    maskDefaultFramingTriangle.triangle(128+frameOffset, 768+frameOffset, 768+frameOffset2, 128+frameOffset2, 720+frameOffset, 940+frameOffset);
    applyMask(sourceDefaultFramingTriangle, maskDefaultFramingTriangle);
}
if (framingShape > 249 && bgType =="grid") framingShape = 50;
if (framingShape>49 && framingShape <75){ //--------gradient flipped framing triangle
  frameShape = "gradient_flipped_triangle";
  let sourceFlippedFramingTriangle;
  let maskFlippedFramingTriangle;
  sourceFlippedFramingTriangle = createGraphics(1024,1024);
  let x_lerp =0;let y_lerp = 0;
  let w_lerp = 1024;let h_lerp = 1024;
  for (var i = y_lerp; i <= y_lerp+h_lerp; i++) {
      let inter = map(i, y_lerp, y_lerp+h_lerp, 0, 1);
      
     let c = lerpColor(clrs[0], clrs[1], inter);
      sourceFlippedFramingTriangle.strokeWeight(2);
      sourceFlippedFramingTriangle.stroke(c);
      sourceFlippedFramingTriangle.line(x_lerp, i, x_lerp+w_lerp, i);
    }
    maskFlippedFramingTriangle = createGraphics(1024,1024);
    maskFlippedFramingTriangle.noFill();
    maskFlippedFramingTriangle.strokeWeight(16);
    maskFlippedFramingTriangle.stroke(255);
    let frameOffset = randomOffset/3;
    let frameOffset2 = randomOffset2/3;
    maskFlippedFramingTriangle.triangle(900-frameOffset,738+frameOffset,400+frameOffset,128+frameOffset2,256+frameOffset,938+frameOffset);
    applyMask(sourceFlippedFramingTriangle, maskFlippedFramingTriangle);
}
if (framingShape > 74 &&  framingShape < 120){ //flipped framing triangle
  frameShape = "flipped_triangle";
  noFill();strokeWeight(16);stroke(clrs[4]);
  if (type == "dark" && clrs[4] == color('#000000'))stroke(clrs[3]);
  if (type == "light" && clrs[4] == color('#FFFFFF'))stroke(clrs[3]);
  let frameOffset = randomOffset/3;
  let frameOffset2 = randomOffset2/3;
  triangle(900-frameOffset,738+frameOffset,400+frameOffset,128+frameOffset2,256+frameOffset,938+frameOffset);
}
if (framingShape > 119 && framingShape < 150){ //gradient framing ellipse
  frameShape = "gradientellipse";
  let sourceGradientFrameEllipse;
  let maskGradientFrameEllipse;
  sourceGradientFrameEllipse = createGraphics(1024,1024);
  let x_lerp =0;let y_lerp = 0;
  let w_lerp = 1024;let h_lerp = 1024; 
  for (var i = y_lerp; i <= y_lerp+h_lerp; i++) {
      let inter = map(i, y_lerp, y_lerp+h_lerp, 0, 1);
     let c = lerpColor(clrs[3], clrs[4], inter);
      sourceGradientFrameEllipse.strokeWeight(2);
      sourceGradientFrameEllipse.stroke(c);
      sourceGradientFrameEllipse.line(i, x_lerp,i,x_lerp+w_lerp);
    }
  maskGradientFrameEllipse = createGraphics(1024,1024);
  maskGradientFrameEllipse.noFill();
  maskGradientFrameEllipse.strokeWeight(16);
  maskGradientFrameEllipse.stroke(255);
  let frameOffset = randomOffset/3;
  let frameOffset2 = randomOffset2/3;
  maskGradientFrameEllipse.ellipse(512+frameOffset,512+frameOffset2,1024-456-frameOffset,1024-456-frameOffset);
  applyMask(sourceGradientFrameEllipse, maskGradientFrameEllipse);
}
if (framingShape > 149 && framingShape < 225 ){//inverse flipped framing triangle
  frameShape = "inverse_flipped_triangle";
  noFill();strokeWeight(16);stroke(nonBGColor(4));
  let frameOffset = randomOffset/3;
  let frameOffset2 = randomOffset2/3;
  triangle(900-frameOffset,256+frameOffset,600-frameOffset,800+frameOffset2,128+frameOffset,256+frameOffset2);
}
if (framingShape > 224 && framingShape < 250){ //default flipped framing triangle
  frameShape = "default_flipped_triangle";
  noFill();strokeWeight(16);stroke(nonBGColor(4));
  let frameOffset = randomOffset/3;
  let frameOffset2 = randomOffset2/3;
  triangle(128+frameOffset, 128+frameOffset2, 512+frameOffset2, 940-frameOffset2, 720+frameOffset, 128+frameOffset);
}
if (framingShape > 249 && bgType !="grid"){ //diagonal grid flipped framing triangle
  if (type == "based"){blendMode(ADD);} //avoids bw contrast for based
  frameShape = "gridTriangle";
  grid_used = true;
  let  sourceDiagGrid;
  let maskDiagGrid;
  let diagLineCounter = (-1)*1024;
  sourceDiagGrid = createGraphics(1024,1024);
  if (type == "light"){
    sourceDiagGrid.background(255);
    sourceDiagGrid.stroke(0);
  }
  if (type == "dark"){
    sourceDiagGrid.background(0);
    sourceDiagGrid.stroke(255);
  }
  while (diagLineCounter < 1024){
      sourceDiagGrid.line(0,0+diagLineCounter,1024,1024+diagLineCounter);
      sourceDiagGrid.line(1024,0+diagLineCounter,0,1024+diagLineCounter);
      diagLineCounter = diagLineCounter +64;
  }
  maskDiagGrid = createGraphics(1024,1024);
  let frameOffset = randomOffset/3;
  let frameOffset2 = randomOffset2/3;
  maskDiagGrid.triangle(128+frameOffset, 128+frameOffset2, 512+frameOffset2, 940-frameOffset2, 720+frameOffset, 128+frameOffset);
  applyMask(sourceDiagGrid, maskDiagGrid);
  noFill();strokeWeight(16);stroke(nonBGColor(4));
  triangle(128+frameOffset, 128+frameOffset2, 512+frameOffset2, 940-frameOffset2, 720+frameOffset, 128+frameOffset); //draws stroke over the edge of the grid triangle
  blendMode(BLEND);
}

let centeredShape = xx(6);
let xPos = 512; let yPos = 512;

if (centeredShape < 24 && frameShape != "square"){ // rectangle
  if (frameShape == "square")centeredShape = (28); //unhexes a different block for the frameshape if there's a conflict
  console.log("CenteredShape: Rectangle ", centeredShape);
  noStroke();fill(clrs[0]);
  let rect_mover = randomOffset/2;
  let rect_mover2 = randomOffset2/2;
  let rect_size = 0;
  if (abs(randomOffset2) < 100)rect_size = 2*(abs(randomOffset2));
  if (abs(randomOffset2) > 99)rect_size = abs(randomOffset2)/2;
  rect(480+rect_mover,220+rect_mover2,rect_size+160,rect_size*2+320);
}
if (centeredShape >23 && centeredShape < 65 && frameShape != "ellipse" && bgType != "horizon"){ // retro sun
  if (type == "based"){blendMode(ADD);} //avoids bw contrast for based
  console.log("CenteredShape: Retro Sun ", centeredShape);
  centeredShapeType = "horizon";
  let SourceRetroSun;
  let MaskRetroSun;
  SourceRetroSun = createGraphics(1024,1024);
  SourceRetroSun.background(0,0,0);
  let horizon = 0;
  SourceRetroSun.strokeWeight(1);
  while (horizon < 1024 / 3) {
    SourceRetroSun.stroke(diffColor(globalBlack, 0)); 
    SourceRetroSun.strokeWeight(horizon/1.5);
    SourceRetroSun.line(0,400+15*horizon,1024,400+15*horizon);
    horizon = horizon+1;
  }
  MaskRetroSun = createGraphics(1024,1024);
  if (centeredShape < 10){centeredShape = centeredShape + 11;}
  if (centeredShape >100){centeredShape = centeredShape - 30;}
  MaskRetroSun.ellipse(xPos,yPos,centeredShape*7+(centeredShape),centeredShape*7+(centeredShape));
  applyMask(SourceRetroSun, MaskRetroSun);
  blendMode(BLEND);
}
if (centeredShape > 64 && centeredShape < 128 && frameShape != "ellipse"){ // solid ellipse
  console.log("CenteredShape: ", centeredShape);
  centeredShapeType = "solid";noStroke();
  let centEllipseScaler = centeredShape;
  fill(clrs[0]);
  if (centEllipseScaler < 10)centEllipseScaler = centEllipseScaler + 11;
  if (centEllipseScaler >100)centEllipseScaler = centEllipseScaler - 30;
  ellipse(512,512,centEllipseScaler*7+(centEllipseScaler/2),centEllipseScaler*7+(centEllipseScaler/3));
}
if (centeredShape > 127 && centeredShape < 226){ //triangle centered shape
  console.log("CenteredShape: triangle");
  centeredShapeType = "solid";
  if (centeredShapeType == "solid"){
    noStroke();
    fill(clrs[0]);
    triangle(1024/6+(centeredShape/5),1024/6+(centeredShape/5),1024/2+(centeredShape/5),1024/2+(centeredShape/5),1024/3+(centeredShape/5),1024/1.5+(centeredShape/5));
  }
}
if (centeredShape > 224 && frameShape != "square" && type == "dark"){ // gradient rectangle
  if (frameShape == "square")centeredShape = xx(28); //unhexes a different block for the frameshape if there's a conflict
  let sourceGradientRect;
  let maskGradientRect;
  let rect_mover = Math.floor(randomOffset/2);
  let rect_mover2 = Math.floor(randomOffset2/2);
  let rect_size = 0;
  sourceGradientRect = createGraphics(1024,1024);
  let y_lerp = 0;
  let gradientShapePosX = int(random(228,724));
  let gradientShapePosY = int(random(128,724));
  let w_lerp = gradientShapePosX+340;
  let h_lerp = gradientShapePosY+340;
  for (var i = (320+rect_mover2); i <= ((320+rect_mover2)+(rect_size*2+320))*2 ; i++) {
      let inter = map(i, y_lerp, y_lerp+h_lerp, 0, 1);
     let c = lerpColor(clrs[2], clrs[0], inter);
      sourceGradientRect.strokeWeight(2);
      sourceGradientRect.stroke(c);
      sourceGradientRect.line(0, i, 1024+w_lerp, i);
  }
  maskGradientRect = createGraphics(1024,1024);
  if (abs(randomOffset2) < 100)rect_size = 2*(abs(randomOffset2));
  if (abs(randomOffset2) > 99)rect_size = abs(randomOffset2)/2;
  maskGradientRect.rect(480+rect_mover,320+rect_mover2,rect_size+160,rect_size*2+320);
  applyMask(sourceGradientRect, maskGradientRect);
}

let floatingShape1 = xx(14);
if (floatingShape1 < 65 && floatingShape1 > 31){ //triangle
     noStroke(); fill(clrs[1]);
     triangle(128+1024/2+randomOffset,1024/2+randomOffset,1024/3,1024/1.5,1024/4+randomOffset,1024/4);
     console.log("FloatingShape1: Triangle");
}
  
if (floatingShape1 < 32 && floatingShape1 > 16){ //strokedTriangle
     strokeWeight(16);fill(clrs[1]);stroke(clrs[3]);
     triangle(128+1024/2+randomOffset,1024/2+randomOffset,1024/3,1024/1.5,1024/4+randomOffset,1024/4);
     console.log("FloatingShape1: StrokedTriangle");
}
if (floatingShape1 < 16){ //strokedTriangle SPLIT TWO-PARTER
     strokeWeight(16);fill(clrs[1]);
     triangle(128+1024/2+randomOffset,1024/2+randomOffset,1024/3,1024/1.5,1024/4+randomOffset,1024/4);
     console.log("FloatingShape1: StrokedTriangle TWO PARTER Part 1");
}
if (floatingShape1 > 64 && floatingShape1 < 230 ){ //standard triangle -  -- GETS CALLED OFTEN
  console.log("Floatingshape1: standard Triangle");
  noStroke();fill(clrs[3]);
  triangle(768+randomOffset/4,420+randomOffset2/2,626+randomOffset2/2,824+randomOffset3/3,400+randomOffset3/3,512+randomOffset/2); //GREAT shape but too consistent
}
if (floatingShape1 > 229 && sprinkles_used == false){ //standard triangle w sprinkles
    console.log("FloatingShape1: sprinkles Standard Triangle");
    sprinkles_used = true;
    let sourceSprinklesTriangle;
    let maskSprinklesTriangle;
    sourceSprinklesTriangle = createGraphics(1024,1024);
    sourceSprinklesTriangle.background(clrs[1]);
    sourceSprinklesTriangle.strokeCap(ROUND);
    sourceSprinklesTriangle.strokeWeight(6);
    sourceSprinklesTriangle.stroke(clrs[3]);
   let sprinkle_column = 0;
   let sprinkle_row = 0;
   let sprinkle_switch = 0;
   while (sprinkle_row < (round(1.1953125*1024))){ //UPDATED V03
     while (sprinkle_column < 1024){     
       sourceSprinklesTriangle.line(-6+sprinkle_row,16+sprinkle_column,4+sprinkle_row,30+sprinkle_column);
       sourceSprinklesTriangle.line(-8+sprinkle_row,48+sprinkle_column,8+sprinkle_row,48+sprinkle_column);
       sourceSprinklesTriangle.line(0+sprinkle_row,72+sprinkle_column,0+sprinkle_row,88+sprinkle_column);
       sourceSprinklesTriangle.line(4+sprinkle_row,108+sprinkle_column,-6+sprinkle_row,124+sprinkle_column);
       sourceSprinklesTriangle.line(-8+sprinkle_row,148+sprinkle_column,8+sprinkle_row,148+sprinkle_column);
       sprinkle_column = sprinkle_column+158;
     }
     sprinkle_switch ++;
     sprinkle_row=sprinkle_row+32;
     if (sprinkle_switch % 2 == 0){sprinkle_column = 0;}
     if (sprinkle_switch % 2 != 0){sprinkle_column = -79;}   
     if (sprinkle_switch % 3 == 0){sprinkle_column = -128;}   
    }
    maskSprinklesTriangle = createGraphics(1024,1024);
    maskSprinklesTriangle.noStroke();
    maskSprinklesTriangle.fill(255);
    maskSprinklesTriangle.triangle(768+randomOffset/4,420+randomOffset2/2,626+randomOffset2/2,824+randomOffset/3,400+randomOffset/3,512+randomOffset/2);
    applyMask(sourceSprinklesTriangle, maskSprinklesTriangle);
}
if (floatingShape1 > 64 && floatingShape1 < 80 && bgType != "notebook" && framingShapeType != "notebook"){ //LIGHT notebook ellipse
  console.log("FloatingShape1: light notebook ellipse");
  let sourceNotebook;let maskNotebook;
  sourceNotebook = createGraphics(1024,1024);
 'use strict'
  let grid = []
  let notebook = []
  let f= 0.02;
  let seed=floor(xx(17)) // GENERATES RANDOM SEED FOR NOISE
  noiseSeed(seed) // SET THIS TO USE HASH IN FINAL VERSION
  notebook[0] =  color(0, 0,0);
  notebook[1] = color(255,255,255);
  let ratio = .5;
  if (type == "light") { ratio = .39 }
  else {ratio = .58 }
  for (let y = 0; y < 1024; y++) {
    for (let x = 0; x <= 1024; x++) {
      let i = noise(x*f,y*f) < ratio ? 1 : 0;
      grid.push({x,y,i});
    }
  }
  sourceNotebook.noStroke();
  grid.forEach((g, index) => {
    sourceNotebook.fill(notebook[g.i]) 
    sourceNotebook.rect(g.x, g.y, 1, 1);
  });
   maskNotebook = createGraphics(1024,1024);
   maskNotebook.noStroke();
   maskNotebook.fill(255);
   let notebookellipse_failsafe = 0;
   let notebookellipseX_failsafe = 0;
   let notebookellipseSize_failsafe = 0;
   if (abs(randomOffset*2) < 256)notebookellipse_failsafe = 480;
   if (abs(randomOffset2*2) > 400)notebookellipseSize_failsafe = -100;
   if (abs(randomOffset2*2) < 65)notebookellipseSize_failsafe = 256;
   if (abs(randomOffset*3)<256)notebookellipseX_failsafe = 256;
   maskNotebook.ellipse(abs(randomOffset*3)+notebookellipseX_failsafe,abs(randomOffset*2)+notebookellipse_failsafe,abs(randomOffset2*2)+notebookellipseSize_failsafe,abs(randomOffset2*2)+notebookellipseSize_failsafe);
   if (type == "based"){blendMode(ADD);}
   console.log("about to check width then mask");
  console.log("width is: " + width);
  applyMask(sourceNotebook, maskNotebook);
   console.log("image placement successful");
   blendMode(BLEND);
}
if (floatingShape1 > 79 && floatingShape1 < 100){ //Masked circles filled w Sprinkles
  console.log("FloatingShape1: Sprinkles Circle");
  ss_circle = true;
  sprinkles_used = true;
  let sourceSprinksCircle;
  let maskSprinksCircle;
  //create source
  sourceSprinksCircle = createGraphics(1024,1024);
  sourceSprinksCircle.background(clrs[2]);
  sourceSprinksCircle.strokeCap(ROUND);
  sourceSprinksCircle.strokeWeight(6);
  sourceSprinksCircle.stroke(clrs[3]);
   let sprinkle_column = 0; let sprinkle_row = 0; let sprinkle_switch = 0;
   while (sprinkle_row < round(1024*1.1953125)){ //UPDATED v03
   while (sprinkle_column < 1024){     
   sourceSprinksCircle.line(-6+sprinkle_row,16+sprinkle_column,4+sprinkle_row,30+sprinkle_column);
   sourceSprinksCircle.line(-8+sprinkle_row,48+sprinkle_column,8+sprinkle_row,48+sprinkle_column);
   sourceSprinksCircle.line(0+sprinkle_row,72+sprinkle_column,0+sprinkle_row,88+sprinkle_column);
   sourceSprinksCircle.line(4+sprinkle_row,108+sprinkle_column,-6+sprinkle_row,124+sprinkle_column);
   sourceSprinksCircle.line(-8+sprinkle_row,148+sprinkle_column,8+sprinkle_row,148+sprinkle_column);
   sprinkle_column = sprinkle_column+158;
   }
   sprinkle_switch ++;
   sprinkle_row=sprinkle_row+32;
   if (sprinkle_switch % 2 == 0){sprinkle_column = 0;}
   if (sprinkle_switch % 2 != 0){sprinkle_column = -79;}   
   if (sprinkle_switch % 3 == 0){sprinkle_column = -128;}  
}
 maskSprinksCircle = createGraphics(1024,1024);
 maskSprinksCircle.ellipse(512+randomOffset,512+randomOffset,floatingShape1*2,floatingShape1*2);
 applyMask(sourceSprinksCircle, maskSprinksCircle);
}
if (floatingShape1 >69 && floatingShape1 <150 && bgType != "horizon" && bgType != "grid" && bgType != "fakegrid" && bgType != "3Dgrid" && centeredShapeType != "horizon" && bars_used == false && grid_used == false){ //----------floatingGrid
bars_used = true;
console.log("FloatingShape1: floating Grid");
let gridSize = xx(42);
gridSize = gridSize*2;
if (gridSize < 65 ){gridSize = gridSize + 64;}
if (gridSize > 500){gridSize = Math.floor(gridSize/2);}
let floatingGridCounter = 32;
let floatingGridCounterH = 32;
let floatingGrid_height_failsafe = 0;
if (340+randomOffset2+floatingGridCounterH > 512 && gridSize > 200){floatingGrid_height_failsafe = -200;} //height failsafe
noFill();
strokeWeight(2);
if (type == "light"){stroke(0);}
if (type == "dark"){stroke(255);}
while (floatingGridCounterH < gridSize){
  while (floatingGridCounter < gridSize){
    
    square(300+randomOffset3+floatingGridCounter,340+randomOffset2+floatingGridCounterH+floatingGrid_height_failsafe,32);
    floatingGridCounter = floatingGridCounter + 32;
      }
      floatingGridCounterH = floatingGridCounterH+32;
      floatingGridCounter = 32;
  }
}
if (floatingShape1 >149 && floatingShape1 <175 && bgType != "horizon" && bgType != "grid" && bgType != "fakegrid" && bgType != "3Dgrid" && centeredShapeType != "horizon" && bars_used == false){ //----------floatingCheckers
if (type == "based"){blendMode(ADD);} //makes based types not have the black white contrast
bars_used = true;
console.log("FloatingShape1: checker grid");
let gridSize = xx(40)*2;
gridSize = gridSize*2;
if (gridSize < 65 ){ gridSize = gridSize + 64;}
if (gridSize > 500){ gridSize = Math.floor(gridSize/2);}
let floatingGridCounter = 32; let floatingGridCounterH = 32;
let floatingGrid_height_failsafe = 0;
if (340+randomOffset2+floatingGridCounterH > 512 && gridSize > 200){floatingGrid_height_failsafe = -200;} //height failsafe
let row_alternator = 0;let evenTest = 32;
let evenTestCounter=0;
noFill(); strokeWeight(2);
if (type == "light"){stroke(0);}
if (type == "dark"){stroke(255);}
while (evenTest < gridSize){evenTest = evenTest +32; evenTestCounter++;}
if (evenTest >= gridSize){ //checks number of iterations of demo loop to see if even or odd
  if (evenTestCounter %2 == 0){checkerEven = true;}
  if (evenTestCounter %2 != 0){checkerEven = false;}
}
console.log("Checker Even: ",checkerEven);
while (floatingGridCounterH < gridSize){
  while (floatingGridCounter < gridSize){
    if ((floatingGridCounter + row_alternator) % 2 == 0){
    fill(0);
    }
    if ((floatingGridCounter + row_alternator) % 2 != 0){fill(255);} //checker
    square(300+randomOffset3+floatingGridCounter,340+randomOffset2+floatingGridCounterH+floatingGrid_height_failsafe,32);
    if ((floatingGridCounter+32 >= gridSize) && checkerEven == false){
      row_alternator++; //extra adder for the last checker in an odd numbered gridsize
    }
     row_alternator++;   
    floatingGridCounter = floatingGridCounter + 32;
      }

      if (floatingGridCounterH + 32 <= gridSize && checkerEven == true){ //worked for EVENS
        row_alternator++;
      }
      if (checkerEven == false){
        row_alternator++;
      }
      floatingGridCounterH = floatingGridCounterH+32;
      floatingGridCounter = 32;   
  }
  blendMode(BLEND); //undoes the possiblity of staying based (add mode)
}
if (floatingShape1 > 174 && floatingShape1 <200 && bgType != "horizon" && centeredShapeType != "horizon"){ //-------venetian circle lines circle
  console.log("FloatingShape1: venetian circle");
  bars_used = true; stroke(nonBGColor(2));
  strokeWeight(4);strokeCap(ROUND);
  let radius = xx(30);
  if (radius < 100){radius += 76;}
  if (radius >200){radius -= 55;}
  let lineH = radius*(-1);
  let firstlastline = 16;
  let venetian_circle_failsafe = 0;
  while (lineH < radius){  
   let chord = pow(radius,2)-pow(lineH,2);
    if(lineH +32 >= radius){
     firstlastline = (-4);
   }
   if (randomOffset < -100){
     venetian_circle_failsafe = 250;
   }
     
   line(412+randomOffset2,356+lineH+randomOffset+venetian_circle_failsafe,412+firstlastline+sqrt(chord)+randomOffset2,356+lineH+randomOffset+venetian_circle_failsafe);
   line(412+randomOffset2,356+lineH+randomOffset+venetian_circle_failsafe,412-firstlastline-sqrt(chord)+randomOffset2,356+lineH+randomOffset+venetian_circle_failsafe);
   lineH = lineH+16;
   firstlastline = 0;
  }
}
if (floatingShape1 >99 && floatingShape1 < 125){ //----------Floating Arcs
  strokeWeight(32);noFill();stroke(nonBGColor(2));strokeCap(SQUARE);
  let arcBegin = radians(abs(randomOffset4)+10);
  let arcEnd = radians(abs(randomOffset5)+10);
  arcBegin = arcBegin/4;
  arcEnd = arcEnd*2;
  if (arcEnd - arcBegin < radians(50)){
    arcEnd = arcEnd*4;
  }
  if (arcEnd - arcBegin > radians(330)){
    arcEnd = arcEnd/3;
  }
  if (randomOffset4 > 125){
    arcBegin = arcBegin + radians(180);
    arcEnd = arcEnd + radians(180);
  }
  let arcSize = abs(randomOffset4)+100;
  arc(512,512,arcSize,arcSize,arcBegin,arcEnd);
}

 if (floatingShape1 > 124 && floatingShape1 < 150 && bars_used == false){ //---------- Masked circles filled w worms
if (type == "based"){blendMode(ADD);} //avoids black/white contrast for based comps
console.log("FloatingShape1: Worms Circle");
  worms_used = true;
  let sourceWormsCircle; let maskWormsCircle;
  sourceWormsCircle = createGraphics(1024,1024);
  sourceWormsCircle.background(255);
  sourceWormsCircle.noFill();
  sourceWormsCircle.strokeCap(ROUND);
  sourceWormsCircle.strokeWeight(5);
  sourceWormsCircle.stroke(0);
   let worm_column = 0;
   let worm_row = 0;
   let worm_switch = 0;
   let bezX1 = 16;// 6 default
   let bezX2 = 4;//4 default
   let bezY1 = 32; // 24 default
   while (worm_row < 1224){
     while (worm_column < 1024){     
      sourceWormsCircle.beginShape();
      sourceWormsCircle.curveVertex(int(random(0,12)-bezX1)+worm_row,int(random(0,24))-bezY1+worm_column);
      sourceWormsCircle.curveVertex(int(random(0,24))+worm_row,int(random(0,24))+worm_column);
      sourceWormsCircle.curveVertex(int(random(0,26))+worm_row,int(random(0,24))+worm_column);
      sourceWormsCircle.curveVertex(int(random(0,32))+worm_row,int(random(0,24))+worm_column);
      sourceWormsCircle.curveVertex(int(random(0,36))+bezX2+worm_row,int(random(0,24))+bezY1+worm_column);
      sourceWormsCircle.endShape();
      worm_column = worm_column+24;
     } 
     worm_column = worm_column+158;
   worm_switch ++;
   worm_row=worm_row+32;
   if (worm_switch % 2 == 0){worm_column = 0;}
   if (worm_switch % 2 != 0){worm_column = -79;}   
   if (worm_switch % 3 == 0){worm_column = -128;}
  } 
 maskWormsCircle = createGraphics(1024,1024);
 maskWormsCircle.ellipse(512+randomOffset,512+randomOffset,floatingShape1*2,floatingShape1*2);
 applyMask(sourceWormsCircle,maskWormsCircle);
 blendMode(BLEND);
}  
if (floatingShape1 > 200 && floatingShape1 < 241 && bgType != "dots"){ // Masked circles filled with dots (alpha not possible)
  console.log("FloatingShape1: Dots Circle");
  floatingShapeType = "dots_circle";
  let sourceDotsCircle;
  let maskDotsCircle;
  sourceDotsCircle = createGraphics(1024,1024);
  let dots_circle_counter = 0;
  let dots_height_counter = 0;
  if (type == "light"){sourceDotsCircle.background(255,255,255);} //light white background
  if (type == "dark"){sourceDotsCircle.background(0,0,0);} //dark background
  if (type == "based"){sourceDotsCircle.background(clrs[0]);} //based background
  while (dots_height_counter < 1024){
    while (dots_circle_counter < 1024)
    {
      sourceDotsCircle.noStroke();
      sourceDotsCircle.fill(clrs[1]);
      sourceDotsCircle.ellipse(dots_circle_counter,dots_height_counter,4,4);
      dots_circle_counter = dots_circle_counter + 8;
    }
    dots_height_counter = dots_height_counter +8;
    dots_circle_counter = 0;
  }
 maskDotsCircle = createGraphics(1024,1024);
 maskDotsCircle.ellipse(512+randomOffset,512+randomOffset,floatingShape1,floatingShape1);
  applyMask(sourceDotsCircle, maskDotsCircle);
}
let curveWiggler1 = xx(16);
let curveWiggler2 = xx(18);
let curveWiggler4 = xx(20);
let curveWiggler5 = xx(22);
let curveType = xx(14);
  console.log("curveType#: ", curveType);
if (curveType < 16){ // gradient tertiary flourish
  console.log("flourish gradient tertiary");
  let sourceGradientCurve;
  let maskGradientCurve;
  sourceGradientCurve = createGraphics(1024,1024);
  let x_lerp =0;let y_lerp = 0;
  let w_lerp = 1024;
  let h_lerp = 1024; 
  for (let i = y_lerp; i <= y_lerp+h_lerp; i++) {
      let inter = map(i, y_lerp, y_lerp+h_lerp, 0, 1);
     let c = lerpColor(clrs[0], clrs[1], inter);
      sourceGradientCurve.strokeWeight(2);
      sourceGradientCurve.stroke(c);
      sourceGradientCurve.line(i, x_lerp,i,x_lerp+w_lerp);
    }
  maskGradientCurve = createGraphics(1024,1024);
if (curveWiggler1 > 170){curveWiggler1 = curveWiggler1-100;}
if (curveWiggler2 > 120){curveWiggler2 = curveWiggler2-100;}
if (curveWiggler4 > 170){curveWiggler4 = curveWiggler4-100;}
if (curveWiggler5 > 170){curveWiggler5 = curveWiggler5-100;}
let curveHeightInt = xx(24);
let curveHeightOffset = 0;
let curveOffset = xx(26);
    curveHeightOffset = curveHeightInt;
    curveHeightOffset = curveHeightOffset*(-2);
  if (curveOffset >63 && curveOffset <100){curveOffset = curveOffset*4;}
  if (curveOffset < 64){curveOffset = curveOffset*(-1);}
  if (curveOffset > 100){curveOffset = curveOffset/5;}
  if (curveOffset < 165){curveHeightOffset = curveHeightInt;curveHeightOffset = curveHeightOffset*(-2);}
  maskGradientCurve.noFill();
  maskGradientCurve.strokeWeight(8);
  maskGradientCurve.stroke(255);
  let failsafe_flourish_mover = 0;
  maskGradientCurve.beginShape();
  if ((64+curveOffset*4) < 1){failsafe_flourish_mover = 200;}
  let flourishOffset = - 320;
  if (curveHeightOffset < -300){curveHeightOffset = curveHeightOffset + 300;}
  maskGradientCurve.curveVertex(flourishOffset+120+curveOffset*4+curveWiggler1+failsafe_flourish_mover,256+curveWiggler2+curveOffset+curveHeightOffset);
  maskGradientCurve.curveVertex(flourishOffset+360+curveOffset*4+failsafe_flourish_mover,550+curveWiggler2+curveOffset+curveHeightOffset);
  maskGradientCurve.curveVertex(flourishOffset+480+curveOffset*4+curveWiggler2+failsafe_flourish_mover,256+curveWiggler1+curveWiggler2+curveOffset+curveHeightOffset);
  maskGradientCurve.curveVertex(flourishOffset+520+curveOffset*4+failsafe_flourish_mover,740+curveWiggler4+(curveWiggler2/2)+curveOffset+curveHeightOffset);
  maskGradientCurve.curveVertex(flourishOffset+660+curveOffset*4+curveWiggler1+failsafe_flourish_mover,460+curveWiggler5+curveWiggler2+2*curveOffset+curveHeightOffset);
  maskGradientCurve.curveVertex(flourishOffset+860+curveOffset*4+failsafe_flourish_mover,512+curveWiggler5+4*curveOffset+curveHeightOffset);
  maskGradientCurve.curveVertex(flourishOffset+1060+curveOffset*4+failsafe_flourish_mover,512+curveWiggler1+curveOffset+curveHeightOffset);
  maskGradientCurve.curveVertex(flourishOffset+2400+curveOffset*4+failsafe_flourish_mover,800+curveWiggler4+(curveWiggler2/2)+curveOffset+curveHeightOffset-600);
  maskGradientCurve.endShape();
  applyMask(sourceGradientCurve, maskGradientCurve);
}
if (curveType >15 && curveType < 65){
if (curveWiggler1 > 170){curveWiggler1 = curveWiggler1-100;}
if (curveWiggler2 > 120){curveWiggler2 = curveWiggler2-100;}
if (curveWiggler4 > 170){curveWiggler4 = curveWiggler4-100;}
if (curveWiggler5 > 170){curveWiggler5 = curveWiggler5-100;}
let curveHeightInt = xx(24);
let curveHeightOffset = 0;
let curveOffset = xx(26);
    curveHeightOffset = curveHeightInt;
    curveHeightOffset = curveHeightOffset*(-2);
  if (curveOffset >63 && curveOffset <100){curveOffset = curveOffset*4;}
  if (curveOffset < 64){curveOffset = curveOffset*(-1);}
  if (curveOffset > 100){curveOffset = curveOffset/5;}
  if (curveOffset < 165){
    curveHeightOffset = curveHeightInt;
    curveHeightOffset = curveHeightOffset*(-2);
  }
  noFill();strokeWeight(8);stroke(clrs[2]);
  if (type == "dark" && clrs[2] ==color('#000000')){stroke(clrs[4]);} //low-effort failsafe for black flourishes on dark designs
  let failsafe_flourish_mover = 0;
  beginShape();
  if ((64+curveOffset*4) < 1){failsafe_flourish_mover = 200;}
  let flourishOffset = - 320;
  if (curveHeightOffset < -300){curveHeightOffset = curveHeightOffset + 300;}
  curveVertex(flourishOffset+120+curveOffset*4+curveWiggler1+failsafe_flourish_mover,256+curveWiggler2+curveOffset+curveHeightOffset);
  curveVertex(flourishOffset+360+curveOffset*4+failsafe_flourish_mover,550+curveWiggler2+curveOffset+curveHeightOffset);
  curveVertex(flourishOffset+480+curveOffset*4+curveWiggler2+failsafe_flourish_mover,256+curveWiggler1+curveWiggler2+curveOffset+curveHeightOffset);
  curveVertex(flourishOffset+520+curveOffset*4+failsafe_flourish_mover,740+curveWiggler4+(curveWiggler2/2)+curveOffset+curveHeightOffset);
  curveVertex(flourishOffset+660+curveOffset*4+curveWiggler1+failsafe_flourish_mover,460+curveWiggler5+curveWiggler2+2*curveOffset+curveHeightOffset);
  curveVertex(flourishOffset+860+curveOffset*4+failsafe_flourish_mover,512+curveWiggler5+4*curveOffset+curveHeightOffset);
  curveVertex(flourishOffset+1060+curveOffset*4+failsafe_flourish_mover,512+curveWiggler1+curveOffset+curveHeightOffset);
  curveVertex(flourishOffset+2400+curveOffset*4+failsafe_flourish_mover,800+curveWiggler4+(curveWiggler2/2)+curveOffset+curveHeightOffset-600);
  endShape();
}
if (curveType > 64 && curveType < 128){ //default flourish
let curveOffset = xx(26);
  let curveHeightOffset = 0;
  if (curveOffset >63 && curveOffset <100) {curveOffset = curveOffset*4;}
  if (curveOffset < 64) {curveOffset = curveOffset*(-1);}
  if (curveOffset > 100){ curveOffset = curveOffset/5;}
  if (curveOffset < 165){curveHeightOffset = 0 -xx(24);}
  noFill();strokeWeight(10);stroke(clrs[2]);
  if (type == "dark" && clrs[2] ==color('#000000')){stroke(clrs[4]);} //low-effort failsafe for black flourishes on dark designs
  let failsafe_flourish_mover = 0;
  beginShape();
  if ((64+curveOffset*4) < 1){failsafe_flourish_mover = 200;}
  curveVertex(64+curveOffset*4+failsafe_flourish_mover,320+curveWiggler1+curveOffset+curveHeightOffset);
  curveVertex(128+curveOffset*4+failsafe_flourish_mover,640+curveWiggler4+curveOffset+curveHeightOffset);
  curveVertex(160+curveOffset*4+failsafe_flourish_mover,420+curveWiggler2+curveOffset+curveHeightOffset);
  curveVertex(200+curveOffset*4+failsafe_flourish_mover,600+curveWiggler1+curveOffset+curveHeightOffset);
  curveVertex(260+curveOffset*4+failsafe_flourish_mover,400+curveWiggler5+curveOffset+curveHeightOffset);
  curveVertex(512+curveOffset*4+failsafe_flourish_mover,560+curveWiggler2+curveOffset+curveHeightOffset);
  curveVertex(768+curveOffset*4+failsafe_flourish_mover,128+curveWiggler1+curveOffset+curveHeightOffset);
  endShape();
}
if (curveType > 129 && curveType < 241){ //alt flourish
console.log("flourish alt");
  noFill();
  strokeWeight(10);
  stroke(nonBGColor(2));
  let curveOffset = xx(26);
  if (curveWiggler1 > 170){
  curveWiggler1 = curveWiggler1-100;
}
if (curveWiggler2 > 120){curveWiggler2 = curveWiggler2-100;}
if (curveWiggler4 > 170){curveWiggler4 = curveWiggler4-100;}
if (curveWiggler5 > 170){curveWiggler5 = curveWiggler5-100;}
  let curveHeightOffset = 0;
  if (curveOffset >63 && curveOffset <100){curveOffset = curveOffset*4;}
  if (curveOffset < 64){curveOffset = curveOffset*(-1);}
  if (curveOffset > 100){curveOffset = curveOffset/5;}
  if (curveOffset < 165){curveHeightOffset = xx(24)*-2;}
  noFill();strokeWeight(8);
  let failsafe_flourish_mover = 0;
  beginShape();
  if ((64+curveOffset*4) < 1){failsafe_flourish_mover = 200;}
  curveVertex(1024+curveOffset*4+failsafe_flourish_mover,0+curveWiggler1+curveOffset+curveHeightOffset);
  curveVertex(120+curveOffset*4+curveWiggler1+failsafe_flourish_mover,450+curveWiggler2+curveOffset+curveHeightOffset);
  curveVertex(640+curveOffset*4+failsafe_flourish_mover,550+curveWiggler2+curveOffset+curveHeightOffset);
  curveVertex(200+curveOffset*4+curveWiggler2+failsafe_flourish_mover,650+curveWiggler1+curveWiggler2+curveOffset+curveHeightOffset);
  curveVertex(528+curveOffset*4+failsafe_flourish_mover,740+curveWiggler4+(curveWiggler2/2)+curveOffset+curveHeightOffset);
  curveVertex(128+curveOffset*4+curveWiggler1+failsafe_flourish_mover,875+curveWiggler5+curveWiggler2+2*curveOffset+curveHeightOffset);
  curveVertex(0+curveOffset*4+failsafe_flourish_mover,912+curveWiggler5+4*curveOffset+curveHeightOffset);
  endShape();
}
if (curveType > 240){ //alt flourish gradient
  let sourceCurve;let maskCurve;
  console.log("flourish alt gradient");
  sourceCurve = createGraphics(1024,1024);
  let x_lerp =0;let y_lerp = 0;
  let w_lerp = 1024;let h_lerp = 1024;
  for (let i = y_lerp; i <= y_lerp+h_lerp; i++) {
      let inter = map(i, y_lerp, y_lerp+h_lerp, 0, 1);
     let c = lerpColor(clrs[0], clrs[1], inter);
      sourceCurve.strokeWeight(2);
      sourceCurve.stroke(c);
      sourceCurve.line(x_lerp, i, x_lerp+w_lerp, i);
    }
  maskCurve = createGraphics(1024,1024);
  maskCurve.noFill();
  maskCurve.strokeWeight(10);
  maskCurve.stroke(255);
  let curveOffset = xx(26);
  if (curveWiggler1 > 170){curveWiggler1 = curveWiggler1-100;}
  if (curveWiggler2 > 120){curveWiggler2 = curveWiggler2-100;}
  if (curveWiggler4 > 170){curveWiggler4 = curveWiggler4-100;}
  if (curveWiggler5 > 170){curveWiggler5 = curveWiggler5-100;}
  let curveHeightOffset = 0;
  if (curveOffset >63 && curveOffset <100){curveOffset = curveOffset*4;}
  if (curveOffset < 64){curveOffset = curveOffset*(-1);}
  if (curveOffset > 100){curveOffset = curveOffset/5;}
  if (curveOffset < 165){curveHeightOffset = xx(24)*(-2);}
  maskCurve.noFill();
  maskCurve.strokeWeight(8);
  let failsafe_flourish_mover = 0;
  maskCurve.beginShape();
  if ((64+curveOffset*4) < 1){failsafe_flourish_mover = 200;}
  maskCurve.curveVertex(1024+curveOffset*4+failsafe_flourish_mover,0+curveWiggler1+curveOffset+curveHeightOffset);
  maskCurve.curveVertex(120+curveOffset*4+curveWiggler1+failsafe_flourish_mover,450+curveWiggler2+curveOffset+curveHeightOffset);
  maskCurve.curveVertex(640+curveOffset*4+failsafe_flourish_mover,550+curveWiggler2+curveOffset+curveHeightOffset);
  maskCurve.curveVertex(200+curveOffset*4+curveWiggler2+failsafe_flourish_mover,650+curveWiggler1+curveWiggler2+curveOffset+curveHeightOffset);
  maskCurve.curveVertex(528+curveOffset*4+failsafe_flourish_mover,740+curveWiggler4+(curveWiggler2/2)+curveOffset+curveHeightOffset);
  maskCurve.curveVertex(128+curveOffset*4+curveWiggler1+failsafe_flourish_mover,875+curveWiggler5+curveWiggler2+2*curveOffset+curveHeightOffset);
  maskCurve.curveVertex(0+curveOffset*4+failsafe_flourish_mover,912+curveWiggler5+4*curveOffset+curveHeightOffset);
  maskCurve.endShape();
  applyMask(sourceCurve,maskCurve );
}
let floatingShape2 = xx(18);
if (floatingShape2 > 128 && floatingShape2 < 156){
  console.log("floating Shape 2 = f2 triangle");
  let bar_triangle;
  bar_triangle = createGraphics(1024,1024);
  let barp = 0;
  bar_triangle.stroke(getColor(2));
  bar_triangle.strokeWeight(10);
  bar_triangle.noFill();
  while (barp <1424){
    bar_triangle.line(-100,-400+barp,3400,800+barp);
    barp+=16;
  }
  let bar_triangle_mask;
  bar_triangle_mask = createGraphics(1024,1024);
  // bar_triangle_mask.triangle(512+randomOffset,512+randomOffset,678-(randomOffset2/4),728,780,420-(randomOffset2/4));
    bar_triangle_mask.triangle(
		512+randomOffset,512+randomOffset,
		xBetween(7,400, 550 ),xBetween(19,400, 550 ),
		xBetween(17,750,950),512 - xBetween(9,100,120));
  applyMask(bar_triangle, bar_triangle_mask);
}
if (floatingShape2 < 7){ // 3 rects ascending
  console.log("FloatingShape2: rects ascending");
  noStroke();fill(clrs[2]);
  rect(512-randomOffset,300-randomOffset/2,(floatingShape2+16),(floatingShape2+16)*8);
  rect(512-randomOffset+64,300-randomOffset/2-64,(floatingShape2+16),(floatingShape2+16)*8);
  rect(512-randomOffset+128,300-randomOffset/2-128,(floatingShape2+16),(floatingShape2+16)*8);
}
if (floatingShape2 > 7 && floatingShape2 < 17 && bars_used == false && bgType != "horizon"){ //lines diamond (actually a triangle now)
  console.log("FloatingShape2: lines triangle");
  strokeCap(ROUND);strokeWeight(4);stroke(nonBGColor(3));
  bars_used = true;
  let halfway_point = false;
  let line_circle_var = Math.floor(floatingShape2/2);
  let line_circle_height = floatingShape2;
  let line_circle_counter = 0;
  let height_adder = 0;
  let line_anchorX = 512 + randomOffset;
  let line_anchorY = 128 + randomOffset2;
  let line_triangle_height_failsafe = 0;
  if ((line_anchorY+(line_circle_counter+height_adder)*line_circle_height) < 128){
    line_triangle_height_failsafe = 256;
  }
  while(line_circle_counter < 16 && line_circle_counter > -1 && height_adder < 16){ 
  if (halfway_point == false){
    line(line_anchorX-line_circle_counter*line_circle_var,line_anchorY+(line_circle_counter+height_adder)*line_circle_height+line_triangle_height_failsafe,line_anchorX+line_circle_counter*line_circle_var,line_anchorY+(line_circle_counter+height_adder)*line_circle_height+line_triangle_height_failsafe);
    line_circle_counter++;
    //console.log("line circle counter", line_circle_counter);
    }
  }
}
if (floatingShape2 > 16 && floatingShape2 < 32){ //3 rects descending
  console.log("FloatingShape2: rects descending");
  noStroke();
  fill(clrs[2]);
  rect(512-randomOffset,300-randomOffset/2,floatingShape2,floatingShape2*8);
  rect(512-randomOffset+64,300-randomOffset/2+64,floatingShape2,floatingShape2*8);
  rect(512-randomOffset+128,300-randomOffset/2+128,floatingShape2,floatingShape2*8);
}

if (floatingShape2 < 50 && type == "dark" && clrs[2] !=color('#000000') && clrs[3] !=color('#000000')){ //gradient triangle
  console.log("FloatingShape: gradient triangle");
  let sourceGradient; let maskGradient;
  sourceGradient = createGraphics(1024,1024);
  let x_lerp =0;let y_lerp = 0;
  let gradientShapePosX = int(random(128,824));
  let gradientShapePosY = int(random(128,824));
  let w_lerp = gradientShapePosX+gradientShapePosX;
  let h_lerp = gradientShapePosY+gradientShapePosY;
  for (let i = y_lerp; i <= y_lerp+h_lerp; i++) {
      let inter = map(i, y_lerp, y_lerp+h_lerp, 0, 1);
     let c = lerpColor(clrs[2], clrs[3], inter);
      sourceGradient.strokeWeight(2);
      sourceGradient.stroke(c);
      sourceGradient.line(x_lerp, i, x_lerp+w_lerp, i);
    }
  maskGradient = createGraphics(1024,1024);
  maskGradient.triangle(gradientShapePosX,gradientShapePosY+128,
    gradientShapePosX-gradientShapePosX*(0.5),
    Math.floor(gradientShapePosY/3)+128,
    gradientShapePosX + gradientShapePosX * (0.25), Math.floor(gradientShapePosY / 2) + 128);
  applyMask(sourceGradient, maskGradient);
}
if (floatingShape2 > 50 && type == "dark" && clrs[2] !=color('#000000') && clrs[3] !=color('#000000')){ //gradient ellipse
  console.log("FloatingShape2: gradient ellipse");
  let sourceGradient;let maskGradient;
  sourceGradient = createGraphics(1024,1024);
  let x_lerp =0;let y_lerp = 0;
  let gradientShapePosX = int(random(228,724));
  let gradientShapePosY = int(random(228,724));
  if (floatingShapeType == "dots_circle" && (512+randomOffset) < 500){gradientShapePosX+=300; }
  if (ss_circle==true && (512+randomOffset) < 500){shift_gEllipse = gradientShapePosX+=300;}
  if (gradientShapePosX > 700){gradientShapePosX-=200;} //edge failsafe
  let w_lerp = gradientShapePosX+340;
  let h_lerp = gradientShapePosY+340;
  for (let i = y_lerp; i <= y_lerp+h_lerp; i++) {
      let inter = map(i, y_lerp, y_lerp+h_lerp, 0, 1);
     let c = lerpColor(clrs[2], clrs[3], inter);
      sourceGradient.strokeWeight(2);
      sourceGradient.stroke(c);
      sourceGradient.line(x_lerp, i, x_lerp+w_lerp, i);
    }
  maskGradient = createGraphics(1024,1024);
  maskGradient.fill('#000000');
	maskGradient.ellipse(gradientShapePosX, gradientShapePosY, 340, 340);
  applyMask(sourceGradient, maskGradient);
}
if (floatingShape2 > 50 && floatingShape2 <75){
	let arc_counter = 0; //from here down is the wavenoodle script
let arcPosx = 0;
let shiftNoodle = -512;
let arcPosy = -712;
let ellipse_constant = 15;
let noodleWaveOffset = random(-128,128);
let noodleWaveOffset2 = random(-100,100);
strokeWeight(6);
strokeCap(SQUARE);
stroke(clrs[4]);
let rotateRAD = (3*PI/4.0);
rotate(rotateRAD); //rotate noodles
while (arc_counter <= (6)){
stroke(clrs[4]);
while (arcPosx < 512){
arc(arcPosx+shiftNoodle+noodleWaveOffset,arcPosy+noodleWaveOffset2,ellipse_constant,ellipse_constant-6,PI,TWO_PI,OPEN);
arc(arcPosx+ellipse_constant+shiftNoodle+noodleWaveOffset,(arcPosy-3)+noodleWaveOffset2,ellipse_constant,ellipse_constant-6,0,PI,OPEN);
arcPosx = arcPosx+2*ellipse_constant;
}
arcPosx = 0;
arcPosy = arcPosy - 15;
arc_counter+=1;
}
rotate(-rotateRAD); //unrotate
}
if (floatingShape2 > 74 && floatingShape2 < 101){
noStroke();
fill(clrs[4]);
let zotOffset = random(-128,128);
let zotOffset2 = random(-100,100);
	beginShape();
  vertex(728+zotOffset,240+zotOffset2); // .
  vertex(800+zotOffset,240+zotOffset2); // -
  vertex(768+zotOffset,320+zotOffset2); // /
  vertex(820+zotOffset,320+zotOffset2); // -
  vertex(778+zotOffset,400+zotOffset2); // /
  vertex(820+zotOffset,400+zotOffset2); // -
  vertex(738+zotOffset,540+zotOffset2); // /
  vertex(768+zotOffset,440+zotOffset2); // \
  vertex(720+zotOffset,440+zotOffset2); // -
  vertex(748+zotOffset,360+zotOffset2); // /
  vertex(680+zotOffset,360+zotOffset2); // -
  vertex(728+zotOffset,240+zotOffset2); // /
  endShape();
}
	
if (floatingShape2 > 100 && floatingShape2 < 128){ //two straight lines
    console.log("FloatingShape2: Two Straight Lines");
    two_straight = true;
    noFill();stroke(clrs[1]);strokeWeight(16);strokeCap(SQUARE);
    let straightLineLength = abs(randomOffset3)*2;
    let shift_right = 0;
    if (straightLineLength > 300){straightLineLength = straightLineLength/3;}
    if (floatingShape2 > 112){shift_right = 256;}
    line(530+randomOffset3+shift_right,360+randomOffset2,straightLineLength+randomOffset3+shift_right,360+randomOffset2);
    line(530+randomOffset3+shift_right,392+randomOffset2,straightLineLength+randomOffset3+shift_right,392+randomOffset2);
    }
if (floatingShape2 > 99 && floatingShape2 < 128 && two_straight == false){ //arcnoodle 
     noFill();stroke(clrs[1]);strokeWeight(32);strokeCap(SQUARE);
     let noodle_failsafe = 0;
     if (randomOffset < 0){noodle_failsafe = 250;}
     let arcPosx = 256+randomOffset+noodle_failsafe;
     let arcPosy = 512+randomOffset;
     arc(arcPosx,arcPosy,128,128,PI,TWO_PI,OPEN);
     arc(arcPosx+128,(arcPosy-1),128,128,0,PI,OPEN);
     arcPosx = arcPosx + 2*128;
     arc(arcPosx,arcPosy,128,128,PI,TWO_PI,OPEN);
     arc(arcPosx+128,(arcPosy-1),128,128,0,PI,OPEN);
     console.log("FloatingShape2: Arcnoodles");
}
if (floatingShape2 > 127 && floatingShape2 < 160 && two_straight == false){ //half arcnoodle  testing
     noFill();stroke(clrs[1]);
     strokeWeight(32);strokeCap(SQUARE);
     let arcPosx = 512+randomOffset;
     let arcPosy = 512+randomOffset;
     arc(arcPosx,arcPosy,64,64,PI,TWO_PI,OPEN);
     arc(arcPosx+64,(arcPosy-1),64,64,0,PI,OPEN);
     arcPosx = arcPosx + 2*64;
     arc(arcPosx,arcPosy,64,64,PI,TWO_PI,OPEN);
     arc(arcPosx+64,(arcPosy-1),64,64,0,PI,OPEN);
     console.log("FloatingShape1: half Arcnoodles");
}
if (floatingShape2 > 160 && floatingShape2 < 180 && two_straight == false){ //double arcnoodle
     noFill();stroke(nonBGColor(1));
     strokeWeight(32);strokeCap(SQUARE);
     let noodle_failsafe = 0;
     if (randomOffset < 0){
         noodle_failsafe = 250;
     }
     let arcPosx = 256+randomOffset+noodle_failsafe;
     let arcPosy = 512+randomOffset;
     arc(arcPosx,arcPosy,128,128,PI,TWO_PI,OPEN);
     arc(arcPosx+128,(arcPosy-1),128,128,0,PI,OPEN);
     arcPosx = arcPosx + 2*128;
     arc(arcPosx,arcPosy,128,128,PI,TWO_PI,OPEN);
     arc(arcPosx+128,(arcPosy-1),128,128,0,PI,OPEN);
     arcPosy = arcPosy + 128;
     arcPosx = 256+randomOffset+noodle_failsafe;
     arc(arcPosx,arcPosy,128,128,PI,TWO_PI,OPEN);
     arc(arcPosx+128,(arcPosy-1),128,128,0,PI,OPEN);
     arcPosx = arcPosx + 2*128;
     arc(arcPosx,arcPosy,128,128,PI,TWO_PI,OPEN);
     arc(arcPosx+128,(arcPosy-1),128,128,0,PI,OPEN);
     console.log("FloatingShape1: Double Arcnoodles");
}
if (floatingShape2 >179 && floatingShape2 < 241){ //quotemarks quad
  noStroke();fill(clrs[4]);
  let quote_gap = 0+randomOffset2;
  let quote_mover = -256;
  let quote_moverH = int(random(-256,100));
  quad(quote_mover+680+quote_gap,quote_moverH+420+quote_gap+(randomOffset/4),quote_mover+712+quote_gap,quote_moverH+432+quote_gap+(randomOffset/4),quote_mover+684+quote_gap,quote_moverH+500+quote_gap+(randomOffset/4),quote_mover+658+quote_gap,quote_moverH+488+quote_gap+(randomOffset/4));
  quote_gap = 32+randomOffset2;
  quad(quote_mover+680+quote_gap,quote_moverH+420+quote_gap+(randomOffset/4),quote_mover+712+quote_gap,quote_moverH+432+quote_gap+(randomOffset/4),quote_mover+684+quote_gap,quote_moverH+500+quote_gap+(randomOffset/4),quote_mover+658+quote_gap,quote_moverH+488+quote_gap+(randomOffset/4));
}
if (floatingShape2 > 240 && floatingShape2 < 250 && two_straight == false){ //crispynoodle
     strokeWeight(24);strokeCap(SQUARE);
     stroke(nonBGColor(1));noFill();
     let crispy_noodle = 24;beginShape();
     vertex(400+crispy_noodle+randomOffset,400+crispy_noodle+randomOffset);
     vertex(400+2*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset);
     vertex(400+3*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset);
     vertex(400+4*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset);
     vertex(400+5*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset);
     vertex(400+6*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset);
     vertex(400+7*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset);
     vertex(400+8*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset);
     vertex(400+9*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset);
     vertex(400+10*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset);
     vertex(400+11*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset);
     endShape();
}
if (floatingShape2 > 249){ //double crispynoodle
     strokeWeight(24);
     strokeCap(SQUARE);stroke(nonBGColor(1));noFill();
     let crispy_noodle = 24;
     beginShape(); //first noodle
     vertex(400+crispy_noodle+randomOffset,400+crispy_noodle+randomOffset);
     vertex(400+2*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset);
     vertex(400+3*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset);
     vertex(400+4*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset);
     vertex(400+5*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset);
     vertex(400+6*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset);
     vertex(400+7*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset);
     vertex(400+8*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset);
     vertex(400+9*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset);
     vertex(400+10*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset);
     vertex(400+11*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset);
     endShape();
     let noodle_spacer = 64;
     beginShape(); //second noodle
     vertex(400+crispy_noodle+randomOffset,400+crispy_noodle+randomOffset+noodle_spacer);
     vertex(400+2*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset+noodle_spacer);
     vertex(400+3*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset+noodle_spacer);
     vertex(400+4*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset+noodle_spacer);
     vertex(400+5*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset+noodle_spacer);
     vertex(400+6*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset+noodle_spacer);
     vertex(400+7*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset+noodle_spacer);
     vertex(400+8*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset+noodle_spacer);
     vertex(400+9*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset+noodle_spacer);
     vertex(400+10*crispy_noodle+randomOffset,400+crispy_noodle*2+randomOffset+noodle_spacer);
     vertex(400+11*crispy_noodle+randomOffset,400+crispy_noodle+randomOffset+noodle_spacer);
     endShape();
} 
if (floatingShape2 > 64 && floatingShape2 < 100 && floatingShapeType != "dots_circle" && bars_used == false && worms_used == false){ // bars square
  console.log("FloatingShape2: bars square");
  let bars_square_counter = 0;
  bars_used = true;
  while (bars_square_counter < 1024/4){
    noFill();stroke(clrs[2]);strokeWeight(5);
    line(floatingShape2*2,floatingShape2*2+bars_square_counter,floatingShape2*6,floatingShape2*2+bars_square_counter);
    bars_square_counter = bars_square_counter +16;
  }
}
if (floatingShape1 < 16){ //strokedTriangle SPLIT TWO-PARTER DRAWN HERE OUT OF ORDER - still calling function from part 1
     strokeWeight(16);noFill();stroke(diffColor(clrs[1],3));
     triangle(128+1024/2+randomOffset,1024/2+randomOffset,1024/3,1024/1.5,1024/4+randomOffset,1024/4);
     console.log("FloatingShape1: StrokedTriangle TWO-PARTER part 2");
}
noLoop();
//saveFrame(type+"palette#"+palette_select+bgType+"-FRAME-"+frameShape+framingShape+framingShapeType+"-CENTERED-"+centeredShapeType+"-"+centeredShape+"-"+day()+"-"+minute()+"-"+second()+".png");
} //end onMouseClick
function xx(a) { return unhex(hash.substring(a, a + 2)); }
function xBetween(x, a, b){
  return (int) (a + (xx(x)/255.0 * (b - a)));
}
function dotsbg(){//background
  console.log("dots");
  let dots_circle_counter = 0;
  let dots_height_counter = 0;
  if (type == "light"){background(255,255,255);} //light white background
  if (type == "dark"){background(0,0,0);} //dark background
  while (dots_height_counter < 8*1024){
    while (dots_circle_counter < 8*1024) {
      noStroke();
      if(type=="light"){fill(0);}
      if(type=="dark"){fill(255);}
      ellipse(dots_circle_counter,dots_height_counter,3,3);
      dots_circle_counter = dots_circle_counter + 64;
    }
    dots_height_counter = dots_height_counter + 64;
    dots_circle_counter = 0;
  }
}
function notebookbg(width) {
  'use strict'
  let grid = []
  let notebook = []
  let f= 0.02;
  let seed=floor(xx(17)) // GENERATES RANDOM SEED FOR NOISE
  noiseSeed(seed) // SET THIS TO USE HASH IN FINAL VERSION
  notebook[0] =  color(0, 0,0);
  notebook[1] = color(255,255,255);
  let ratio = .5;
  if (type == "light") { ratio = .58 }
  else {ratio = .39 }
  for (let y = 0; y < 1024; y++) {
    for (let x = 0; x <= 1024; x++) {
      let i = noise(x*f,y*f) < ratio ? 1 : 0;
      grid.push({x,y,i});
    }
  }
  noStroke();
  grid.forEach((g, index) => {
    fill(notebook[g.i]) 
    rect(g.x, g.y, 1, 1);
  });
}
function grid3Dbg(){
    bgType = "3Dgrid";
    background(type =="light"?255:0);
    strokeWeight(1);
    let GridCounter = 4;
    let GridwCounter = -1024;
    let GridLoop = 24;
     stroke(type=="light"?0:255);
     while(GridCounter < 1024){
      line(0,512+GridCounter,1024,512+GridCounter);
      GridCounter *= 1.1;
    }
    while(GridwCounter < 1024){
      line(GridwCounter,516,GridwCounter-(64*GridLoop),1024);
      GridLoop -= 1;
      GridwCounter += +64;
    }
}
function horizonbg(){
      bgType = "horizon";
      if(type =="light"){background(255);}
      else {background(0,0,0);}
      let horizon = 0;strokeWeight(1);
      while (horizon < 1024){
        stroke(type == "light" ? 0 : 255);strokeWeight(horizon/1.5);
        line(0,512+20*horizon,1024,512+20*horizon);
        horizon += 1;
      }
}
function fakegridbg(){
  bgType = "fakegrid";
  let x_lerp =0;let y_lerp = 0;
  let w_lerp = 1024;let h_lerp = 1024;
  let fake_grid_counter = 0;let fake_grid_counter_h = 0;
  let fakeGrid;
  fakeGrid = createGraphics(1024,1024);
  for (var i = y_lerp; i <= y_lerp+h_lerp; i++) {
      let inter = map(i, y_lerp, y_lerp+h_lerp, 0, 1);
      let c = lerpColor(clrs[0], clrs[1], inter);
      fakeGrid.strokeWeight(2);fakeGrid.stroke(c);
      fakeGrid.line(x_lerp, i, x_lerp+w_lerp, i);
    }
    image(fakeGrid,0,0);//draw the fakeGrid to a graphics buffer
    while (fake_grid_counter_h < 1024){ //draws squares to simulate a grid
      while (fake_grid_counter < 1024){
        fill(type=="light"? 255:0);
        noStroke();
        square(fake_grid_counter-16,fake_grid_counter_h-16,64);
        fake_grid_counter = fake_grid_counter+66;
      }
      fake_grid_counter_h = fake_grid_counter_h+66;
      fake_grid_counter = 0;
    }
}
function gridbg(){
    bgType = "grid";
    if(type=="light") {background(255,255,255);}
    else {background(0,0,0);}
    let n = 0;
    while (n < 1024){
      noFill();
      strokeWeight(2);
      if(type=="light"){stroke(0);} else {stroke(255,255,255);}
      line(0,64+n,1024,64+n);
      line(64+n,0,64+n,1024);
      n+=64;
    } 
}
function wormsbg(){
  worms_used = true;
  background(255);
  noFill();
  strokeCap(ROUND);
  strokeWeight(5);
  stroke(0,0,0,25);
   let worm_column = 0;
   let worm_row = 0;
   let worm_switch = 0;
   let bezX1 = 16;// 6 default
   let bezX2 = 4;//4 default
   let bezY1 = 32; // 24 default
   while (worm_row < 1224){
     while (worm_column < 1024){     
     beginShape();
      curveVertex(int(random(0,12)-bezX1)+worm_row,int(random(0,24))-bezY1+worm_column);
      curveVertex(int(random(0,24))+worm_row,int(random(0,24))+worm_column);
      curveVertex(int(random(0,26))+worm_row,int(random(0,24))+worm_column);
      curveVertex(int(random(0,32))+worm_row,int(random(0,24))+worm_column);
      curveVertex(int(random(0,36))+bezX2+worm_row,int(random(0,24))+bezY1+worm_column);
      endShape();
      worm_column = worm_column+24;
     } 
     worm_column = worm_column+158;
   worm_switch ++;
   worm_row=worm_row+32;
   if (worm_switch % 2 == 0){worm_column = 0;}
   if (worm_switch % 2 != 0){worm_column = -79;}   
   if (worm_switch % 3 == 0){worm_column = -128;}
}
}
function starscapebg(randomOffset4,randomOffset5){
      bgType = "starscape";
    console.log("background = starscape");
     let starAmt = abs(randomOffset5)*40;
     let bigBang = 0;
     let starPosX = randomOffset5*4;
     let starPosY = randomOffset4*4;
     let starSize = 1;
      noStroke();fill(255);background(0);   
  while (bigBang < starAmt){
    ellipse(starPosX,starPosY,starSize,starSize);
    randomOffset5 = int(random(-255,255)); //NOT DETERMINATIVE
    randomOffset4 = int(random(-255,255)); //NOT DETERMINATIVE
    starPosX = randomOffset5*4;
    starPosY = randomOffset4*4;
    starSize = starSize+1;
    if (starSize > 5){starSize = 1;}bigBang += 1;
  }
}
function sprinklesbg(){
  background(255);
  strokeCap(ROUND);
    strokeWeight(6);
    stroke(0);
   let sprinkle_column = 0;
   let sprinkle_row = 0;
   let sprinkle_switch = 0;
   while (sprinkle_row < (round(1.1953125*1024))){ //UPDATED V03
     while (sprinkle_column < 1024){     
       line(-6+sprinkle_row,16+sprinkle_column,4+sprinkle_row,30+sprinkle_column);
       line(-8+sprinkle_row,48+sprinkle_column,8+sprinkle_row,48+sprinkle_column);
       line(0+sprinkle_row,72+sprinkle_column,0+sprinkle_row,88+sprinkle_column);
       line(4+sprinkle_row,108+sprinkle_column,-6+sprinkle_row,124+sprinkle_column);
       line(-8+sprinkle_row,148+sprinkle_column,8+sprinkle_row,148+sprinkle_column);
       sprinkle_column = sprinkle_column+158;
     }
     sprinkle_switch ++;
     sprinkle_row=sprinkle_row+32;
     if (sprinkle_switch % 2 == 0){sprinkle_column = 0;}
     if (sprinkle_switch % 2 != 0){sprinkle_column = -79;}   
     if (sprinkle_switch % 3 == 0){sprinkle_column = -128;}   
    }
  noStroke();
  fill('rgba(255,255,255, 0.85)');
  rect(0,0,1024,1024); //low opacity bg
}
function sprinklesGradientbg(){
  sprinkles_used = true;
    let sourceSprinklesGradient;
    let maskSprinkles;
  
    sourceSprinklesGradient = createGraphics(1024,1024);
    let x_lerp =0;let y_lerp = 0;
    let w_lerp = 1024;let h_lerp = 1024;
    let fake_grid_counter = 0;let fake_grid_counter_h = 0;
    for (var i = y_lerp; i <= y_lerp+h_lerp; i++) {
      let inter = map(i, y_lerp, y_lerp+h_lerp, 0, 1);
      let c = lerpColor(clrs[0], clrs[1], inter);
      sourceSprinklesGradient.strokeWeight(2);sourceSprinklesGradient.stroke(c);
      sourceSprinklesGradient.line(x_lerp, i, x_lerp+w_lerp, i);
    }
    maskSprinkles = createGraphics(1024,1024);  
    maskSprinkles.strokeCap(ROUND);
    maskSprinkles.strokeWeight(6);
    maskSprinkles.stroke(0);
   let sprinkle_column = 0;
   let sprinkle_row = 0;
   let sprinkle_switch = 0;
   while (sprinkle_row < (round(1.1953125*1024))){ //UPDATED V03
     while (sprinkle_column < 1024){     
       maskSprinkles.line(-6+sprinkle_row,16+sprinkle_column,4+sprinkle_row,30+sprinkle_column);
       maskSprinkles.line(-8+sprinkle_row,48+sprinkle_column,8+sprinkle_row,48+sprinkle_column);
       maskSprinkles.line(0+sprinkle_row,72+sprinkle_column,0+sprinkle_row,88+sprinkle_column);
       maskSprinkles.line(4+sprinkle_row,108+sprinkle_column,-6+sprinkle_row,124+sprinkle_column);
       maskSprinkles.line(-8+sprinkle_row,148+sprinkle_column,8+sprinkle_row,148+sprinkle_column);
       sprinkle_column = sprinkle_column+158;
     }
     sprinkle_switch ++;
     sprinkle_row=sprinkle_row+32;
     if (sprinkle_switch % 2 == 0){sprinkle_column = 0;}
     if (sprinkle_switch % 2 != 0){sprinkle_column = -79;}   
     if (sprinkle_switch % 3 == 0){sprinkle_column = -128;}   
    }
  applyMask(sourceSprinklesGradient,maskSprinkles);
}
function applyMask(source, target) {
  let clone;
  (clone = source.get()).mask(target.get());
  image(clone,0,0);
}
function nonBGColor(i) {
  if (type == "light") {
    return clrs[i].toString() != globalWhite.toString() ? clrs[i] : clrs[(i + 1) % clrs.length];
  } else if (type == "dark") {
    return clrs[i].toString() != globalBlack.toString() ? clrs[i] : clrs[(i + 1) % clrs.length];
  }
  return clrs[i];
}
function diffColor(col, i) {
	return clrs[i].toString() != col.toString() ? clrs[i] : clrs[(i + 1) % clrs.length];
}
function getColor(i) {
	while(clrs[i].toString() == globalWhite.toString() || clrs[i].toString() == globalBlack.toString()) {
		i = (i+1)%clrs.length;
	}
	return clrs[i];
}
