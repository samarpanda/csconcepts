describe('linkedlist', function(){

	var list = new LinkedList();

	beforeEach(function(){
		list.add(10);
		list.add(20);
		list.add(30);
		list.add(40);
	});

	afterEach(function(){
		while(list._length > 0)
			list.remove(0);
	});

	it('Get first item of the list ', function(){
		expect(list.item(0)).toEqual(10);
	});

	it('Remove 2nd item of the list', function(){
		expect(list.remove(1)).toEqual(20);
		expect(list._length).toEqual(3);
	});
});