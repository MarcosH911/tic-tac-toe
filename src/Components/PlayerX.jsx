function PlayerX() {
  return (
    <div className="relative flex h-full items-center justify-center">
      <div className="absolute h-5/6 w-1/6 rotate-45 rounded-full bg-teal-200"></div>
      <div className="absolute h-5/6 w-1/6 -rotate-45 rounded-full bg-teal-200"></div>
    </div>
  );
}

export default PlayerX;
