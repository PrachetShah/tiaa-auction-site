import React from "react";
import ImageUploading from "react-images-uploading";

function AddItem() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div class="antialiased">
      <div class="bg-white shadow-sm sticky top-0">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
          <div class="flex items-center justify-between md:justify-start">
            <button
              type="button"
              class="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center"
            >
              <svg
                class="text-gray-500 w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <a href="#" class="font-bold text-gray-700 text-2xl">
              WinWise
            </a>

            <div class="hidden md:flex space-x-3 flex-1 lg:ml-8">
              <a
                href="#"
                class="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                Home
              </a>
              <a
                href="#"
                class="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                Profile
              </a>
              <a
                href="#"
                class="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                Add Product
              </a>
              <a
                href="#"
                class="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                Auctions
              </a>
              <a
                href="#"
                class="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
              >
                More
              </a>
            </div>

            <div class="flex items-center space-x-4">
              <div class="relative hidden md:block">
                <input
                  type="search"
                  class="pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
                  placeholder="Search"
                />
                <svg
                  class="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <a
                href="#"
                class="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
              >
                <svg
                  class="h-6 w-6 leading-none text-gray-300 stroke-current"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span class="pl-1 text-gray-500 text-md">0</span>
              </a>

              <button
                type="button"
                class="hidden md:block w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center"
              >
                <img
                  src="https://avatars.dicebear.com/api/bottts/2.svg"
                  alt="bottts"
                  width="28"
                  height="28"
                  class="rounded-lg mx-auto"
                />
              </button>
            </div>
          </div>

          <div class="relative md:hidden">
            <input
              type="search"
              class="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none"
              placeholder="Search"
            />

            <svg
              class="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="py-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div x-data="{ image: 1 }" x-cloak>
                <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                  <div
                    x-show="image === 1"
                    class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                  >
                    {/* <input type="image" class="text-5xl" /> */}
                    <ImageUploading
                      multiple
                      value={images}
                      onChange={onChange}
                      maxNumber={maxNumber}
                      dataURLKey="data_url"
                    >
                      {({
                        imageList,
                        onImageUpload,
                        onImageRemoveAll,
                        onImageUpdate,
                        onImageRemove,
                        isDragging,
                        dragProps,
                      }) => (
                        // write your building UI
                        <div className="upload__image-wrapper flex flex-col">
                          <button
                            class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                            style={isDragging ? { color: "red" } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                          >
                            Click or Drop Image
                          </button>
                          &nbsp;
                          <button
                            onClick={onImageRemoveAll}
                            class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                          >
                            Remove all images
                          </button>
                          {imageList.map((image, index) => (
                            <div key={index} className="image-item py-2">
                              <img src={image["data_url"]} alt="" width="100" />
                              <div className="image-item__btn-wrapper py-2">
                                <button
                                  onClick={() => onImageUpdate(index)}
                                  class="h-14 mx-2 px-6 font-semibold rounded-xl bg-indigo-300 hover:bg-indigo-200 text-white"
                                >
                                  Update
                                </button>
                                <button
                                  onClick={() => onImageRemove(index)}
                                  class="h-14 mx-2 px-6 py-2 font-semibold rounded-xl bg-indigo-300 hover:bg-indigo-200 text-white"
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </ImageUploading>
                  </div>
                </div>

                {/* <div class="flex -mx-2 mb-4">
                  <template x-for="i in 4">
                    <div class="flex-1 px-2">
                      <button class="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                        <span x-text="i" class="text-2xl"></span>
                      </button>
                    </div>
                  </template>
                </div> */}
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                Product Name (Add here)
              </h2>
              {/* <p class="text-gray-500 text-sm">
                By{" "}
                <a href="#" class="text-indigo-600 hover:underline">
                  ABC Company
                </a>
              </p> */}

              <div class="flex items-center space-x-4 my-4">
                <div>
                  <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span class="text-indigo-400 mr-1 mt-1">$</span>
                    <input class="font-bold text-indigo-600 text-3xl w-24" />
                  </div>
                </div>
                <div class="flex-1">
                  <p class="text-green-500 text-xl font-semibold">
                    Starting Bid
                  </p>
                </div>
              </div>
              <p class="text-gray-500">Add Product Description</p>
              <div class="h-24 rounded-lg  flex">
                <input
                  type="text"
                  class="border-2 w-full font-bold text-gray-400 text-lg px-2"
                />
              </div>

              <div class="flex py-4 space-x-4">
                <div class="relative">
                  <div class="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select class="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <svg
                    class="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>

                <button
                  type="button"
                  class="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Add for Auction
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem;
