const Card = ({ name, image }) => {
  return (
    <div className="w-96 m-4 flex flex-col items-center">
      <h2 className="text-xl text-center font-semibold m-2">{name}</h2>
      <img className="w-80 h-52" src={image} alt={name} />
    </div>
  );
};

export default Card;
