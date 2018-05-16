<template>
	<section class="real-app">
		<input type="text" 
			   class="add-input"
			   placeholder="接下来要做什么？">
		<items></items>
		<Tabs :filter="filter"></Tabs>
	</section>
</template>

<script>
	import Tabs from './tabs.vue'
	import items from './items.vue'

	export default {
		components: {
			Tabs,
			items,
		},
		data() {
			return {
				filter: 'all'
			}
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