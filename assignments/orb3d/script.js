var container = document.getElementById("container");
var scene, camera,renderer;
var geometry, material,orb;

function init(){
  camera = new THREE.PerspectiveCamera(60,window.innerWidth/window.innerHeight,1,10000);
  camera.position.z = 500;
  scene = new THREE.Scene();
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth,window.innerHeight);
  container.appendChild(renderer.domElement);

  geometry = new THREE.SphereGeometry(100,32,32);
  material = new THREE.MeshBasicMaterial({color:0xffffff,wireframe:true});
  orb = new THREE.Mesh(geometry,material);
  orb.position.set(0,0,0)
  scene.add(orb);
  animate();
}

function animate(){
  window.requestAnimationFrame(animate);
  orb.rotation.y += 0.01;
  renderer.render(scene,camera);
}

init()
