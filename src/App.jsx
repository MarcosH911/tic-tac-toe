import IconO from "./Components/IconO";
import IconX from "./Components/IconX";
import Square from "./Components/Square";
import { useGame } from "./Context/GameContext";

function App() {
  const {
    game: { winsX, winsO },
  } = useGame();

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 bg-slate-600 sm:gap-5 md:gap-6">
      <div className="flex h-16 w-60 rounded-3xl bg-slate-900 sm:h-20 sm:w-80 md:h-24 md:w-96">
        <div className="flex w-1/2 items-center">
          <div className="h-full w-1/2">
            <IconX />
          </div>
          <p className="inline font-mono text-4xl text-teal-100 sm:text-5xl md:text-6xl">
            {winsX}
          </p>
        </div>
        <div className="flex w-1/2 items-center">
          <div className="h-full w-1/2">
            <IconO />
          </div>
          <p className="inline font-mono text-4xl text-teal-500 sm:text-5xl md:text-6xl">
            {winsO}
          </p>
        </div>
      </div>

      <div className="grid h-[20rem] w-[20rem] grid-cols-3 gap-3.5 rounded-3xl bg-slate-900 p-5 sm:h-[30rem] sm:w-[30rem] sm:gap-5 sm:p-7 md:h-[40rem] md:w-[40rem] md:gap-7 md:p-11">
        {Array(9)
          .fill()
          .map((_, i) => (
            <Square key={i} index={i} />
          ))}
      </div>
    </div>
  );
}

export default App;
