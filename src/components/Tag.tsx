function Tag({ name }: { name: string }) {
  return (
    <div className="text-md px-2 py-0.5 bg-background border border-primary rounded-full w-fit">
      {name}
    </div>
  );
}

export default Tag;
