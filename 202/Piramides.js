/**
 * Geometria: Construye una geometria threejs y la retorna
 * Entradas: vx = Arreglo de vertices para la geometria: (Arreglo de arreglos)
 * Salidas:  geom = Geometria generada a partir de vx
 */
function Geometria(vx) {
    Geom = new THREE.Geometry();
    var largoVertice = vx.length;
    for (i = 0; i < largoVertice; i++) {
        [x,y,z] = [vx[i][0],vx[i][1],vx[i][2]]
        vector = new THREE.Vector3(x, y, z);
        Geom.vertices.push(vector);
    }
    return Geom;
}
/**
 * Traslation: Crea la matriz de traslacion 'matrizT' a partir de 'vt'
 * Entradas: vt = Vector de traslacion (arreglo de 3 enteros)
 * Salidas:  matriz = Matriz de traslacion a partir de vt
 */
function Traslation(vt) {
    var matrizT = new THREE.Matrix4();
    matrizT.set(1, 0, 0, vt[0],
                0, 1, 0, vt[1],
                0, 0, 1, vt[2],
                0, 0, 0, 1);
    return matrizT;
}
/**
 * Escalado: Crea la matriz de escalado 'matrizS' a partir de 'vs'
 * Entradas: vs = Vector de escalado (arreglo de 3 enteros)
 * Salidas:  matriz = Matriz de escalado a partir de vs
 */
function Escalado(vs) {
    var matrizS = new THREE.Matrix4();
    matrizS.set(vs[0],     0,     0, 0,
                    0, vs[1],     0, 0,
                    0,     0, vs[2], 0,
                    0,     0,     0, 1);
    return matrizS;
}
/**
 * EscaladoReal:
 * Entradas: obj = Objeto de tipo THREE.Line a ser escalado
 *           vp = Vector de posicion inicial de obj (Arreglo de 3 enteros)
 *           vs = Vector de escalado (Arreglo de 3 enteros)
 * Salida: obj actualizado
 */
function EscaladoReal(obj, vp, vs){
    vt = [-vp[0], -vp[1], -vp[2]];
    obj.applyMatrix(Traslation(vt));
    obj.applyMatrix(Escalado(vs));
    obj.applyMatrix(Traslation(vp));
}
/**
 * Rotacion:
 * Entradas: obj = Objeto de tipo THREE.Line a ser escalado
 *           vr = Vector de rotacion (Arreglo de 3 enteros)
 * Salida: obj actualizado
 */
function Rotacion(obj, vr) {
    obj.applyMatrix(RotacionX(vr));
    obj.applyMatrix(RotacionY(vr));
    obj.applyMatrix(RotacionZ(vr));
}
/**
 * RotacionX: Crea la matriz de rotacion 'matrizRx' a partir de 'vr'
 * Entradas: vr = Vector de rotacion (arreglo de 3 enteros)
 * Salidas:  matriz = Matriz de rotado a partir de vr
 */
function RotacionX(vr) {
    var matrizRx = new THREE.Matrix4();
    matrizRx.set (1 ,  0              , 0              , 0,
                0 ,  Math.cos(vr[0]), Math.sin(vr[0]), 0,
                0 , -Math.sin(vr[0]), Math.cos(vr[0]), 0,
                0 ,  0              , 0              , 1);
    return matrizRx;
}
/**
 * RotacionY: Crea la matriz de rotacion 'matrizRy' a partir de 'vr'
 * Entradas: vr = Vector de rotacion (arreglo de 3 enteros)
 * Salidas:  matriz = Matriz de rotado a partir de vr
 */
function RotacionY(vr) {
    var matrizRy = new THREE.Matrix4();
    matrizRy.set (Math.cos(vr[1]), 0 ,-Math.sin(vr[1]), 0,
                0              , 1 , 0              , 0,
                Math.sin(vr[1]), 0 , Math.cos(vr[1]), 0,
                0              , 0 , 0              , 1);
    return matrizRy;
}
/**
 * RotacionZ: Crea la matriz de rotacion 'matrizRz' a partir de 'vr'
 * Entradas: vr = Vector de rotacion (arreglo de 3 enteros)
 * Salidas:  matriz = Matriz de rotado a partir de vr
 */
function RotacionZ(vr) {
    var matrizRz = new THREE.Matrix4();
    matrizRz.set (Math.cos(vr[2]) , Math.sin(vr[2]), 0 , 0,
                -Math.sin(vr[2]), Math.cos(vr[2]), 0 , 0,
                0               , 0              , 1 , 0,
                0               ,  0             , 0 , 1);
    return matrizRz;
}
/**
 * RotaciónRealX:
 * Entradas: obj = Objeto de tipo THREE.Line a ser rotado
 *           vp = Vector de posicion inicial de obj (Arreglo de 3 enteros)
 *           vr = Vector de rotacion (arreglo de 3 enteros)
 * Salida: obj actualizado
 */
