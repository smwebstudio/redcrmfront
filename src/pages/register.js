import ApplicationLogo from "@/components/ApplicationLogo";
import AuthCard from "@/components/AuthCard";
import Button from "@/components/Button";
import GuestLayout from "@/components/Layouts/GuestLayout";
import Input from "@/components/Input";
import InputError from "@/components/InputError";
import Label from "@/components/Label";
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { useState } from "react";
import Topbar from "@/components/React/global-components/topbar";
import Navbar from "@/components/React/global-components/navbar";
import Footer from "@/components/React/global-components/footer";
import LoginFooter from "@/components/LoginFooter";

const Register = () => {
    const { register } = useAuth({
        middleware: "guest",
        redirectIfAuthenticated: "/"
    });

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);

    const submitForm = event => {
        event.preventDefault();

        register({ name, email, password, password_confirmation: passwordConfirmation, setErrors });
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

                        <h5 className="mb-5 text-left text-dark"><strong>Գրանցվել</strong></h5>
                        <form onSubmit={submitForm}>
                            {/* Name */}
                            <div className="d-flex flex-column">
                                <Label htmlFor="name"><p>Անուն <span className={"text-main"}>*</span></p></Label>
                                <Input
                                    id="name"
                                    type="text"
                                    value={name}
                                    className="input-main"
                                    onChange={event => setName(event.target.value)}
                                    required
                                    autoFocus
                                />

                                <InputError messages={errors.name} className="mt-2" />
                            </div>

                            <div className="d-flex flex-column">
                                <Label htmlFor="email"><p>Էլ․ հասցե <span className={"text-main"}>*</span></p></Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    className="input-main"
                                    onChange={event => setEmail(event.target.value)}
                                    required
                                />

                                <InputError messages={errors.email} className="mt-2" />
                            </div>

                            <div className="d-flex flex-column">
                                <Label htmlFor="password"><p>Գաղտնաբառ <span className={"text-main"}>*</span></p></Label>

                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    className="input-main"
                                    onChange={event => setPassword(event.target.value)}
                                    required
                                    autoComplete="new-password"
                                />

                                <InputError messages={errors.password} className="mt-2" />
                            </div>

                            <div className="d-flex flex-column">
                                <Label htmlFor="passwordConfirmation"><p>Կրկնել գաղտնաբառը <span className={"text-main"}>*</span></p></Label>
                                <Input
                                    id="passwordConfirmation"
                                    type="password"
                                    value={passwordConfirmation}
                                    className="input-main"
                                    onChange={event =>
                                        setPasswordConfirmation(event.target.value)
                                    }
                                    required
                                />

                                <InputError messages={errors.password_confirmation} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <Button className="btn btn-block btn-main">Գրանցվել</Button>
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

export default Register;
