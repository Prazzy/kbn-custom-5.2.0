import _ from 'lodash';
import uiRegistry from 'ui/registry/_registry';
export default uiRegistry({
  name: 'docViews',
  index: ['name'],
  order: ['order'],
  constructor() {
    this.forEach(docView => {
      if (docView.title !== 'JSON') {
	    docView.shouldShow = docView.shouldShow || _.constant(true);
	    docView.name = docView.name || docView.title;
  	  }
    });
  }
});
