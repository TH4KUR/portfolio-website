import Heading from './Heading';

const Card = () => {
  return (
    <div className="py-3 px-2 bg-dark-4 h-full shadow shadow-slate-200">
      <img src="/image.png" />
      <h5 className="text-gray-200 text-xl">SiiS Homepage</h5>
      <p className="text-gray-500 text-lg leading-none">
        Landing Page for a company called SiiS.
      </p>
    </div>
  );
};

export default Card;
