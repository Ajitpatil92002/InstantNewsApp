import React, { useEffect } from "react";
import NewList from "./NewList";
import { useState } from "react";
import Loading from "./Loading";

const News = ({ category }) => {
  const [News_Data, setNews_Data] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  const [page, setPage] = useState(0);
  const [nextPage,setNextPage] = useState(null);

  const URL = `https://newsdata.io/api/1/news?apikey=pub_1313412bae4f1565a138983a939197b33f26e&country=in&language=en`;

  useEffect(() => {
    const fetchData = async (URL) => {
      setLoading(true);
      const resp = await fetch(URL);
      const data = await resp.json();
      if (!data) {
        setLoading(false);
        setError(true);
        return;
      } else {
        if (data.nextPage === null) {
          return;
        } else {
          setNews_Data((prev) => [...prev, ...data.results]);
          document.title = `World Wide News : ${category}`;
          setError(false);
          setNextPage(data.nextPage);
          setLoading(false);
          return;
        }
      }
    };
    fetchData(URL + `&page=${page !== 0 && page }&category=${category}`);
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setPage(nextPage);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-10  mx-auto">
          <h2 class="tracking-widest text-4xl uppercase title-font font-medium text-black mb-4 text-center">
            {category} News
          </h2>
          <div className="flex flex-wrap m-4">
            {err
              ? "Something Error"
              : News_Data?.map((news, i) => {
                  return (
                    <NewList
                      key={i}
                      title={news.title}
                      category={news.category}
                      image_url={news.image_url}
                      pubDate={news.pubDate}
                      link={news.link}
                      source_id={news.source_id}
                      desc={news.description}
                    />
                  );
                })}
          </div>
          {loading && <Loading />}
        </div>
      </section>
    </>
  );
};

export default News;
