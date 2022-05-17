<template>
  <div id="User">
    <div class="h-100 d-flex justify-content-center align-items-center">
      <div class="formbox">
        <router-view />
        <!-- ul>li{$} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "User",
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
#User {
	.formbox {
		border: {
			style: solid;
			radius: 15px;
		}
		* {
			user-select: none;
		}
	}
}
</style>