import ApplicationLogo from "@/components/ApplicationLogo";
import AuthCard from "@/components/AuthCard";
import AuthSessionStatus from "@/components/AuthSessionStatus";
import Button from "@/components/Button";
import GuestLayout from "@/components/Layouts/GuestLayout";
import Input from "@/components/Input";
import InputError from "@/components/InputError";
import Label from "@/components/Label";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Navbar from "@/components/React/global-components/navbar";
import LoginFooter from "@/components/LoginFooter";
import Footer from "@/components/React/global-components/footer";
import Topbar from "@/components/React/global-components/topbar";

const Login = () => {
    const router = useRouter();

    const { login } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "/dashboard"
    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [shouldRemember, setShouldRemember] = useState(false);
    const [errors, setErrors] = useState([]);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        if (router.query.reset?.length > 0 && errors.length === 0) {
            setStatus(atob(router.query.reset));
        } else {
            setStatus(null);
        }
    });

    const submitForm = async event => {
        event.preventDefault();

        login({ email, password, remember: shouldRemember, setErrors, setStatus });
    };

    return (
        <GuestLayout>
            <Topbar />
            <Navbar />
            <div className="container pd-top-100 pb-5">

                <div className="offset-4 col-4">

                    <AuthCard
                        logo={
                            <Link href="/">
                                <a>
                                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                                </a>
                            </Link>
                        }>

                        {/* Session Status */}
                        <AuthSessionStatus className="mb-4" status={status} />

                        <h5 className="mb-5 text-left text-dark"><strong>Մուտք</strong></h5>
                        <form onSubmit={submitForm}>
                            {/* Email Address */}
                            <div className="d-flex flex-column">
                                <Label htmlFor="email"><p>Օգտանուն <span className={"text-main"}>*</span></p></Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    className="input-main"
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                    autoFocus
                                />

                                <InputError messages={errors.email} className="mt-2" />
                            </div>

                            {/* Password */}
                            <div className="mt-4 d-flex flex-column">
                                <Label htmlFor="password"><p>Գաղտնաբառ <span className={"text-main"}>*</span></p></Label>

                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    className="input-main"
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                    autoComplete="current-password"
                                />

                                <InputError messages={errors.password} className="mt-2" />
                            </div>

                            {/* Remember Me */}
                            <div className="block mt-4">
                                <label
                                    htmlFor="remember_me"
                                    className="inline-flex items-center">
                                    <input
                                        id="remember_me"
                                        type="checkbox"
                                        name="remember"
                                        className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        onChange={event => setShouldRemember(event.target.checked)}
                                    />

                                    <span className="ml-2 font-size-12">
                                Հիշել ինձ
                            </span>
                                </label>
                            </div>
                            <Button className="btn btn-block  btn-main p-2 mt-3">Մուտք</Button>
                            <div className="d-flex items-center flex-column justify-end text-center mt-4">
                                <Link href="/forgot-password">
                                    <a className="underline text-sm w-100 hover:text-gray-900">
                                        Մոռացել եք գաղտնաբառը?
                                    </a>
                                </Link>
                                <Link href="/register">
                                    <a className="underline mt-5 text-sm  hover:text-gray-900">
                                        Գրանցված չեք? <span className={"ml-3 text-main text-underline"}>Ստեղծել հաշիվ</span>
                                    </a>
                                </Link>


                            </div>
                        </form>
                    </AuthCard>


                </div>
                <LoginFooter />
            </div>
            <Footer />
        </GuestLayout>
    );
};

export default Login;
