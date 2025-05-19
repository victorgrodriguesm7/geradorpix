import Footer from "@/components/Footer";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Política de Privacidade</h1>
            <p className="mt-3 text-lg text-gray-600">Este site utiliza o Google Analytics para entender melhor como os visitantes interagem com o conteúdo e melhorar a experiência do usuário.</p>

            <section className="mt-3">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Coleta de Dados</h2>
                <p className="mt-4 text-lg text-gray-600">O Google Analytics coleta informações como:</p>
                <ul className="mt-4 space-y-4 list-disc">
                    <li className="flex items-start">
                        <p className="ml-3 text-base text-gray-600">&#9679; Páginas visitadas</p>
                    </li>
                    <li className="flex items-start">
                        <p className="ml-3 text-base text-gray-600">&#9679; Duração da visita</p>
                    </li>
                    <li className="flex items-start">
                        <p className="ml-3 text-base text-gray-600">&#9679; Tipo de dispositivo e navegador</p>
                    </li>
                    <li className="flex items-start">
                        <p className="ml-3 text-base text-gray-600">&#9679; Localização aproximada (com base no IP)</p>
                    </li>
                </ul>

                <p className="mt-4 text-lg text-gray-600">
                    Esses dados são coletados de forma anônima e não identificam diretamente o usuário.
                </p>
            </section>

            <section className="mt-3">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Uso dos Dados</h2>
                <p className="mt-3 text-lg text-gray-600">As informações coletadas são usadas exclusivamente para:</p>

                <ul className="mt-4 space-y-4 list-disc">
                    <li className="flex items-start">
                        <p className="ml-3 text-base text-gray-600">&#9679; Analisar o desempenho do site</p>
                    </li>
                    <li className="flex items-start">
                        <p className="ml-3 text-base text-gray-600">&#9679; Entender o comportamento dos visitantes</p>
                    </li>
                    <li className="flex items-start">
                        <p className="ml-3 text-base text-gray-600">&#9679; Melhorar o conteúdo e a navegação</p>
                    </li>
                </ul>
            </section>

            <section className="mt-2">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Cookies</h2>
                <p className="mt-3 text-lg text-gray-600">Este site utiliza cookies do Google Analytics para armazenar informações sobre sua visita. Você pode desativar os cookies nas configurações do seu navegador, se preferir.</p>
            </section>


            <section className="mt-2">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Compartilhamento de Dados</h2>
                <p className="mt-3 text-lg text-gray-600">Os dados coletados não são vendidos ou compartilhados com terceiros. Eles são armazenados e processados conforme os termos do Google Analytics e da Política de Privacidade do Google.</p>
            </section>


            <section className="mt-2">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Alterações</h2>
                <p className="mt-3 text-lg text-gray-600">Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente para estar ciente de quaisquer mudanças</p>
            </section>

            <p className="mt-4 text-lg text-gray-600">
                Última atualização: <strong className="text-gray-700 font-medium">19:00 19/05/2025</strong>
            </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
