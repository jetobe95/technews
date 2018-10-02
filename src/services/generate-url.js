function generateurl({ language = 'es', q}) {
  return `https://newsapi.org/v2/everything?language=es&q="${q}"&apiKey=60a49976bbd7461fabb075d1d4c35371`;
}
export default generateurl;
