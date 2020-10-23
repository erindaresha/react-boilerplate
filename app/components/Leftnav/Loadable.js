/**
 *
 * Asynchronously loads the component for Leftnav
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
