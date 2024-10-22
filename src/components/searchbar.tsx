const SearchBar = () => {
  return (
    <div className="flex flex-col justify-between h-screen p-10 text-3xl">
    <header className="flex flex-col w-full gap-5">
      <h1 className="text-4xl font-semibold">PolitiScope</h1>
      <form id="search">
        <input
          id="city"
          name="city"
          className="w-full p-4 border-2"
          type="text"
          placeholder="Search for a political topic you'd like to explore further"
        />
      </form>
  </header>
  </div>
  );
};
export default SearchBar;