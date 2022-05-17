<template>
  <div id="login">
    <h1>登录</h1>
    <p>
      <input type="text" v-model="form.username" placeholder="用户名" />
    </p>
    <p>
      <input type="password" v-model="form.password" maxlength="20" placeholder="密码" />
    </p>
    <p>
      <button type="button" class="btn btn-primary" @click="login">登录</button>
    </p>
    <p>
      <span v-if="errorMsg" class="text-danger">{{errorMsg}}</span>
    </p>
  </div>
</template>

<script>
import user from "@/network/user";
export default {
	name: "login",
	data() {
		return {
			form: {
				username: "",
				password: "",
			},
			errorMsg: "",
		};
	},
	methods: {
		login(e) {
			user
				.login(this.form)
				.then(({ data }) => {
					if (data.errno !== 0) throw data.msg;
					// https://blog.csdn.net/m0_58039950/article/details/124721115
					this.$router.push("/");
				})
				.catch(msg => {
					this.errorMsg = msg;
				});
		},
	},
};
</script>

<style lang="scss" scoped>
#login {
	text-align: center;
	padding: {
		left: 30px;
		right: 30px;
		top: 20px;
	}
	h1 {
		text-align-last: justify;
		width: 120px;
		margin: auto {
			bottom: 10px;
		}
	}
}
</style>