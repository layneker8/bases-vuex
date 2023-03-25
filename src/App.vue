<template>
	<img alt="Vue logo" src="./assets/logo.png" />
	<h1>contador: {{ isComputed }}</h1>
	<h1>MapState</h1>
	<h2>map: {{ count }}</h2>
	<h1>Mutations</h1>
	<button @click="increment">+1</button>
	<button @click="incrementBy">+5</button>

	<button @click="randomInt" :disabled="loading">random</button>
	<h1>Getters</h1>
	<p>{{ $store.getters.quaterState }}</p>
	<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
	import { mapActions, mapState } from "vuex";
	// import HelloWorld from "./components/HelloWorld.vue";

	export default {
		name: "App",
		// components: {
		// 	HelloWorld,
		// },
		// computed: mapState(['count'])
		computed: {
			isComputed() {
				return this.$store.state.count;
			},
			...mapState(["count","loading"]),
			// ...mapState({
			//   counter: state => state.count
			// })
		},
		methods: {
			increment() {
				this.$store.commit("increment");
			},
			incrementBy() {
				this.$store.commit("incrementBy", 5);
        // this.randomInt() //puedo llamar el map de las acciones
			},
			// incrementRandom() {
			// 	this.$store.dispatch("incrementRandom");
			// },
      // ...mapActions(['incrementRandom'])
      ...mapActions({
        randomInt: 'incrementRandom'
      })
		},
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
