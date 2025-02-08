import Contact from "./contact.feature";

const Contacts: React.FC = () => {

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg">Restons en contact !</h2>
            <p>Si vous avez d’autres questions sur la formation, l’alternance, la vie étudiante/apprentie ou juste envie de boire une bière alors voici nos contacts :</p>
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6">
                <Contact fullName="Baptiste BRONSIN" catchPhrase="Je suis en DO4 et j’aime les ambrées ! 🍻" image="/images/people/baptiste_bronsin.jpg" linkedIn="https://www.linkedin.com/in/baptiste-bronsin" />
                <Contact fullName="Sarah THEOULLE" catchPhrase="Sheep huntress and DO4" image="/images/people/sarah_theoulle.png" linkedIn="https://www.linkedin.com/in/stheoulle/" />
                <Contact fullName="Hugo DU PELOUX" catchPhrase="DO3 le jour, 3DO la nuit" image="/images/people/hugo_du_peloux.png" linkedIn="https://www.linkedin.com/in/hugo-du-peloux/" />
                <Contact fullName="Pierre-Louis LECLERC" catchPhrase="DO3 bienveillant et master mouton ! 🐑" image="/images/people/pierre-louis_leclerc.png" linkedIn="https://www.linkedin.com/in/pierre-louis-leclerc/" />
            </div>
        </div>
    )
}

export default Contacts;