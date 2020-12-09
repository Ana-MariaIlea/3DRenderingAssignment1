#version 330

in vec3 fColor;
in vec4 off;
layout(origin_upper_left) in vec4 gl_FragCoord;
uniform float rows;
uniform float columns;

out vec4 sColor;

void main (void) {

    float scale=1;
    
    float row=1.0/rows;
    float col=1.0/columns;
    
    vec2 pos = off.xy;


for(float i=-0.5;i<0.5;i+=col*2)
for(float j=-0.5;j<0.5;j+=row*2){
    if ((pos.x > i && pos.x<i+col)&&(pos.y > j&&pos.y<j+row)){
    sColor=vec4(1.0, 1.0, 1.0, 1.0);
    }
    if ((pos.x > i+col && pos.x<i+col*2)&&(pos.y >j+row&&pos.y<j+row*2)){
    sColor=vec4(1.0, 1.0, 1.0, 1.0);
    }
    if ((pos.x > i+col && pos.x<i+col*2)&&(pos.y >j&&pos.y<j+row)){
    sColor=vec4(0.0, 0.0, 0.0, 1.0);
    }
    if ((pos.x > i && pos.x<i+col)&&(pos.y >j+row&&pos.y<j+row*2)){
    sColor=vec4(0.0, 0.0, 0.0, 1.0);
    }
}

   
}


