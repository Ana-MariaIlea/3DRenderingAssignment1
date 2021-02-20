#version 330

in vec3 fColor;

uniform float rows;
uniform float columns;
uniform float Ufactor;
uniform vec2 mousePosition;

out vec4 sColor;

void main (void) {

    float scale=2;
    
    float row=(scale/rows)*Ufactor;
    float col=(scale/columns)*Ufactor;
    
    vec3 color;
    

    // get the index
    float a=mod(fColor.x,col*2);
    float b=mod(fColor.y,row*2);
 
    // color based on index
    if ((a > col)&&(b > row)){
    color=vec3(1.0, 1.0, 1.0);
    }
    if ((a <col)&&(b < row)){
    color=vec3(1.0, 1.0, 1.0);
    }
    if ((a < col)&&(b > row)){
    color=vec3(0.0, 0.0, 0.0);
    }
    if ((a > col)&&(b < row)){
    color=vec3(0.0, 0.0, 0.0);
    }

    vec2 dist=vec2(gl_FragCoord.x,gl_FragCoord.y)-vec2(mousePosition.x,600-mousePosition.y);

    float d=length(dist);

    if(d<100)
    {
        vec3 colorAlpha = mix(vec3(1.0,1.0,1.0),color,d/100);
        sColor=vec4(colorAlpha,1.0);
    }
    else
    { 
        sColor=vec4(color,1.0);
    }  
}


