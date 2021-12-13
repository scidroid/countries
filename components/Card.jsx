import Image from "next/image";

const Card = ({ name, image }) => {
  return (
    <article className="w-96 m-4 flex flex-col items-center">
      <h2 className="text-xl text-center font-semibold m-2">{name}</h2>
      <Image src={image} alt={name} width="320" height="208" loading="lazy" />
    </article>
  );
};

export default Card;
