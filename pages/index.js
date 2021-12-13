import { useState, useEffect } from "react";
import Card from "components/Card";
import Head from "next/head";

const Index = ({ countriesList }) => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setCountries(
      countriesList.filter((country) => {
        return country.name.common.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search]);
  return (
    <>
      <Head>
        <title>Countries By SciDroid</title>
        <link rel="icon" href="https://link.scidroid.me/avatar.png" />
        <meta property="og:title" content="Countries By SciDroid" />
        <meta
          property="og:description"
          content="It's a SUPER simple country searching app."
        />
      </Head>
      <main>
        <section className="flex flex-col items-center justify-between">
          <h1 className="text-6xl font-extrabold m-4 text-center">
            Countries of the world!
          </h1>
          <input
            type="text"
            className="border text-2xl font-bold p-1 text-center border-zinc-200 rounded"
            placeholder="Country"
            onChange={(event) => setSearch(event.target.value)}
          />
        </section>
        <section className="flex flex-wrap items-center justify-around">
          {countries.map((country) => (
            <Card name={country.name.common} image={country.flags.png} />
          ))}
        </section>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countriesList = await res.json();

  return {
    props: {
      countriesList,
    },
  };
};

export default Index;
