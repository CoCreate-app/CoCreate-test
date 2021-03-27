import { add, addToCoCreate } from './helper';

addToCoCreate('test2', import (/*webpackChunkName: "test2-chunk"*/ './src/index.2') );

add('test3', '.test3', ()=> import (/*webpackChunkName: "test3-chunk"*/ './src/index.3'))