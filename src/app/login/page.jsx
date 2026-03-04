import LoginScreen from "@/components/auth/LoginScreen";

export default function LoginPage({ searchParams }) {
    const { error } = searchParams;

    return <LoginScreen error={error} />;
}
