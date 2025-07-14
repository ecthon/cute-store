import {
    Rocket,
    SatelliteDish,
    ShieldCheck,
    Mail,
    MapPin,
    PlaneTakeoff,
    Github,
    Twitter
} from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-white text-zinc-700 pt-10 pb-6 px-6 border-t border-zinc-200">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                <div>
                    <h3 className="text-xl font-bold text-black flex items-center gap-2 group">
                        <Rocket
                            size={20}
                            className="transition duration-300 group-hover:drop-shadow-[0_0_6px_#0ea5e9] text-sky-500"
                        />
                        Base²²
                    </h3>
                    <p className="text-sm mt-2 text-zinc-600">
                        Desenvolvendo soluções de software para qualquer planeta.
                        Sua base digital além da Terra.
                    </p>

                    {/* Redes sociais */}
                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://github.com/seuusuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 hover:text-black hover:scale-110"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://twitter.com/seuusuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition duration-300 hover:text-sky-500 hover:scale-110"
                        >
                            <Twitter size={20} />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-md font-semibold mb-2 flex items-center gap-2 group">
                        <PlaneTakeoff
                            size={18}
                            className="transition duration-300 group-hover:scale-110 group-hover:text-violet-500"
                        />
                        Galáxia de Links
                    </h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:underline">Missão</a></li>
                        <li><a href="#" className="hover:underline">Produtos</a></li>
                        <li><a href="#" className="hover:underline">Estação Base</a></li>
                        <li><a href="#" className="hover:underline">Contato</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-md font-semibold mb-2 flex items-center gap-2 group">
                        <ShieldCheck
                            size={18}
                            className="transition duration-300 group-hover:text-emerald-500 group-hover:scale-110"
                        />
                        Documentos Estelares
                    </h4>
                    <ul className="space-y-1 text-sm">
                        <li><a href="#" className="hover:underline">Termos de uso</a></li>
                        <li><a href="#" className="hover:underline">Política de privacidade</a></li>
                        <li><a href="#" className="hover:underline">LGPD Estelar</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-md font-semibold mb-2 flex items-center gap-2 group">
                        <SatelliteDish
                            size={18}
                            className="transition duration-300 group-hover:text-yellow-500 group-hover:scale-110"
                        />
                        Contato Espacial
                    </h4>
                    <p className="text-sm flex items-center gap-2 group">
                        <Mail
                            size={14}
                            className="transition duration-300 group-hover:text-sky-500 group-hover:drop-shadow-[0_0_4px_#0ea5e9]"
                        />
                        contato@base22.space
                    </p>
                    <p className="text-sm flex items-center gap-2 group">
                        <MapPin
                            size={14}
                            className="transition duration-300 group-hover:text-pink-500 group-hover:scale-110"
                        />
                        Centro de Comando: Terra • AM-03
                    </p>
                    <p className="text-sm mt-2">+55 (92) 99999-0000</p>
                </div>
            </div>

            <div className="border-t border-zinc-200 mt-4 pt-4 text-sm text-center text-zinc-500">
                <p>&copy; {new Date().getFullYear()} <b>Base²²</b>. Todos os direitos reservados em todos os planetas.</p>
                <p className="mt-1">Desenvolvido por <b>@ecthon</b> com 💻, ☕ e um toque de poeira cósmica.</p>
            </div>
        </footer>
    );
}
