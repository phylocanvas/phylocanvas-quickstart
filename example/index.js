const tree = PhyloCanvas.createTree('phylocanvas');

tree.showLabels = true;
tree.hoverLabel = true;

tree.on('error', function (event) { throw event.error; });

tree.on('loaded', function () {
  console.log('loaded');
});

// tree.load('/dev/tree.nwk');
tree.load('(A:0.1,B:0.2,(C:0.3,D:0.4)E:0.5)F;');
