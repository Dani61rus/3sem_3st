export function Footer(){
    return (
        <footer className="bg-purple-400 text-white py-4 mt-10">
            <div className="container mx-auto px4 flex justify-between items-center text-sm">
                <span>© {new Date().getFullYear()}</span>
                <a
                    href="https://github.com/Dani61rus/3sem_3st"
                    className="text-gray-200 hover:text-white transition-colors duration-200"
                >
                Repository
                </a>
            </div>
        </footer>
    )
}
