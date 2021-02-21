const apiKey = "4b05f27c6e2702dbc200446f68bb387b";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${apiKey}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${apiKey}&language=en-US`,
  fetchDocumentaries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
  fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_newtworks=213`
};

export default requests;
