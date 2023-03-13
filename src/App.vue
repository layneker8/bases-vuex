<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<h1>contador: {{ isComputed }}</h1>
	<h1>MapState</h1>
	<h1>map: {{ counter }}</h1>
	<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
	import { mapState } from "vuex";
	// import HelloWorld from "./components/HelloWorld.vue";

	export default {
		name: "App",
		// components: {
		// 	HelloWorld,
		// },
		// computed: mapState(['count'])
		computed:{
      isComputed(){
        return this.$store.state.count
      },
      // ...mapState(['count'])
      ...mapState({
        counter: state => state.count
      })
    }
	};
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
