import Inicio from "./components/inicio";
import Funcioanmento from "./components/funcioanmento";
import Sinais from "./components/sinais";
import Documentacao from "./components/documentacao";
import Integracao from "./components/integracao";
import ExemplodeUso from "./components/exedeUso";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center h-100vh ">
      <Inicio />
      <Funcioanmento />
      <Sinais />  
      <Documentacao />
      <Integracao />
      <ExemplodeUso />

    </div>
  );
}
