<template>
	<div>
		<div>this is abour</div>
		<div>{{getuserid}}</div>
	</div>
</template>

<script>
export default {
	name: 'About',
	computed: {
		getuserid() {
			return this.$route.params.userid
		}
	}
}
</script>

