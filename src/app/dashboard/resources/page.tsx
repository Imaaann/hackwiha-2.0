import TagSelect from "@/components/TagSelect";

function Home() {
  return (
    <div className="mt-9 ml-12 flex flex-col gap-6 ">
      <div className="flex flex-row gap-4 px-10">
        <h1 className="text-3xl">Browse Resources:</h1>
        <input
          type="Text"
          className="text-md px-2 py-0.5 bg-background border border-primary rounded-full w-xl text-2xl"
          placeholder="Search..."
        />
      </div>
      <TagSelect />
    </div>
  );
}

export default Home;
