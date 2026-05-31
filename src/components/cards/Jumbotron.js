export default function Jumbotron({
  title = "Shop smarter",
  subTitle = "Discover products, compare details, and checkout with confidence.",
}) {
  return (
    <div className="jumbotron">
      <div className="jumbotron-content">
        <p className="eyebrow">Modern Ecommerce</p>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
    </div>
  );
}
