describe('Stack list', function(){

	var stack = new Stack();

	beforeEach(function(){
		stack.pushData(1);
		stack.pushData(2);
		stack.pushData(3);
	});
	afterEach(function(){
		stack = [];
	});

	it('check dequeue value', function(){
		expect(stack.popData()).toEqual(3);
	});
});