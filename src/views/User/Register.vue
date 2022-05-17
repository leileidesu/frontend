<template>
  <div id="register">
    <h1>注册</h1>
    <p>
      <input type="text" v-model="form.username" placeholder="用户名" />
    </p>
    <p>
      <input type="password" v-model="form.password_1" maxlength="20" placeholder="密码（8-20位）" />
    </p>
    <p>
      <input type="password" v-model="form.password_2" maxlength="20" placeholder="确认密码" />
    </p>
    <p>
      <button type="button" class="btn btn-primary" @click="register">注册</button>
    </p>
    <p>
      <span v-if="errorMsg" class="text-danger">{{errorMsg}}</span>
    </p>
  </div>
</template>

<script>
import user from "@/network/user";
export default {
	name: "register",
	data() {
		return {
			form: {
				username: "",
				password_1: "",
				password_2: "",
			},
			errorMsg: "",
		};
	},
	methods: {
		register(e) {
			if (
				!(this.form.username && this.form.password_1 && this.form.password_2)
			) {
				this.errorMsg = "有表单项为空！";
				return;
			}
			if (!this.form.password_1.match(/^(?=.*\d)(?=.*[a-zA-Z])(\w{8,20})$/)) {
				this.errorMsg = "两次输入的密码不一致";
				return;
			}
			if (this.form.password_1 !== this.form.password_2) {
				this.errorMsg = "密码不一致！";
				return;
			}
			user
				.register(this.form)
				.then(({ data }) => {
					if (data.errno !== 0) throw data.msg;
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
#register {
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