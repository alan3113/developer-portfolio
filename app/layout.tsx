import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Alan - Frontend Developer Portfolio",
	description:
		"Passionate frontend developer specializing in modern web applications",
	generator: "v0.dev",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="icon"
					href="/favicon-32x32.png"
					sizes="32x32"
					type="image/png"
				/>
				<link
					rel="icon"
					href="/favicon-16x16.png"
					sizes="16x16"
					type="image/png"
				/>
				<link
					rel="apple-touch-icon"
					href="/apple-touch-icon.png"
					sizes="180x180"
				/>
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
