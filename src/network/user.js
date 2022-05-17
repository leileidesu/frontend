import axios from "axios";
const deploy = axios.create({
	baseURL: "http://localhost:3000/api/users",
	timeout: 1000,
	method: "post",
});
const test = axios.create({
	baseURL: "http://localhost:3000",
	timeout: 1000,
	method: "get",
});
const tar = test;
export default {
	login(form) {
		return tar("/login", form);
	},
	register(form) {
		return tar("/register", form);
	},
};
