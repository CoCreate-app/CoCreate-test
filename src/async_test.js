// component implementation:
// 1. it should have programming api as well as html or attribute api
// 2. Includes semantic

import utils from '@cocreate/utils';
import uuid from '@cocreate/uuid';
import crud from '@cocreate/crud-client';
// import socketEventAsync from './event-promise'


CorrectExample().then((data) => {
	console.log('Async Event Data ------')
	console.log(data)
})


async function CorrectExample() {

	var eventname = uuid.generate();
    var event1 = uuid.generate();
    var event2 = uuid.generate()
    
    crud.readDocumentList({
      collection: "items-ordered",
      element: "items",
      is_collection: false,
      async: true,
      event: event1,
      operator: {
      	filters: [],
      	orders: [],
      	startIndex : 0,
      	search: {}
      }
    })
    
    crud.readDocument({
      "collection": "test",
      "document_id": "60517e335fc27f0dc71d65b8",
      "async": true,
      "event": event2,
    })
	
	let async1 = await crud.listenAsync(event1);
	let async2 = await crud.listenAsync(event2);

	console.log(async1, async2);
	console.log('next request')
	eventname = uuid.generate();
	
	crud.readDocument({
		"collection": "test",
		"document_id": "60517e335fc27f0dc71d65b8",
		"event": eventname,
		"metadata": {
		    testing: "no Event Testing",
		},
	})
	
	let data2 = await crud.listenAsync(eventname);
	console.log(data2)
}




crud.listen('readDocument', function(data) {
    console.log("Listen Data", data)
})