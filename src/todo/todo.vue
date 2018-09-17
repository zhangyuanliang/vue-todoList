<template>
	<section class="real-app">
		<input type="text" 
			   class="add-input"
			   placeholder="接下来要做什么？"
			   v-model="newTodo"
			   v-on:keyup.enter="addTodo">
		<Items :todos="filterTodos" v-on:destoryTodo="removeTodo"></Items>
		<Tabs :filter="filter" v-on:changeFilter="updateFilter"></Tabs>
	</section>
</template>

<script>
	import Items from './items.vue'
	import Tabs from './tabs.vue'

	export default {
		data() {
			return {
				todos: [
					{title: 'coding', finished: false},
					{title: 'walking', finished: true}
				],
				newTodo: '',
				filter: 'all'
			}
		},
		computed: {
			filterTodos: function() {
				var filter = this.filter;
				return this.todos.filter(function(todo) {
					var condition;
					switch (filter) {
						case 'active':
							condition = todo.finished === false;
							break;
						case 'completed':
							condition = todo.finished === true;
							break;
						default:
							condition = true;
							break;
					}
					return condition;
				})
			}
		},
		methods: {
			addTodo: function() {
				if (!this.newTodo) {
					return false;
				}
				this.todos.push({
					title: this.newTodo,
					finished: false
				})
				this.newTodo = '';
			},
			removeTodo: function(index) {
				this.todos.splice(index, 1);
			},
			updateFilter: function(state) {
				this.filter = state;
			}
		},
		components: {
			Items,
			Tabs
		}
	}
</script>


<style lang="stylus" scoped>
    .real-app {
    	width: 600px;
    	margin: 0 auto;
    	box-shadow: 8px 8px 5px #666;
    	// opacity: 0.6;
    }
    
    .add-input {
    	position: relative;
        width: 100%;
        font-size: 24px;
        line-height: 1.4em;
        box-sizing: border-box;
        padding: 16px 16px 16px 36px;
        border: none;
        outline: none;
    }


</style>