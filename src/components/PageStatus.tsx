type Props = {
  text: string;
  className?: string;
};

const PageStatus: React.FC<Props> = ({ text, className = "" }) => {
  return (
    <div
      className={`flex flex-grow items-center justify-center h-screen ${className}`}
    >
      <p className="mb-20">{text}</p>
    </div>
  );
};

export default PageStatus;
