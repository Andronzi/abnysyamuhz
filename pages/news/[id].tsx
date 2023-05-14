import {useGetNewsSingleQuery} from "../../services/news/newsRealApi";
import {useRouter} from "next/router";

const NewsPage = () => {
  const router = useRouter()
  const { id } = router.query

  const news = useGetNewsSingleQuery(id?.toString() || "1")?.data;
  return (
    <>
      <img
        className="object-cover w-full h-96 z-10"
        src={news?.ImageUrl}
      />
      <div className="flex flex-row">
        <div className="basis-1/2 z-20 -mt-16 ml-1">
          <p className="text-white text-5xl font-bold w-4/5 mb-8">
            {news?.Title}
          </p>
          <p className="text-white">
            {news?.Body}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsPage;
