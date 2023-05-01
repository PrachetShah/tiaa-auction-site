const Card = ({ data, theme }) => {
  const { t } = useTranslation();
  const [openMap, setOpenMap] = useState(false);
  const [openView, setOpenView] = useState(false);

  const cancelButtonRef = useRef(null);

  return (
    <div
      key={data.id}
      className="w-full rounded-xl shadow-lg border relative bg-gray-100"
    >
      <img
        className="rounded-t-xl h-[35vh] w-full"
        src={data.image_url}
        alt=""
      />
      <div className="px-4 py-6">
        <h1 className="text-gray-600 text-xl font-bold mb-2">{t(data.name)}</h1>
        <h1 className="text-gray-400 text-sm mb-4 flex items-center gap-2">
          <HiOutlineLocationMarker className="text-lg" /> {t(data.location)}
        </h1>
        {/* <div className="border-t border-b p-3 flex justify-between items-center">
          <h1 className="text-gray-400"> Date :</h1>
          <h1 className="text-gray-600 text-2xl font-bold">{data.date}</h1>
        </div> */}
        <h1 className="text-sm text-gray-600 py-4">
          Rate : {parseInt(Math.abs(data.latitude % 10))}/10
        </h1>
        <div className="flex justify-between">
          <button
            onClick={() => setOpenView(true)}
            className={`flex items-center gap-2 text-white font-semibold uppercase rounded-full px-6 py-2 ${
              theme == "emerald"
                ? "bg-emerald-500"
                : theme == "amber"
                ? "bg-amber-500"
                : theme == "sky"
                ? "bg-sky-500"
                : theme == "red"
                ? "bg-red-500"
                : theme == "violet"
                ? "bg-violet-500"
                : "bg-purple-500"
            }`}
          >
            <BiMapPin /> View
          </button>
        </div>
      </div>
      <Transition.Root show={openMap} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenMap}
        >
          <div className="fixed inset-0 z-10">
            <div className="flex min-h-screen min-w-screen items-end justify-center text-center sm:items-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-[70vw]">
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => setOpenMap(false)}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <Transition.Root show={openView} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenView}
        ></Dialog>
      </Transition.Root>
    </div>
  );
};

export default Card;
