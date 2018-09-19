<template>
	<section class="real-app">
		<input type="text" 
			   class="add-input"
			   placeholder="接下来要做什么？"
			   v-model="newTodo"
			   v-on:keyup.enter="addTodo">
		<Items v-for="todo in filterTodos"
			   v-on:destoryTodo="removeTodo"
			   :todo="todo"
			   :key="todo.id"
			   ></Items>
		<Tabs :filter="filter" 
			  :todos="todos"
			  v-on:changeFilter="updateFilter"
			  v-on:toClearAllCompleted="clearAllCompleted"
			  ></Tabs>
	</section>
</template>

<script>
	import Items from './items.vue'
	import Tabs from './tabs.vue'
	import Store from '../store.js'

	export default {
		data() {
			return {
				todos: Store.getTodos(),
				newTodo: '',
				filter: 'all',
				nextTodoId: 0
			}
		},
		computed: {
			filterTodos: function() {
				var filter = this.filter;
				if (filter == 'all') {
					return this.todos;
				}
				var finished = this.filter === 'completed';
				return this.todos.filter((todo) => todo.finished === finished);
			}
		},
		watch: {
			todos: {
				handler: function (currTodos, oldTodos) {
					var ids = currTodos.map((todo) => todo.id);
					this.nextTodoId = Math.max.apply(null, ids) + 1;
					Store.setTodos(currTodos);
				},
      			deep: true
			}
		},
		methods: {
			addTodo: function() {
				if (!this.newTodo) {
					return false;
				}
				this.todos.push({
					id: this.nextTodoId,
					title: this.newTodo,
					finished: false
				})
				this.newTodo = '';
			},
			removeTodo: function(todoId) {
				this.todos.splice(this.todos.findIndex((todo) => todo.id === todoId), 1);
			},
			updateFilter: function(state) {
				this.filter = state;
			},
			clearAllCompleted: function() {
				this.todos = this.todos.filter((todo) => !todo.finished);
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