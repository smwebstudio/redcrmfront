const AuthCard = ({ children }) => (
    <div className="container  flex flex-col items-center pt-20  ">


        <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            {children}
        </div>
    </div>
)

export default AuthCard
