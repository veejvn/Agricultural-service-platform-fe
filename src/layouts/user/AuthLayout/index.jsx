import bg from "@assets/images/background-auth.png"

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen relative overflow-hidden">
            <img
                src={bg}
                alt="background"
                className="absolute inset-0 w-full h-full object-fill z-0"
            />
            <div className="relative z-10">{children}</div>
        </div>

    );
}

export default AuthLayout;