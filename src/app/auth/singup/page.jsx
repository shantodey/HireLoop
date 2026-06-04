"use client";

import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FaCheck } from "react-icons/fa";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
const SignUpPage = () => {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        console.log("Form Values:", { name, email, password });
        const { data, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
        });
        alert(`Form submitted with:${error,data}`);
    };

    return (
        <section className="min-h-screen flex items-center justify-center ">
            <div className="container flex items-center justify-center">
                <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                    <TextField isRequired name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="Shanto dey" />
                        <FieldError />
                    </TextField>

                    <TextField  isRequired  name="email" type="email">
                        <Label>Email</Label>
                        <Input placeholder="Enter your Email" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired minLength={8} name="password" type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }

                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }

                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit">
                            <FaCheck />
                            Submit
                        </Button>

                        <Button type="reset" variant="bordered">
                            Reset
                        </Button>
                    </div>
                    <div className="mt-6 text-center text-sm text-gray-400">
                        Already have an account?{" "}
                        <Link href="/auth/login" className="font-medium text-violet-400 hover:text-violet-300">
                            Log in
                        </Link>
                    </div>
                </Form>
            </div>
        </section>
    );
};

export default SignUpPage;