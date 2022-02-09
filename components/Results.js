import { Movie } from "./Movie";

export const Results = ({data}) => {
  return <div className="px-5 my-10 flex flex-wrap gap-5 justify-center">
      {
          data.results.map((doc,index) => (
              <Movie key={index} doc ={doc}/>
          ) )
      }
  </div>;
};
