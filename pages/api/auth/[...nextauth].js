import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GCLIENT_ID,
			clientSecret: process.env.GSECRET,
		}),
	],
	pages: {
		signIn: "/auth/signin",
	},
	callbacks: {
		async session({ session, token, user }) {
			session.user.username = session.user.name
				.split(" ")
				.join("")
				.toLowerCase();
			session.user.uid = token.sub;
			return session;
		},
	},
});
