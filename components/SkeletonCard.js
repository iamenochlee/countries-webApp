export const SkeletonCard = () => {
  return (
    <>
      <div className="w-80 mx-auto sm:w-full  animate-pulse justify-center space-x-1 rounded-md border mb-10  sm:mb-0 pb-6 ">
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
