import Contact from "./contact.feature";

const Contacts: React.FC = () => {

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg">Restons en contact !</h2>
            <p>Si vous avez d’autres questions sur la formation, l’alternance, la vie étudiante/apprentie ou juste envie de boire une bière alors voici nos contacts :</p>
            <div className="flex flex-col gap-4">
            <Contact fullName="Baptiste BRONSIN" catchPhrase="Je suis en DO4 et j’aime les ambrées ! 🍻" image="/images/baptiste_bronsin.jpg" linkedIn="https://www.linkedin.com/in/baptiste-bronsin" />
            <Contact fullName="Sarah THEOULLE" catchPhrase="Sheep huntress and DO4" image="/images/sarah_theoulle.png" linkedIn="https://www.linkedin.com/in/stheoulle/" />
            </div>
        </div>
    )
}

export default Contacts;