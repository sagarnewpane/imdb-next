import Results from '@/app/components/Results';

async function page({params}) {

  const term = params.term;
  const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.
    API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`);

    console.log(`https://api.themoviedb.org/3/search/multi?api_key=${process.env.
    API_KEY}&language=en-US&query=${term}&page=1&include_adult=false`);

    const data = await res.json();
    const results = data.results;

    return (
      <div>
        {
          results && results.length === 0 && <h1>NO results found.</h1>
        }

        {
          results && <Results results={results} />
        }
      </div>
  );
}

export default page