export interface User{
    _id:string;
	name:string;
	last_name:string;
	account:Account;
	role:string;
	company:Company;
	created_at:Date;
	updated_at:Date;
}
interface Account{
    email:string;
	password:string;
	phone:string;
	banned?:boolean;
}
interface Company{
    name:string;
	logo:string;
	address:Address;
}
interface Address{
    first_street:string;
	second_street:string;
	neighborhood:string;
	location:Location;
}
interface Location{
    type:string; // always "Point"
	coordinates:number[];
}