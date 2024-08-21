const Modal = ({ closeModal, data }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div class="flex justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Daraxt {data.id}
            </h3>
            <button
              onClick={closeModal}
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div className="sm:flex sm:items-start">
            <div className="">
              <div className="mt-2">
                <img
                  src="https://st3.depositphotos.com/21546710/33299/i/450/depositphotos_332999048-stock-photo-tree-set-isolated-on-white.jpg"
                  alt=""
                />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <div>ID raqami:</div>
                    <div className="text-green-500">
                      {" "}
                      {data.id} {data.id_num}
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <div>Vilyat:</div>
                    <div className="text-green-500"> {data.region}</div>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <div>Tuman</div>
                    <div className="text-green-500">
                      {" "}
                      {data.country} 
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <div>Daraxt turi</div>
                    <div className="text-green-500">
                      {" "}
                      {data.type_of_tree}
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <div>Ma'sul tashkilot</div>
                    <div className="text-green-500">
                      {" "}
                      {data.responsible_organization}
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <div>Manzil</div>
                    <div className="text-green-500">
                      {" "}
                      {data.address}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
