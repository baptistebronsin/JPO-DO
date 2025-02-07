import Activity from "./feature/activity.feature";
import Contacts from "./feature/contacts.feature";

const App: React.FC = () => {
    const domainName: string = `https://${window.location.hostname}`;

    return (
        <template className='flex justify-center py-6 px-4'>
            <div className='max-w-7xl w-full flex flex-col gap-8'>
                <h1 className="text-lg">Bienvenue sur la page de la Journée Portes Ouvertes de la formation d’ingénieur DevOps 👋🏼</h1>
                <p>Ce site web est accessible depuis le lien <a href={domainName} rel="Lien vers le site de présentation de l'activité" className="underline text-[#4169E1]">{ domainName }</a></p>
                <Activity />
                <Contacts />
            </div>
        </template>
    );
}

export default App;