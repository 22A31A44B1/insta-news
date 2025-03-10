const NewsItems = ({ title, description, src, url }) => {
  const defaultImage =
    "https://www.shutterstock.com/shutterstock/videos/1048953937/thumb/1.jpg?ip=x480"; // Default image URL

  return (
    <div className="card h-100 shadow-lg rounded">
      <img
        src={src || defaultImage} // Use default image if `src` is missing
        className="card-img-top"
        alt="News"
        style={{ height: "180px", objectFit: "cover" }}
        onError={(e) => (e.target.src = defaultImage)} // Handle broken images
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title || "No Title Available"}</h5>
        <p className="card-text flex-grow-1">
          {description || "No description available for this article."}
        </p>
        <a
          href={url || "#"}
          className="btn btn-primary mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItems;
