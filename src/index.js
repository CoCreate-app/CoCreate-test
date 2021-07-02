import crud from '@cocreate/crud-client';

const CoCreateTesting = {

	initElement: function(element) {
		crud.readDocument({
      collection: "items-ordered",
      document_id: "60517e335fc27f0dc71d65b8",
      metadata:{
        component: 'testing'
      }
		})
		
		crud.listen('readDocument', function(data) {
		  console.log('Receive testing.....')
		  console.log(data)
		})
	},
}

CoCreateTesting.initElement();
export default CoCreateTesting;
