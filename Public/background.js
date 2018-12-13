function happyfun() {
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(55, 0.5, 1, 1000);

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth / 1.2, window.innerHeight / 1.2);
  var threeElem =
    document.querySelector("#three-js-item") ||
    document.querySelector("#three-js-item2");

  threeElem.appendChild(renderer.domElement);

  var mouse = new THREE.Vector2();
  var raycaster = new THREE.Raycaster();

  function onMouseMove(event) {
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  }

  window.addEventListener("mousemove", onMouseMove, false);

  var geometry = new THREE.TetrahedronGeometry(2, 1);
  var material = new THREE.MeshBasicMaterial({
    color: "rgb(253, 36, 2)",
    wireframe: true
  });

  var cube = new THREE.Mesh(geometry, material);
  renderer.setClearColor("#ffffff");
  scene.add(cube);
  cube.position.y = 0;
  cube.position.x = 0;

  camera.position.z = 9.6;

  var animate = function() {
    requestAnimationFrame(animate);

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children);

    for (var i = 0; i < intersects.length; i++) {
      intersects[i].object.material.color.set({
        color: "#ffff00"
      });
    }

    cube.rotation.x += 0.0015;
    cube.rotation.y += 0.0015;

    renderer.render(scene, camera);
  };

  animate();

  // fit your screen--------------------------------------------------------------//
  window.addEventListener("resize", onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
}
