import Image from "next/image";
import SearchInput from "./components/SearchInput";

export default function Home() {
  return (
    <div className="grid content-center flex items-center justify-center h-screen">
      <div className="topic-bg mt-8">
        <h1 className="text-center text-7xl p-8 text-emerald-50 rowdies-bold">
          Welcome to the Search Pokémons Web!
        </h1>
      </div>
      <SearchInput />
    </div>
  );
}
