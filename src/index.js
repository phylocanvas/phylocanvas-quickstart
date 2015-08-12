import 'PhyloCanvas/polyfill';
import PhyloCanvas from 'PhyloCanvas';

import historyPlugin from 'phylocanvas-plugin-history';
import ajaxPlugin from 'phylocanvas-plugin-ajax';
import metadataPlugin from 'phylocanvas-plugin-metadata';

PhyloCanvas.plugin(historyPlugin);
PhyloCanvas.plugin(ajaxPlugin);
PhyloCanvas.plugin(metadataPlugin);

export default PhyloCanvas;
