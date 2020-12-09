#version 330

in vec3 vertex;
in vec3 color;

uniform vec2 offset;

out vec3 fColor;
out vec4 off;

void main (void) {
   // off=vec4(offset,0,0);
    // off=vec4(vertex.x,vertex.y,0,0)+ vec4(offset.x,offset.y,0,0);
    gl_Position = vec4(vertex,1) + vec4(offset,0,0);
    off=vec4(vertex,1);
   // off=gl_Position;
    fColor = color;
    
}


