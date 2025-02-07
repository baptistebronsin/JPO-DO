import Activity from "./feature/activity.feature";
import Contacts from "./feature/contacts.feature";
import WebSiteUrl from "./feature/web-site-url.feature";

const App: React.FC = () => {

    return (
        <template className='flex justify-center py-6 px-4'>
            <div className='max-w-7xl w-full flex flex-col gap-8'>
                <h1 className="text-lg">Bienvenue sur la page de la Journée Portes Ouvertes de la formation d’ingénieur DevOps 👋🏼</h1>
                <WebSiteUrl />
                <Activity />
                <Contacts />
            </div>
        </template>
    );
}

export default App;