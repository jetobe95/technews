import { dataChange } from '../firebase';
const CANAL_REF = 'favoritos_super';
const getFavoriteSuper = callback => dataChange(CANAL_REF, callback);
export default getFavoriteSuper;
