describe('Queue list', function(){

	var queue = new Queue();

	beforeEach(function(){
		queue.enqueue(1);
		queue.enqueue(2);
		queue.enqueue(3);
	});
	afterEach(function(){
		queue = [];
	});

	it('check dequeue value', function(){
		expect(queue.dequeue()).toEqual(1);
	});
});