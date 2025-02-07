import { Activity, Contacts, Footer, WebSiteUrl } from "./feature";

const App: React.FC = () => {

    return (
        <template className='flex justify-center py-6 px-4'>
            <div className='max-w-7xl w-full flex flex-col gap-12'>
                <h1 className="text-lg">Bienvenue sur la page de la Journée Portes Ouvertes de la formation d’ingénieur DevOps 👋🏼</h1>
                <WebSiteUrl />
                <Activity />
                <Contacts />
                <Footer />
            </div>
        </template>
    );
}

export default App;