import { ClipLoader } from "react-spinners";

const Loading = (props) => {
  return (
    <section className="flex flex-col justify-center items-center gap-5 h-screen max-h-[86vh]">
      <h2 className="font-bold text-xl text-evening-blue">{props.text}</h2>
      <ClipLoader size={50} color="#03A64A" />
    </section>
  );
};

export default Loading;
