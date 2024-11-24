import { useQuery } from "@tanstack/react-query";

const useBlog = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const response = await fetch<GetBlogResponseType>("/blog");
      return response?.data;
    },
  });
  return { isLoading, data, error };
};

export default useBlog;
