import PhyloCanvas from 'PhyloCanvas';

import historyPlugin from 'phylocanvas-plugin-history';
import ajaxPlugin from 'phylocanvas-plugin-ajax';

PhyloCanvas.plugin(historyPlugin);
PhyloCanvas.plugin(ajaxPlugin);

export default PhyloCanvas;
