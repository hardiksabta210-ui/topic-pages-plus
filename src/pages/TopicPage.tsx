import { useParams, Navigate } from "react-router-dom";
import { getTopicBySlug } from "@/data/topics";
import TopicPageTemplate from "@/components/topic/TopicPageTemplate";

const TopicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const topic = slug ? getTopicBySlug(slug) : undefined;

  if (!topic) {
    return <Navigate to="/" replace />;
  }

  return <TopicPageTemplate topic={topic} />;
};

export default TopicPage;
