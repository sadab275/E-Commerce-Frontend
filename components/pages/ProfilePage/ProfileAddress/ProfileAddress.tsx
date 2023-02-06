import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../../src/state/StateController";
import Select from "react-select";
import SharedAddNewAddress from "../../../shared/SharedAddNewAddress/SharedAddNewAddress";
interface Props {}

const ProfileAddress: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);
  const [form, setForm] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const style = {
    control: (base: any) => ({
      ...base,
      border: "1px solid rgb(239 239 239)",
      height: "50px",
      width: "100%",
      margin: "0",
      paddingLeft: "12px",
      paddingRight: "12px",
      fontSize: "13px",
      borderRadius: 0,
      // This line disable the blue border
      boxShadow: "none",
      cursor: "pointer",
      "&:hover": {
        border: "1px solid rgb(239 239 239)",
      },
    }),
  };

  const countryOptions = [
    { value: "bangladesh", label: "Bangladesh" },
    { value: "india", label: "India" },
    { value: "qatar", label: "Qatar" },
  ];
  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };
  return (
    <div className="item-body dashboard-wrapper w-full">
      <div className="w-[180px] h-[50px] mt-4 mb-5">
        <button
          onClick={() => setForm(true)}
          type="button"
          className="yellow-btn rounded"
        >
          <div className="w-full text-sm font-semibold">Add New Address</div>
        </button>
      </div>
      {!form ? (
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-[30px]">
          <div className="w-full bg-primarygray rounded p-5 border">
            <div className="flex justify-between items-center">
              <p className="title text-[22px] font-semibold">Address #1</p>
              <div className="flex space-x-2.5 items-center">
                <button
                  onClick={() => setForm(true)}
                  type="button"
                  className="border border-qgray text-qyellow w-[34px] h-[34px] rounded-full flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 17 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7768 5.95215C15.6991 6.9104 15.6242 7.84603 15.5471 8.78237C15.3691 10.9285 15.1917 13.0747 15.0108 15.2209C14.9493 15.9473 14.9097 16.6773 14.8065 17.3988C14.6963 18.1726 14.0716 18.7161 13.2929 18.7196C10.3842 18.7323 7.47624 18.7337 4.56757 18.7189C3.70473 18.7146 3.08639 18.0794 3.00795 17.155C2.78181 14.493 2.57052 11.8302 2.35145 9.16821C2.2716 8.19442 2.1875 7.22133 2.10623 6.24824C2.09846 6.15638 2.09563 6.06451 2.08998 5.95286C6.65579 5.95215 11.2061 5.95215 15.7768 5.95215ZM5.25375 8.05803C5.25234 8.05803 5.25163 8.05803 5.25022 8.05803C5.27566 8.4573 5.3011 8.85657 5.32583 9.25584C5.46717 11.5228 5.60709 13.7891 5.75125 16.0561C5.77245 16.3897 5.99081 16.6038 6.28196 16.6024C6.58724 16.601 6.80066 16.3636 6.8056 16.0159C6.80702 15.9339 6.80136 15.8512 6.79571 15.7692C6.65367 13.4789 6.51304 11.1886 6.36888 8.89826C6.33849 8.41702 6.31164 7.93507 6.26146 7.45524C6.22966 7.1549 6.0318 6.99732 5.73076 6.99802C5.44526 6.99873 5.24033 7.2185 5.23043 7.52873C5.22619 7.7054 5.24598 7.88207 5.25375 8.05803ZM12.6102 8.05521C12.6088 8.05521 12.6074 8.05521 12.606 8.05521C12.6152 7.89055 12.6321 7.7259 12.6307 7.56195C12.6286 7.24465 12.4399 7.02417 12.1622 6.99873C11.888 6.97329 11.6484 7.16268 11.5961 7.46443C11.5665 7.63756 11.5615 7.81494 11.5502 7.9909C11.4626 9.38799 11.3749 10.7851 11.2887 12.1822C11.2103 13.4499 11.1276 14.7184 11.0576 15.9869C11.0379 16.3431 11.2463 16.5819 11.5495 16.6003C11.8562 16.6194 12.088 16.4017 12.1099 16.0505C12.2788 13.3856 12.4441 10.7208 12.6102 8.05521ZM9.45916 11.814C9.45916 10.4727 9.45986 9.13147 9.45916 7.79091C9.45916 7.25101 9.28603 6.99449 8.92845 6.99661C8.56805 6.99802 8.40198 7.24819 8.40198 7.79586C8.40127 10.4664 8.40127 13.1369 8.40268 15.8074C8.40268 15.948 8.37088 16.1289 8.44296 16.2194C8.56946 16.3763 8.76591 16.5748 8.93198 16.5741C9.09805 16.5734 9.29309 16.3727 9.41746 16.2151C9.48955 16.124 9.45704 15.9431 9.45704 15.8032C9.46057 14.4725 9.45916 13.1432 9.45916 11.814Z"
                      fill="#EB5757"
                    ></path>
                    <path
                      d="M5.20143 2.75031C5.21486 2.49449 5.21839 2.2945 5.23747 2.09593C5.31733 1.25923 5.93496 0.648664 6.77449 0.637357C8.21115 0.618277 9.64923 0.618277 11.0859 0.637357C11.9254 0.648664 12.5438 1.25852 12.6236 2.09522C12.6427 2.2938 12.6462 2.49379 12.6582 2.73335C12.7854 2.739 12.9084 2.74889 13.0314 2.7496C13.9267 2.75101 14.8221 2.74677 15.7174 2.75172C16.4086 2.75525 16.8757 3.18774 16.875 3.81244C16.8742 4.43643 16.4078 4.87103 15.716 4.87174C11.1926 4.87386 6.66849 4.87386 2.14508 4.87174C1.45324 4.87103 0.986135 4.43713 0.985429 3.81314C0.984722 3.18915 1.45183 2.75525 2.14296 2.75243C3.15421 2.74677 4.16545 2.75031 5.20143 2.75031ZM11.5799 2.73335C11.5799 2.59625 11.5806 2.49096 11.5799 2.38637C11.5749 1.86626 11.4018 1.69313 10.876 1.69242C9.55878 1.69101 8.24225 1.68959 6.92501 1.69313C6.48546 1.69454 6.30031 1.87545 6.28265 2.3051C6.27699 2.4422 6.28194 2.58 6.28194 2.73335C8.05851 2.73335 9.7941 2.73335 11.5799 2.73335Z"
                      fill="#EB5757"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-5">
              <table>
                <tbody>
                  <tr className="flex mb-3">
                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                      <p>Name:</p>
                    </td>
                    <td className="text-base text-qblack line-clamp-1 font-medium">
                      Sed et error eligend Minim aut molestiae
                    </td>
                  </tr>
                  <tr className="flex mb-3">
                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                      <p>Email:</p>
                    </td>
                    <td className="text-base text-qblack line-clamp-1 font-medium">
                      Et labore exercitati
                    </td>
                  </tr>
                  <tr className="flex mb-3">
                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                      <p>phone:</p>
                    </td>
                    <td className="text-base text-qblack line-clamp-1 font-medium">
                      Deserunt beatae ulla
                    </td>
                  </tr>
                  <tr className="flex mb-3">
                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                      <p>Country:</p>
                    </td>
                    <td className="text-base text-qblack line-clamp-1 font-medium">
                      India
                    </td>
                  </tr>
                  <tr className="flex mb-3">
                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                      <p>State:</p>
                    </td>
                    <td className="text-base text-qblack line-clamp-1 font-medium">
                      Gujarat
                    </td>
                  </tr>
                  <tr className="flex mb-3">
                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                      <p>City:</p>
                    </td>
                    <td className="text-base text-qblack line-clamp-1 font-medium">
                      Gandhinagar
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full bg-primarygray rounded p-5 border">
            <div className="flex justify-between items-center">
              <p className="title text-[22px] font-semibold">Address #2</p>
              <div className="flex space-x-2.5 items-center">
                <button
                  onClick={() => setForm(true)}
                  type="button"
                  className="border border-qgray text-qyellow w-[34px] h-[34px] rounded-full flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="border border-qgray w-[34px] h-[34px] rounded-full flex justify-center items-center"
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 17 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.7768 5.95215C15.6991 6.9104 15.6242 7.84603 15.5471 8.78237C15.3691 10.9285 15.1917 13.0747 15.0108 15.2209C14.9493 15.9473 14.9097 16.6773 14.8065 17.3988C14.6963 18.1726 14.0716 18.7161 13.2929 18.7196C10.3842 18.7323 7.47624 18.7337 4.56757 18.7189C3.70473 18.7146 3.08639 18.0794 3.00795 17.155C2.78181 14.493 2.57052 11.8302 2.35145 9.16821C2.2716 8.19442 2.1875 7.22133 2.10623 6.24824C2.09846 6.15638 2.09563 6.06451 2.08998 5.95286C6.65579 5.95215 11.2061 5.95215 15.7768 5.95215ZM5.25375 8.05803C5.25234 8.05803 5.25163 8.05803 5.25022 8.05803C5.27566 8.4573 5.3011 8.85657 5.32583 9.25584C5.46717 11.5228 5.60709 13.7891 5.75125 16.0561C5.77245 16.3897 5.99081 16.6038 6.28196 16.6024C6.58724 16.601 6.80066 16.3636 6.8056 16.0159C6.80702 15.9339 6.80136 15.8512 6.79571 15.7692C6.65367 13.4789 6.51304 11.1886 6.36888 8.89826C6.33849 8.41702 6.31164 7.93507 6.26146 7.45524C6.22966 7.1549 6.0318 6.99732 5.73076 6.99802C5.44526 6.99873 5.24033 7.2185 5.23043 7.52873C5.22619 7.7054 5.24598 7.88207 5.25375 8.05803ZM12.6102 8.05521C12.6088 8.05521 12.6074 8.05521 12.606 8.05521C12.6152 7.89055 12.6321 7.7259 12.6307 7.56195C12.6286 7.24465 12.4399 7.02417 12.1622 6.99873C11.888 6.97329 11.6484 7.16268 11.5961 7.46443C11.5665 7.63756 11.5615 7.81494 11.5502 7.9909C11.4626 9.38799 11.3749 10.7851 11.2887 12.1822C11.2103 13.4499 11.1276 14.7184 11.0576 15.9869C11.0379 16.3431 11.2463 16.5819 11.5495 16.6003C11.8562 16.6194 12.088 16.4017 12.1099 16.0505C12.2788 13.3856 12.4441 10.7208 12.6102 8.05521ZM9.45916 11.814C9.45916 10.4727 9.45986 9.13147 9.45916 7.79091C9.45916 7.25101 9.28603 6.99449 8.92845 6.99661C8.56805 6.99802 8.40198 7.24819 8.40198 7.79586C8.40127 10.4664 8.40127 13.1369 8.40268 15.8074C8.40268 15.948 8.37088 16.1289 8.44296 16.2194C8.56946 16.3763 8.76591 16.5748 8.93198 16.5741C9.09805 16.5734 9.29309 16.3727 9.41746 16.2151C9.48955 16.124 9.45704 15.9431 9.45704 15.8032C9.46057 14.4725 9.45916 13.1432 9.45916 11.814Z"
                      fill="#EB5757"
                    ></path>
                    <path
                      d="M5.20143 2.75031C5.21486 2.49449 5.21839 2.2945 5.23747 2.09593C5.31733 1.25923 5.93496 0.648664 6.77449 0.637357C8.21115 0.618277 9.64923 0.618277 11.0859 0.637357C11.9254 0.648664 12.5438 1.25852 12.6236 2.09522C12.6427 2.2938 12.6462 2.49379 12.6582 2.73335C12.7854 2.739 12.9084 2.74889 13.0314 2.7496C13.9267 2.75101 14.8221 2.74677 15.7174 2.75172C16.4086 2.75525 16.8757 3.18774 16.875 3.81244C16.8742 4.43643 16.4078 4.87103 15.716 4.87174C11.1926 4.87386 6.66849 4.87386 2.14508 4.87174C1.45324 4.87103 0.986135 4.43713 0.985429 3.81314C0.984722 3.18915 1.45183 2.75525 2.14296 2.75243C3.15421 2.74677 4.16545 2.75031 5.20143 2.75031ZM11.5799 2.73335C11.5799 2.59625 11.5806 2.49096 11.5799 2.38637C11.5749 1.86626 11.4018 1.69313 10.876 1.69242C9.55878 1.69101 8.24225 1.68959 6.92501 1.69313C6.48546 1.69454 6.30031 1.87545 6.28265 2.3051C6.27699 2.4422 6.28194 2.58 6.28194 2.73335C8.05851 2.73335 9.7941 2.73335 11.5799 2.73335Z"
                      fill="#EB5757"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-5">
              <table>
                <tbody>
                  <tr className="flex mb-3">
                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                      <p>Name:</p>
                    </td>
                    <td className="text-base text-qblack line-clamp-1 font-medium">
                      fd wqe
                    </td>
                  </tr>
                  <tr className="flex mb-3">
                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                      <p>Email:</p>
                    </td>
                    <td className="text-base text-qblack line-clamp-1 font-medium">
                      dfshg@gmail.com
                    </td>
                  </tr>
                  <tr className="flex mb-3">
                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                      <p>phone:</p>
                    </td>
                    <td className="text-base text-qblack line-clamp-1 font-medium">
                      000000000000
                    </td>
                  </tr>
                  <tr className="flex mb-3">
                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                      <p>Country:</p>
                    </td>
                    <td className="text-base text-qblack line-clamp-1 font-medium">
                      United Kindom
                    </td>
                  </tr>
                  <tr className="flex mb-3">
                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                      <p>State:</p>
                    </td>
                    <td className="text-base text-qblack line-clamp-1 font-medium">
                      England
                    </td>
                  </tr>
                  <tr className="flex mb-3">
                    <td className="text-base text-qgraytwo w-[70px] block line-clamp-1 capitalize">
                      <p>City:</p>
                    </td>
                    <td className="text-base text-qblack line-clamp-1 font-medium">
                      London
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <SharedAddNewAddress
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          setForm={setForm}
          form={form}
        />

        // <div data-aos="zoom-in" className="w-full aos-init aos-animate">
        //   <div className="flex justify-between items-center">
        //     <h1 className="sm:text-2xl text-xl text-qblack font-medium mb-5">
        //       Add New Address
        //     </h1>
        //     <span
        //       onClick={() => setForm(false)}
        //       className="text-qyellow cursor-pointer"
        //     >
        //       <svg
        //         xmlns="http://www.w3.org/2000/svg"
        //         className="h-5 w-5"
        //         viewBox="0 0 20 20"
        //         fill="currentColor"
        //       >
        //         <path
        //           fill-rule="evenodd"
        //           d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
        //           clip-rule="evenodd"
        //         ></path>
        //       </svg>
        //     </span>
        //   </div>
        //   <div className="form-area">
        //     <form>
        //       <div className="mb-6">
        //         <div className="w-full mb-5 sm:mb-0">
        //           <div className="input-com w-full h-full">
        //             <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
        //               Name*
        //             </label>
        //             <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
        //               <input
        //                 placeholder="Name"
        //                 className="input-field placeholder:text-sm text-sm px-6 text-dark-gray   font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
        //               />
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="flex space-x-5 items-center mb-6">
        //         <div className="sm:w-1/2 w-full">
        //           <div className="input-com w-full h-full">
        //             <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
        //               Email*
        //             </label>
        //             <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
        //               <input
        //                 placeholder="Email"
        //                 className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
        //               />
        //             </div>
        //           </div>
        //         </div>
        //         <div className="sm:w-1/2 w-full">
        //           <div className="input-com w-full h-full">
        //             <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
        //               Phone Number*
        //             </label>
        //             <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
        //               <input
        //                 placeholder="012 3 *******"
        //                 className="input-field placeholder:text-sm text-sm px-6 text-dark-gray   font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
        //               />
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="mb-6">
        //         <h1 className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
        //           Country*
        //         </h1>
        //         <div className="w-full h-[50px]  flex justify-between items-center rounded border-[#CBECD9] mb-2 ">
        //           <div className="my-select-box w-full">
        //             <div className="my-select-box-section ">
        //               <Select
        //                 value={selectedOption}
        //                 onChange={handleChange}
        //                 options={countryOptions}
        //                 styles={style}
        //                 components={{
        //                   IndicatorSeparator: () => null,
        //                 }}
        //               />
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="flex space-x-5 items-center mb-6">
        //         <div className="w-1/2">
        //           <h1 className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
        //             State*
        //           </h1>
        //           <div className="w-full h-[50px] flex justify-between items-center rounded border-[#CBECD9] mb-2 ">
        //             <div className="my-select-box w-full">
        //               <div className="my-select-box-section ">
        //                 <Select
        //                   styles={style}
        //                   components={{
        //                     IndicatorSeparator: () => null,
        //                   }}
        //                 ></Select>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //         <div className="w-1/2">
        //           <h1 className="input-label capitalize block mb-2 text-qgray text-[13px] font-normal">
        //             City*
        //           </h1>
        //           <div className="w-full h-[50px] flex justify-between items-center rounded border-[#CBECD9] mb-2 ">
        //             <div className="my-select-box w-full">
        //               <div className="my-select-box-section ">
        //                 <Select
        //                   styles={style}
        //                   components={{
        //                     IndicatorSeparator: () => null,
        //                   }}
        //                 ></Select>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //       <div className=" mb-6">
        //         <div className="w-full">
        //           <div className="input-com w-full h-full">
        //             <label className="input-label capitalize block  mb-2 text-qgray text-[13px] font-normal">
        //               Address
        //             </label>
        //             <div className="input-wrapper border  w-full h-full overflow-hidden relative border-qgray-border">
        //               <input
        //                 placeholder="Your Address here"
        //                 className="input-field placeholder:text-sm text-sm px-6 text-dark-gray  font-normal bg-white focus:ring-0 focus:outline-none w-full h-[50px]"
        //               />
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //       <div className="flex space-x-5 items-center ">
        //         <div className="flex space-x-2 items-center mb-10">
        //           <div>
        //             <input type="checkbox" name="home" id="home" />
        //           </div>
        //           <label
        //             htmlFor="home"
        //             className="text-qblack text-[15px] select-none capitalize"
        //           >
        //             home
        //           </label>
        //         </div>
        //         <div className="flex space-x-2 items-center mb-10">
        //           <div>
        //             <input type="checkbox" name="office" id="office" />
        //           </div>
        //           <label
        //             htmlFor="office"
        //             className="text-qblack text-[15px] select-none"
        //           >
        //             Office
        //           </label>
        //         </div>
        //       </div>
        //       <button type="button" className="w-full h-[50px]">
        //         <div className="yellow-btn rounded">
        //           <span className="text-sm text-qblack">Save Address</span>
        //         </div>
        //       </button>
        //     </form>
        //   </div>
        // </div>
      )}
    </div>
  );
};

export default ProfileAddress;
