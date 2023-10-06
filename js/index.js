import { CRUD } from "./CRUD.js";

function app(){
	let crud = new CRUD("ejemplo");
	crud.create([1, 2, 3]);
	crud.create({ message: "Hola mundo"});

	crud.update(6, [3, 7, 1]);

	crud.delete(4);


	let crud2 = new CRUD("ejemplo");
	console.log(crud2.readall());
}
app();

