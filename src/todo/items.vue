<template>
	<div>
		<div v-for="(todo,index) in todos" class="todo-item" v-bind:class="{finished: todo.finished}">
			<input type="checkbox" class="toggle" v-model="todo.finished" v-on:click="toggleFinish(todo)"/>
			<label for="">{{todo.title}}</label>
			<button class="destory" v-on:click="toDestory(index)"></button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['todos'],
		methods: {
			toggleFinish: function(todo) {
				todo.finished = !todo.finish;
			},
			toDestory: function(index) {
				this.$emit('destoryTodo', index);
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.todo-item {
		position: relative;
		margin-top: 3px;
		font-size: 24px;
		border-bottom: 1px dashed #a2a1a2;
		border-top: 1px solid #CCCACD;
		label {
			display: block;
			margin-left: 45px;
			padding: 15px 60px 15px 15px;
   			line-height: 1.2;
   			color: #34373B;
   			-webkit-font-smoothing: antialiased;
			font-weight: 400;
		}
		&:hover {
			.destory:after {
				content: 'x'
			}
		}
		&.finished label{
			color: #b5b1b1;
			text-decoration: line-through;
		}
	}
	
	.toggle {
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		width: 40px;
		height: 40px;
		line-height: 40px;
		appearance: none;
		outline: none;
		cursor: pointer;
		&:after {
            content: url('../assets/images/round.svg')
        }
        &:checked:after {
			content: url('../assets/images/done.svg')
        }
		
	}
	
	.destory {
		position: absolute;
		top: 0;
		right: 10px;
		bottom: 0;
		margin: auto 0;
		width: 40px;
		height: 40px;
		background-color transparent
		border: none;
		outline: none;
		color: #DA7274;
		font-size: 25px;
		cursor: pointer;
	}
	

</style>