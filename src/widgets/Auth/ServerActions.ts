// "use client";
// import { parseCookies, setCookie, destroyCookie } from 'nookies'
// import { authInstans } from "~/shared/api/axiosClient";
// export const login = async () => {
//   try {
//     const { data } = await authInstans.post("login", {
//       email: "ynel2i@yandex.ru",
//       password: "12345",
//       fullName: "sobaka",
//     });
//     localStorage.setItem("token", data?.token);
//     setCookie(data, "token")
//     console.log("nice", data);
//   } catch (error) {
//     console.log(error);
//   }
// };
