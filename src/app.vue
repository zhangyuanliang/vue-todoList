<template>
	<div id="app">
		<div id="cover"></div>
		<Header></Header>
		<todo></todo>
	</div>
</template>

<script>
	import Header from './todo/header.vue'
	import todo from './todo/todo.vue'

	export default {
		components: {
			Header,
			todo
		}
	}
</script>

<style lang="stylus" scoped>
	#app {
		position absolute
		top 0
		right 0
		bottom 0
		left 0
	}
	#cover {
		position absolute
		top 0
		right 0
		bottom 0
		left 0
		background-color #555
		opacity 0
		z-index -1
	}

</style>
