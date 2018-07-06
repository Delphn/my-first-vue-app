let app = new Vue({
	el: '#app',
	data: {
		message: 'Hello World'
	}
});

let app2 = new Vue({
	el: '#app-2',
	data: {
		message: 'this is amazing' + new Date().toLocaleString()
	}
});

let app3 = new Vue({
	el: '#app-3',
	data: {
		seen: true
	}
});

let app4 = new Vue({
	el: '#app-4',
	data: {
		todos: [
			{ text: 'eat' },
			{ text: 'drink' },
			{ text: 'go shoping' },
			{ text: 'work' },
			{ text: 'meditate' },
			{ text: 'enjoy life' }
		]
	}
});

let app5 = new Vue({
	el: '#app-5',
	data: {
		message: 'Delphin'
	},
	methods: {
		reverseMessage: function() {
			this.message = this.message
				.split('')
				.reverse()
				.join('');
		}
	}
});

let app6 = new Vue({
	el: '#app-6',
	data: {
		message: 'Hello Vue!'
	}
});

// Define a new component called todo-item
let app7 = new Vue.component('todo-item', {
	template: '<li>This is a todo</li>'
});
