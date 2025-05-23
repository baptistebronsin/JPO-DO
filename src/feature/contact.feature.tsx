import { Linkedin } from "lucide-react";
import React from "react";


interface ContactProps {
    fullName: string;
    catchPhrase: string;
    image: string;
    linkedIn: string;
}

const Contact: React.FC<ContactProps> = ({ fullName, catchPhrase, image, linkedIn }) => {

    return (
        <div className="flex flex-row gap-4">
            <img src={ image } alt={`Photo de ${fullName}`} className="w-[100px] h-[100px] rounded-sm object-cover" />
            <div className="flex flex-col justify-between">
                <div className="flex flex-col">
                    <p className="text-[#821980] text-lg">{ fullName }</p>
                    <p>{ catchPhrase }</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <Linkedin color="#0a66c2" />
                    <a href={ linkedIn } rel={`Lien LinkedIn vers le profil de ${fullName}`} target="_blank" className="text-[#4169E1]">Mon profil LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Contact;