const Error: React.FC = () => {

    return (
        <div className="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2">
            <div className="flex flex-col gap-4">
                <img src="/images/404.jpg" alt="Page 404" className="w-[200px] h-[200px] rounded-sm object-cover" />
                <div className="flex flex-col gap-1 items-center">
                    <h1>Oups tu t'es perdu ?</h1>
                    <a href="/" className="underline text-[#4169E1]">La page d'accueil c'est ici !</a>
                </div>
            </div>
        </div>
    )
}

export default Error;