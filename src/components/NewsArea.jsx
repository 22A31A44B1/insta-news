import { useEffect, useState } from "react";
import NewsItems from "./NewsItems";

const NewsArea = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
          import.meta.env.VITE_API_KEY
        }`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.articles) {
          setArticles(data.articles);
        } else {
          console.error("No articles found");
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2 className="text-center">
        <span className="badge bg-danger">Latest News</span>
      </h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : articles.length === 0 ? (
        <p className="text-center">No news available</p>
      ) : (
        <div className="container mt-4">
          <div className="row">
            {articles.map((news, index) => (
              <div className="col-md-4 mb-3" key={index}>
                <NewsItems
                  title={news.title}
                  description={news.description}
                  src={news.urlToImage}
                  url={news.url}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsArea;
