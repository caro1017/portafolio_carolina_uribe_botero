/* eslint-disable react/prop-types */
const TimeLineBar = ({ timeLineData }) => {
  return (
    <>
      <div className="px-10">
        <ol className="capitalize relative border-s-2 dark:border-blueOpacity border-greyOpacity">
          <li className="mb-4 ms-4">
            
            {timeLineData.map((data) => (
              <div key={data.id}>
                <div className="absolute w-2 h-2 bg-grey dark:bg-blue rounded-full mt-1.5 -start-1.5 border border-grey dark:border-blue"></div>
                <time className="mb-1 text-sm font-normal leading-none text-greyOpacity w-96">
                  {data.date}
                </time>

                <h3 className="font-semibold mb-1 text-sm lg:text-base text-blue">
                  {data.institution}
                </h3>

                <p className="mb-4 text-sm lg:text-base font-bold text-grey">
                  {data.rol}
                </p>

                <p className="mb-4 text-sm font-normal text-grey normal-case">
                  {data.detail}
                </p>
              </div>
            ))}
          </li>
        </ol>
      </div>
    </>
  );
};

export default TimeLineBar;
