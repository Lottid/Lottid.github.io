<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <githublogo></githublogo>
        <div class="h1"></div>
    </div>
</template>
<script>
import './css/app.css';
import Githublogo from './components/githubLogo.vue';
export default {
    data() {
        return {
            msg: 'Hello Vue!'
        }
    },
    components : {
    	githublogo : Githublogo
    }
}
</script>
<style>
body {
    font-family: Helvetica, sans-serif;
}
.h1 {
	size: 30px 40px;
	background: blue;
	transform:rotate(45deg);
}
</style>