function RotacionRealX(obj, vp, vr){
    vt = [-vp[0], -vp[1], -vp[2]];
    obj.applyMatrix(Traslation(vt));
    obj.applyMatrix(RotacionX(vr));
    obj.applyMatrix(Traslation(vp));
}
/**
 * RotaciónRealY:
 * Entradas: obj = Objeto de tipo THREE.Line a ser rotado
 *           vp = Vector de posicion inicial de obj (Arreglo de 3 enteros)
 *           vr = Vector de rotacion (arreglo de 3 enteros)
 * Salida: obj actualizado
 */
function RotacionRealY(obj, vp, vr){
    vt = [-vp[0], -vp[1], -vp[2]];
    obj.applyMatrix(Traslation(vt));
    obj.applyMatrix(RotacionY(vr));
    obj.applyMatrix(Traslation(vp));
}
/**
 * RotaciónRealZ:
 * Entradas: obj = Objeto de tipo THREE.Line a ser rotado
 *           vp = Vector de posicion inicial de obj (Arreglo de 3 enteros)
 *           vr = Vector de rotacion (arreglo de 3 enteros)
 * Salida: obj actualizado
 */
function RotacionRealZ(obj, vp, vr){
    vt = [-vp[0], -vp[1], -vp[2]];
    obj.applyMatrix(Traslation(vt));
    obj.applyMatrix(RotacionZ(vr));
    obj.applyMatrix(Traslation(vp));
}
/**
 * RotaciónReal:
 * Entradas: obj = Objeto de tipo THREE.Line a ser rotado
 *           vp = Vector de posicion inicial de obj (Arreglo de 3 enteros)
 *           vr = Vector de rotacion (arreglo de 3 enteros)
 * Salida: obj actualizado
 */
function RotacionReal(obj, vp, vr){
    vrr = [((vr[0]*Math.PI)/180), ((vr[1]*Math.PI)/180), ((vr[2]*Math.PI)/180)];
    RotacionRealX(obj, vp, vrr);
    RotacionRealY(obj, vp, vrr);
    RotacionRealZ(obj, vp, vrr);
}
function init() {

    // Escena
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);    
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x000000, 1.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    var size = 700;
    var arrowSize = 40;
    var divisions = 20;
    var origin = new THREE.Vector3( 0, 0, 0 );
    var x = new THREE.Vector3( 1, 0, 0 );
    var y = new THREE.Vector3( 0, 1, 0 );
    var z = new THREE.Vector3( 0, 0, 1 );
    var color2 = new THREE.Color( 0x333333 );  /// 0x333333
    var colorR = new THREE.Color( 0xAA0000 );
    var colorG = new THREE.Color( 0x00AA00 );
    var colorB = new THREE.Color( 0x0000AA );

    //Crear la Grilla
    var gridHelperXZ = new THREE.GridHelper( size, divisions, color2, color2);

    //Flechas
    var arrowX = new THREE.ArrowHelper( x, origin, arrowSize, colorR );
    var arrowY = new THREE.ArrowHelper( y, origin, arrowSize, colorG );
    var arrowZ = new THREE.ArrowHelper( z, origin, arrowSize, colorB );
        
    //Cámara
    camera.position.x = 000;
    camera.position.y = 200;
    camera.position.z = 400;
    camera.lookAt(scene.position);

    //Creación de las Figuras
    //Piramide #1
    lado = 30;
    h = 45;
    [v1, v2, v3, v4, v5] = [[0,0,0],[lado,0,0],[lado,0,lado],[0,0,lado],[lado/2,h,lado/2]];
    var vertices = [v1,v2,v3,v4,v5,v1,v4,v3,v5,v2];
    geom = Geometria(vertices);

    //Colores para las  piramides
    color = [{color:0xFF0000},{color:0x00FF00}];


    //Material
    material = [];
    for (i=0; i<3; i++) {
        material.push = (new THREE.ParticleBasicMaterial(color[i]));
    }


    //Figuras para las piramides
    fig = [];
    vt = [20, 10, 20];
    for (i=0; i<1; i++) {
        fig.push(new THREE.Line(geom, material[i]));
        fig[i].applyMatrix(Traslation(vt));
    }

    //Traslacion
    t = [2*lado, 2*lado, 0];
    vp = [(vt[0] + t[0]) + (lado / 2), vt[1] + t[1], (vt[2] + t[2]) + (lado / 2)]; //Cambio de la posicion centrada del objeto
    fig[0].applyMatrix(Traslation(t));

    //Escalado
    EscaladoReal(fig[0], vp, [1.5, 1.5, 1.5]);

    //Rotacion
    RotacionReal(fig[0], vp, [45, 45, 60]);

    // En el documento HTML
    document.body.appendChild(renderer.domElement);

    // Agregar elementos al escenario
    scene.add(gridHelperXZ);
    scene.add(arrowX);	
    scene.add(arrowY);	
    scene.add(arrowZ);
    for (i=0;i<1;i++)
        scene.add(fig[i]);

    renderer.render(scene, camera);
}

init();  // otra forma: window.onload = init;