"use client";

import Link from "next/link";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get("email");
        const password = formData.get("password");
        const { data, error } = await authClient.signIn.email({
            email: email,
            password: password,
            rememberMe: true,
        });

        if (error) {
            alert("Login Failed: " + error.message);
        } else {
            alert("Login Successful!");
        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_40%)]" />
            <div className="absolute bottom-0 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[150px]" />

            <div className="container mx-auto flex min-h-screen items-center justify-center px-4">
                <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-white">
                            Welcome Back
                        </h1>

                        <p className="mt-2 text-sm text-gray-400">
                            Sign in to continue your journey
                        </p>
                    </div>

                    <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
                        <TextField isRequired name="email" type="email">
                            <Label>Email</Label>
                            <Input placeholder="john@example.com" />
                            <FieldError />
                        </TextField>

                        <TextField isRequired name="password" type="password" >
                            <Label>Password</Label>
                            <Input placeholder="Enter your password" />
                            <FieldError />
                        </TextField>

                        <div className="flex justify-end">
                            <Link
                                href="/forgot-password"
                                className="text-sm text-violet-400 transition hover:text-violet-300"
                            >
                                Forgot Password?
                            </Link>
                        </div>

                        <Button
                            type="submit"
                            color="primary"
                            className="w-full"
                        >
                            Sign In
                            <FaArrowRight />
                        </Button>
                    </Form>

                    <div className="mt-6 text-center text-sm text-gray-400">
                        Don't have an account?{" "}
                        <Link href="/auth/singup" className="font-medium text-violet-400 hover:text-violet-300">
                            Create Account
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;