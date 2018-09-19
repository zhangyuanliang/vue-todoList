/*
* @Author: zhangyl
* @Date:   2018-09-19 10:07:11
* @Last Modified by:   zhangyl
* @Last Modified time: 2018-09-19 10:20:08
*/
const TODOS_KEY = 'TODOS_STORE_KEY';
export default {
	getTodos: function() {
		return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]');
	},
	setTodos: function(todos) {
		window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
	}
}