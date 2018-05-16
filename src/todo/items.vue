<template>
	<div class="todo-item">
		<input type="checkbox" name="" id="" class="toggle">
		<label for="">test test test test</label>
		<button class="destory"></button>
	</div>
</template>

<script>
	export default {

	}
</script>

<style lang="stylus" scoped>
	.todo-item {
		position: relative;
		margin-top: 6px;
		font-size: 24px;
		border-bottom: 1px solid #CCCACD;
		border-top: 1px solid #CCCACD;
		// background-color: #E4F3FF;
		label {
			display: block;
			// white-space: pre-line;
   //          word-break: break-all;
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