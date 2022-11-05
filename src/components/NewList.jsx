import React from "react";

const NewList = ({
  category,
  title,
  desc,
  source_id,
  pubDate,
  image_url,
  link,
}) => {
  return (
    <>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          {image_url && (
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src={image_url}
              alt="blog"
            />
          )}

          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {category}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {title}
            </h1>
            <p className="leading-relaxed mb-3">
              {desc ? desc.slice(0, 80) + "..." : ""}
            </p>
            <div className="flex items-center flex-wrap ">
              <a
                href={link}
                target={"_blank"}
                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
              >
                Read More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 uppercase mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-base pr-3 py-1 border-r-2 border-gray-200">
                {source_id}
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                {pubDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewList;
