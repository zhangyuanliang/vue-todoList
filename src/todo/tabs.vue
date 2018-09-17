<template>
	<div class="helper">
		<span class="left">0 items left</span>
		<span class="tabs">
			<span 
				v-for="state in states"
				:class="[state, filter==state? 'actived':'']"
				v-on:click="changeStates(state)"
			>{{state}}</span>
		</span>
		<span class="clear">clear completed</span>
		<input type="button" value="test" v-on:click="testClick">
	</div>
</template>

<script>
	export default {
		props: {
			filter: {
				type: String,
				require: true,
			}
		},
		data() {
			return {
				states: ['all', 'active', 'completed']
			}
		},
		methods: {
			changeStates: function(state) {alert();
				this.$emit('changeFilter', state);
			},
			testClick: function() {
				alert();
			}
		}
	}
</script>

<style lang="stylus" scoped>
	.helper {
		font-size: 16px;
		line-height: 1.5em;
		padding: 5px 8px;
		color: #FFF;
		display: flex;
		justify-content: space-between; /* 均匀排列每个元素 首个元素放置于起点，末尾元素放置于终点 */
		-webkit-font-smoothing: antialiased;
		font-weight: 200;
	}
	
	.left {
		
	}
	
	.tabs {
		display: flex;
        justify-content: space-around; /* 均匀排列每个元素 每个元素周围分配相同的空间 */
    	width: 230px;
        span {
        	display: inline-block;
        	padding: 0 10px;
        	cursor: pointer;
        	&.actived {
        		border: 1px solid #48E436;
        		border-radius: 5px;
        		color: #48E436;
        	}
        }
	}
	
	.clear {
		cursor: pointer;
		
	}
</style> -->