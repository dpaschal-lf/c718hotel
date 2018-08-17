

class Customer{
	constructor( name ){
		this.name = name;
		this.room = null; //room we are currently in
		this.isHungry = false;
		this.wallet = 1000000;
	}
	orderRoomService( food ){
		this.room.getRoomService(food);
	}
	eat( food ){
		
	}
}