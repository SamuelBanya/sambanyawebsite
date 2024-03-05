const Sidebar = () => {
  return (
    <>
      <h1>Sam Banya</h1>
      <h1>
        <a href="www.sambanya.com/links">Links</a>
      </h1>
      <a
        href="www.sambanya.com/links"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          Links{" "}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Access all Sam Banya's links in a Linktree style format
        </p>
      </a>
      <h1>
        <a href="www.sambanya.com/art">Art</a>
      </h1>
      <h1>
        <a href="www.sambanya.com/music">Music</a>
      </h1>
    </>
  );
};
