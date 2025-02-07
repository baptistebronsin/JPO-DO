import { Gitlab } from "lucide-react";

const Footer: React.FC = () => {
    const gitlabRepo: string = "https://gitlab.com/baptiste.bronsin/jpo-do";

    return (
        <footer className="flex flex-row gap-2 items-center">
            <Gitlab color="#FC6D26" />
            <p>Dépôt Gitlab : <a href={ gitlabRepo } rel="Lien du dépôt Gitlab utilisé" target="_blank" className="underline text-[#4169E1]">{ gitlabRepo }</a></p>
        </footer>
    )
}

export default Footer;