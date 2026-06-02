import './style.css'
import {getkeyspressed} from './keyscript.js'
import * as THREE from 'three'

//Setting up the scene/camera/renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // fov, aspect ratio, near, far clipping planes.  Won't be rendererd at distance 1000

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new THREE.TextureLoader();

loader.load('./../public/skybox.webp', (texture) => {
  scene.background = texture;
});

//Dummy test code lol
const player = new THREE.Mesh (new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({ color: 0x0000ff }));
const ground = new THREE.Mesh (new THREE.BoxGeometry(100, 1, 100), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
ground.position.y = -1;

scene.add (player, ground);

camera.position.z = 5;

function refresh() {
  renderer.render(scene, camera);
  if (getkeyspressed().includes('d')) {
    player.position.x -= 0.1;
  }
  if (getkeyspressed().includes('a')) {
    player.position.x += 0.1;
  }
  if (getkeyspressed().includes('w')) {
    player.position.z += 0.1;
  }
  if (getkeyspressed().includes('s')) {
    player.position.z -= 0.1;
  }
}

renderer.setAnimationLoop(refresh);