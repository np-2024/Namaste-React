const withOpenStatus = (RestoCard) => {
  return (props) => {
    return (
      <div className="flex flex-col relative" data-testid="resCard">
        <button className="w-1/4 p-1 bg-white font-medium text-xs z-20 absolute m-4">
          Open
        </button>
        <RestoCard {...props} />
      </div>
    );
  };
};

export default withOpenStatus;
