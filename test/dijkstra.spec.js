describe('Dijkstra', function(){

	beforeEach(function(){
		this.sampArr = [1, 2, 3, 4, 5];
		this.sampObj = {a:{b:3,c:1},b:{a:2,c:1},c:{a:4,b:1}};
		this.sampObjKey = ['a', 'b', 'c'];
	});

	afterEach(function(){
		this.sampArr = null;
		this.sampObj = null;
		this.sampObjKey = null;
	});

	it('Sample object is defined', function(){
		expect(this.sampObj).toBeDefined();
	});

	it('Get keys of object', function(){
		expect(Graph.extractKeys(this.sampObj)).toEqual(this.sampObjKey);
	});
});

describe('Sp', function(){
	it('testing', function(){
		expect(true).toBe(true);
	});
});