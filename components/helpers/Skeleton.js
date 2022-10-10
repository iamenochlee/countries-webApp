export const SkeletonCard = () => {
  return (
    <>
      <div className="w-72 mx-auto sm:w-full mt-7 animate-pulse justify-center space-x-1 rounded-md border mb-10  sm:mb-0 pb-6 ">
        <div className="w-full">
          <div className="w-full h-48 bg-skin-skeleton"></div>
          <div>
            <div className="py-4 px-6 mb-3 flex justify-between items-start ">
              <div className="flex flex-col gap-3">
                <h2 className="text-xl text-gray-500 font-extrabold mb-2">
                  o o o o o
                </h2>
                <div className="h-3 bg-skin-skeleton w-40 2xl:w-52 rounded"></div>
                <div className="h-3 bg-skin-skeleton w-40 2xl:w-52 rounded"></div>
                <div className="h-3 bg-skin-skeleton w-40 2xl:w-52 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const SkeletonCountry = () => {
  return (
    <div className="w-full mt-5 flex flex-col animate-pulse md:flex-row gap-4 justify-between lg:justify-between lg:gap-36 m  md:w-full lg:items-center md:gap-20 md:items-center mx-auto md:pr-12   lg:pr-0 md:mb-0 mb-12 relative">
      <div className="my-3 md:my-0 w-full h-64 lg:h-80 bg-skin-skeleton 2xl:h-96"></div>
      <div className="flex flex-col gap-3 ml-5">
        <h2 className="lg:mb-5 text-2xl text-gray-500 font-extrabold mb-2">
          o o o o o o
        </h2>
        <div className="flex flex-col gap-8 ">
          <div
            className="flex flex-col gap-8 lg:flex-row 
              lg:gap-16 xl:gap-48 lg:mb-9 lg:justify-between">
            <ul className="flex flex-col gap-3.5">
              <div className="h-3 bg-skin-skeleton w-52 2xl:w-72 rounded"></div>
              <div className="h-3 bg-skin-skeleton w-52 2xl:w-72 rounded"></div>
              <div className="h-3 bg-skin-skeleton w-52 2xl:w-72 rounded"></div>
              <div className="h-3 bg-skin-skeleton w-52 2xl:w-72 rounded"></div>
              <div className="h-3 bg-skin-skeleton w-52 rounded"></div>
              <div className="h-3 bg-skin-skeleton w-52 rounded"></div>
            </ul>

            <ul className="flex flex-col gap-3.5">
              <div className=" h-3 bg-skin-skeleton w-52 rounded"></div>
              <div className=" h-3 bg-skin-skeleton w-52 rounded"></div>
              <div className=" h-3 bg-skin-skeleton w-52 rounded"></div>
            </ul>
          </div>
          <div className=" lg:flex lg:justify-between lg:items-center md:absolute lg:static md:left-0 md:-bottom-24">
            <div className="w-72 h-5 2xl:w-8/12 bg-skin-skeleton"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
