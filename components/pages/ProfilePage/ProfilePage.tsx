import React from "react";
import { useSelector } from "react-redux";
import { controller } from "../../../src/state/StateController";
import Breadcrumb from "../../shared/SharedBreadcrumb/Breadcrumb";
import Link from "next/link";
import ProfileDashboardRenderer from "./ProfileDashboardRenderer";
import { SocialLogin } from "../../helpers/SocialLogin";

interface Props {}

const ProfilePage: React.FC<Props> = (props) => {
  const states = useSelector(() => controller.states);

  return (
    <div className="min-h-screen container-x mx-auto">
      <div className="my-10">
        <div className="font-normal text-[13px] text-qblack mb-[23px]">
          <Breadcrumb slug="Profile" link="/profile" />
        </div>

        <div className="bg-white xl:p-10 p-5">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-[22px] font-bold text-qblack">
              Your Dashboard
            </h1>
          </div>

          <div className="w-full mt-8 xl:flex xl:gap-x-10">
            <div className="xl:w-[236px] xl:min-h-[600px] xl:border-r border-[rgba(0, 0, 0, 0.1)] mb-10 xl:mb-0">
              <div className="flex xl:flex-col flex-row xl:space-y-10 flex-wrap gap-3 xl:gap-0">
                <div className="group">
                  <Link
                    href="/profile#dashboard"
                    className="flex gap-x-3 items-center text-qgray hover:text-qblack capitalize">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.21258 4.98254C9.21258 6.17687 9.20926 7.37119 9.21391 8.56552C9.21723 9.41928 9.69987 9.9079 10.5483 9.90989C12.2512 9.91454 13.9547 9.91454 15.6576 9.90989C16.5007 9.9079 16.9966 9.40799 16.9979 8.56751C16.9999 6.16757 16.9999 3.76763 16.9979 1.36835C16.9973 0.508624 16.4961 0.00340804 15.6423 0.00274416C13.9613 0.000752505 12.2804 0.00141639 10.5994 0.00274416C9.69722 0.00340804 9.2159 0.488044 9.21391 1.40022C9.21059 2.59388 9.21258 3.78821 9.21258 4.98254ZM7.78722 12.0522C7.78722 10.8579 7.78921 9.66359 7.78656 8.46926C7.78456 7.57036 7.31122 7.09104 6.42028 7.08971C4.73933 7.08639 3.05837 7.08705 1.37742 7.08971C0.489805 7.09104 0.00251398 7.57965 0.0018501 8.46395C0.000522332 10.8526 0.000522332 13.2413 0.0018501 15.6299C0.00251398 16.4896 0.503747 16.9969 1.35551 16.9982C3.04775 17.0002 4.73933 17.0002 6.43157 16.9982C7.2913 16.9969 7.78257 16.5036 7.78589 15.6359C7.78988 14.4409 7.78722 13.2466 7.78722 12.0522ZM3.89022 5.66236C4.75261 5.66236 5.61499 5.66767 6.47738 5.66103C7.28665 5.65439 7.77925 5.16444 7.78523 4.35782C7.79253 3.34075 7.79253 2.32302 7.78523 1.30595C7.77925 0.505968 7.27337 0.00473581 6.47339 0.00274416C4.75924 -0.00123915 3.04576 -0.000575264 1.33161 0.00274416C0.519016 0.00407193 0.00516952 0.516591 0.00251398 1.32719C-0.00146932 2.32236 -0.000141552 3.31752 0.00251398 4.31268C0.00450564 5.15648 0.49578 5.65638 1.33626 5.66169C2.18736 5.667 3.03846 5.66236 3.89022 5.66236ZM13.1083 11.3372C12.2459 11.3372 11.3835 11.3319 10.5211 11.3386C9.71248 11.3452 9.21988 11.8358 9.21457 12.6431C9.20793 13.6602 9.20727 14.6779 9.21457 15.695C9.22055 16.493 9.72908 16.9955 10.5271 16.9969C12.2412 17.0008 13.9547 17.0002 15.6689 16.9969C16.4801 16.9955 16.994 16.481 16.9973 15.6704C17.0013 14.6752 16.9999 13.6801 16.9973 12.6849C16.9953 11.8418 16.502 11.3425 15.6622 11.3379C14.8111 11.3333 13.9594 11.3372 13.1083 11.3372Z"
                        fill="white"></path>
                      <path d="M9.21223 4.98269C9.21223 3.78837 9.21024 2.59404 9.2129 1.39971C9.21489 0.487533 9.69621 0.00289744 10.5984 0.00223355C12.2794 0.000905786 13.9603 0.000241902 15.6413 0.00223355C16.495 0.00356132 16.9963 0.508777 16.9969 1.36784C16.9983 3.76778 16.9989 6.16773 16.9969 8.567C16.9963 9.40748 16.5004 9.90739 15.6566 9.90938C13.9537 9.91402 12.2502 9.91402 10.5473 9.90938C9.69886 9.90672 9.21622 9.41877 9.2129 8.56501C9.20891 7.37135 9.21223 6.17702 9.21223 4.98269Z"></path>
                      <path d="M7.78832 12.0524C7.78832 13.2467 7.79098 14.441 7.78699 15.6353C7.78434 16.503 7.2924 16.9963 6.43267 16.9976C4.74043 16.9996 3.04885 16.9996 1.35661 16.9976C0.504846 16.9963 0.00361284 16.4891 0.00294895 15.6294C0.00162118 13.2407 0.00162118 10.8521 0.00294895 8.4634C0.00361284 7.57911 0.490904 7.09115 1.37852 7.08916C3.05947 7.08651 4.74043 7.08584 6.42138 7.08916C7.31231 7.09115 7.785 7.56981 7.78766 8.46871C7.79031 9.6637 7.78832 10.858 7.78832 12.0524Z"></path>
                      <path d="M3.89062 5.6621C3.03952 5.6621 2.18775 5.66609 1.33665 5.66077C0.496177 5.65613 0.00490302 5.15622 0.00224748 4.31243C-0.000408054 3.31726 -0.00107194 2.3221 0.00224748 1.32694C0.0055669 0.516336 0.519413 0.00381733 1.33201 0.00248957C3.04616 -0.000829855 4.75964 -0.000829855 6.47379 0.00248957C7.27311 0.00448122 7.77965 0.50505 7.78563 1.30569C7.79293 2.32276 7.79293 3.3405 7.78563 4.35757C7.77965 5.16485 7.28771 5.6548 6.47777 5.66077C5.61539 5.66741 4.753 5.6621 3.89062 5.6621Z"></path>
                      <path d="M13.1081 11.3378C13.9592 11.3378 14.811 11.3338 15.6621 11.3391C16.5019 11.3444 16.9952 11.843 16.9972 12.6862C16.9998 13.6813 17.0005 14.6765 16.9972 15.6716C16.9939 16.4822 16.48 16.9968 15.6687 16.9981C13.9546 17.0014 12.2411 17.0014 10.527 16.9981C9.72831 16.9961 9.21977 16.4935 9.21446 15.6962C9.20716 14.6791 9.20716 13.6614 9.21446 12.6443C9.21977 11.837 9.71237 11.3464 10.521 11.3398C11.3834 11.3325 12.2458 11.3378 13.1081 11.3378Z"></path>
                    </svg>
                    <span className="font-normal text-base capitalize cursor-pointer">
                      Dashboard
                    </span>
                  </Link>
                </div>
                <div className="group">
                  <Link
                    href="/profile#personal_info"
                    className="flex gap-x-3 items-center text-qgray hover:text-qblack capitalize">
                    <svg
                      width="14"
                      height="19"
                      viewBox="0 0 14 19"
                      fill="none"
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.96898 10.7061H3.78814C1.6967 10.7061 0.00346265 12.4028 0 14.4942V18.3481H13.7606V14.4942C13.7571 12.4028 12.0604 10.7061 9.96898 10.7061Z"></path>
                      <path d="M6.88098 9.17603C9.41488 9.17603 11.469 7.12191 11.469 4.58802C11.469 2.05412 9.41488 0 6.88098 0C4.34709 0 2.29297 2.05412 2.29297 4.58802C2.29297 7.12191 4.34709 9.17603 6.88098 9.17603Z"></path>
                    </svg>
                    <span className="font-normal text-base capitalize cursor-pointer">
                      Personal Info
                    </span>
                  </Link>
                </div>
                <div className="group">
                  <Link
                    href="/profile#order"
                    className="flex gap-x-3 items-center text-qgray hover:text-qblack capitalize">
                    <svg
                      width="15"
                      height="18"
                      viewBox="0 0 15 18"
                      fill="none"
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.9643 15.8454C10.8728 15.8399 10.8054 15.8331 10.7381 15.8331C9.37517 15.8324 8.01229 15.8324 6.60539 15.8324C6.85294 16.5145 6.77799 17.099 6.11648 17.4676C5.68672 17.7076 5.24457 17.6615 4.86018 17.3562C4.36027 16.9594 4.3087 16.4409 4.56175 15.8317C3.82667 15.8317 3.13285 15.8406 2.43903 15.8296C1.53136 15.8152 0.910425 14.8958 1.25974 14.0638C1.34845 13.852 1.51898 13.6581 1.69295 13.502C2.43628 12.8384 3.19199 12.1872 3.95182 11.5429C4.11204 11.4075 4.16499 11.2816 4.11479 11.074C3.36389 7.96037 2.61506 4.8454 1.87999 1.72768C1.82085 1.476 1.71564 1.42512 1.48597 1.432C0.997754 1.44712 0.507472 1.43681 0 1.43681C0 1.06824 0 0.741614 0 0.390921C0.782525 0.390921 1.54786 0.377856 2.31182 0.397798C2.58825 0.405362 2.70308 0.630905 2.76772 0.885329C3.01389 1.86177 3.27725 2.83339 3.5138 3.81189C3.57775 4.07732 3.68846 4.22034 3.96901 4.19971C3.98001 4.19903 3.9917 4.20315 4.00339 4.20315C4.60369 4.21003 4.95026 4.4507 5.25488 5.03863C6.60195 7.64613 10.1907 7.96587 12.0686 5.68981C12.2206 5.50622 12.3512 5.44639 12.585 5.4904C13.0911 5.58529 13.6027 5.64855 14.1136 5.71801C14.333 5.74826 14.4306 5.85416 14.4251 6.08314C14.3839 7.93906 14.3461 9.79498 14.3144 11.6509C14.3089 11.9816 14.0937 11.9665 13.8661 11.9665C11.0819 11.9651 8.29697 11.9693 5.51274 11.9596C5.2425 11.959 5.03897 12.0291 4.8368 12.2072C4.05428 12.8962 3.25525 13.5659 2.47135 14.2536C2.37095 14.3416 2.32488 14.4908 2.25337 14.6111C2.38264 14.6552 2.51192 14.737 2.64119 14.737C6.60608 14.7439 10.571 14.7425 14.5358 14.7425C14.6823 14.7425 14.8288 14.7425 15 14.7425C15 15.1152 15 15.4514 15 15.8193C14.3426 15.8193 13.6935 15.8193 13.0127 15.8193C13.25 16.4568 13.2156 17.0055 12.6442 17.4064C12.2536 17.68 11.7406 17.6814 11.3521 17.4091C10.78 17.011 10.7339 16.4636 10.9643 15.8454Z"></path>
                      <path d="M8.8449 6.1337C7.15883 6.12476 5.787 4.74744 5.78906 3.06549C5.79113 1.37254 7.18564 -0.00685072 8.88753 2.55979e-05C10.5702 0.00690192 11.9413 1.38835 11.9392 3.07374C11.9372 4.77563 10.555 6.14264 8.8449 6.1337ZM9.94924 1.61802C9.38194 2.22039 8.85178 2.78287 8.31199 3.35636C8.11326 3.12806 7.94342 2.93278 7.76394 2.72786C7.48201 2.96853 7.22553 3.1872 6.95735 3.41618C7.28191 3.80125 7.57484 4.16708 7.8884 4.51502C8.10157 4.75225 8.43232 4.77082 8.65236 4.54458C9.33656 3.83907 10.0042 3.11775 10.6382 2.44593C10.4031 2.16332 10.1858 1.9027 9.94924 1.61802Z"></path>
                    </svg>
                    <span className="font-normal text-base capitalize cursor-pointer">
                      Order
                    </span>
                  </Link>
                </div>
                <div className="group">
                  <Link
                    href="/profile#wishlist"
                    className="flex gap-x-3 items-center text-qgray hover:text-qblack capitalize">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.00893 1.94301C8.25673 1.6737 8.45526 1.43535 8.67664 1.22148C10.387 -0.426805 13.0628 -0.402322 14.7246 1.27189C16.3985 2.95834 16.4356 5.68748 14.7674 7.3977C12.6907 9.52701 10.5848 11.6268 8.48882 13.7374C8.13819 14.0902 7.85825 14.0881 7.50619 13.7331C5.4188 11.6311 3.32426 9.53637 1.25187 7.42002C-0.424185 5.70837 -0.410617 2.98786 1.25258 1.29349C2.92721 -0.413123 5.62304 -0.434006 7.35265 1.24885C7.56475 1.45479 7.76042 1.67874 8.00893 1.94301Z"></path>
                    </svg>
                    <span className="font-normal text-base capitalize cursor-pointer">
                      Wishlist
                    </span>
                  </Link>
                </div>
                <div className="group">
                  <Link
                    href="/profile#address"
                    className="flex gap-x-3 items-center text-qgray hover:text-qblack capitalize">
                    <svg
                      width="14"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="none"
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.864 15.982C11.4632 12.6503 9.25877 11.1115 7.04363 11.0543C5.70166 11.0221 4.5422 11.5123 3.57598 12.4607C2.60976 13.4054 2.19465 14.5935 1.99067 16.0285C1.37873 15.7458 0.809733 15.506 0.272945 15.2126C0.147695 15.1446 0.0582333 14.8941 0.0582333 14.7259C0.0439189 13.5629 -0.0849134 12.3819 0.0940158 11.2475C0.365988 9.54055 1.99067 8.23794 3.71555 8.05544C4.60661 7.96239 5.46547 7.95166 6.35296 8.16995C6.88617 8.30236 7.51243 8.19142 8.06711 8.05902C10.2357 7.52938 13.1559 8.64948 13.7571 10.997C14.0577 12.1672 14.0577 13.3661 13.8751 14.5613C13.8107 14.9979 13.6068 15.32 13.1737 15.481C12.7336 15.6385 12.3042 15.8102 11.864 15.982Z"></path>
                      <path d="M10.6071 3.72194C10.5928 5.77962 8.96814 7.38999 6.93193 7.36494C4.8814 7.33989 3.24241 5.7009 3.26388 3.69331C3.28535 1.59984 4.90287 -0.0212607 6.94982 0.000210833C9.01824 0.0181038 10.6215 1.64994 10.6071 3.72194Z"></path>
                      <path d="M10.9467 16.0178C10.9109 18.2795 9.07512 19.9972 6.74188 19.9507C4.58041 19.9077 2.77681 18.0719 2.80902 15.9498C2.8448 13.7454 4.69493 11.9776 6.9387 12.0062C9.17174 12.0384 10.9789 13.8492 10.9467 16.0178ZM6.84208 18.4834C7.27509 18.462 7.76893 18.4262 8.26278 18.419C8.62779 18.4154 8.74947 18.2222 8.74947 17.8966C8.74947 17.1808 8.75305 16.4687 8.74589 15.753C8.74589 15.6599 8.70652 15.5025 8.65642 15.4882C8.32719 15.4059 8.40234 15.1482 8.38087 14.9263C8.36298 14.7367 8.34151 14.547 8.30572 14.3645C8.15542 13.6309 7.64011 13.2122 6.91723 13.2229C6.22299 13.2337 5.64683 13.7418 5.52874 14.4432C5.4679 14.8154 5.65041 15.2735 5.17088 15.5096C5.14941 15.5204 5.14941 15.5919 5.14941 15.6349C5.14941 16.4508 5.1351 17.2667 5.16015 18.0826C5.16372 18.19 5.34981 18.3689 5.4679 18.3868C5.90449 18.4477 6.34108 18.4548 6.84208 18.4834Z"></path>
                      <path
                        d="M7.78818 15.3706C7.81323 14.8159 7.93491 14.2684 7.41601 13.9069C7.09036 13.6815 6.70745 13.6851 6.40327 13.9499C5.95953 14.3328 6.03826 14.8481 6.08836 15.3706C6.66451 15.3706 7.19414 15.3706 7.78818 15.3706ZM6.76113 17.643C6.8828 17.643 7.00448 17.643 7.11899 17.643C7.15836 17.3209 7.22635 17.0239 7.21561 16.7304C7.21204 16.6088 7.02953 16.4978 6.92933 16.3797C6.83986 16.4835 6.6824 16.5837 6.67883 16.6911C6.67167 16.9988 6.72892 17.3137 6.76113 17.643Z"
                        fill="white"></path>
                      <path d="M7.78818 15.3706C7.19414 15.3706 6.66451 15.3706 6.08836 15.3706C6.03826 14.8445 5.95953 14.3328 6.40327 13.9499C6.71103 13.6851 7.09394 13.6815 7.41601 13.9069C7.93491 14.2684 7.81323 14.8159 7.78818 15.3706Z"></path>
                      <path d="M6.76261 17.6421C6.7304 17.3129 6.67314 17.0016 6.6803 16.6902C6.68388 16.5865 6.84134 16.4827 6.9308 16.3789C7.031 16.4934 7.21351 16.6079 7.21709 16.7296C7.22782 17.0231 7.15983 17.3201 7.12046 17.6421C7.00595 17.6421 6.88786 17.6421 6.76261 17.6421Z"></path>
                    </svg>
                    <span className="font-normal text-base capitalize cursor-pointer">
                      Address
                    </span>
                  </Link>
                </div>
                <div className="group">
                  <Link
                    href="/profile#reviews"
                    className="flex gap-x-3 items-center text-qgray hover:text-qblack capitalize">
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.2481 10.6955C9.42603 10.6955 9.5544 10.6955 9.68504 10.6955C10.8044 10.6955 11.9238 10.6933 13.0431 10.6955C14.2729 10.7 14.8224 11.6158 14.2413 12.6692C14.2008 12.7401 14.2053 12.8665 14.2413 12.9419C14.4801 13.4365 14.4328 13.8888 14.104 14.3301C14.0454 14.41 14.0274 14.563 14.0612 14.6606C14.2278 15.1462 14.1625 15.5764 13.8382 15.9822C13.7706 16.0665 13.7436 16.2328 13.7751 16.3392C14.0341 17.1974 13.4756 17.9825 12.5612 17.9869C10.4418 17.9958 8.32242 17.9913 6.20305 17.9891C5.67603 17.9891 5.63549 17.9403 5.63549 17.4325C5.63549 15.0752 5.63098 12.718 5.6445 10.3629C5.64675 10.1633 5.72783 9.92604 5.8517 9.76859C6.6445 8.78178 7.16251 7.68408 7.35396 6.43781C7.48459 5.58404 8.0026 5.35563 8.74585 5.82354C9.45305 6.26927 9.71206 6.9545 9.76161 7.7373C9.81792 8.60437 9.61747 9.43596 9.37422 10.2609C9.34044 10.3851 9.30441 10.507 9.2481 10.6955Z"></path>
                      <path d="M4.77902 14.1929C4.77902 15.2241 4.77902 16.2553 4.77902 17.2864C4.77902 17.7277 4.57407 17.9783 4.13037 17.985C3.10785 18.0027 2.08307 18.0049 1.06055 17.985C0.56956 17.9761 0.270011 17.5925 0.270011 17.0403C0.267758 15.2707 0.270011 13.501 0.270011 11.7314C0.270011 11.5673 0.263254 11.4032 0.272263 11.2391C0.297038 10.7357 0.628119 10.3987 1.13262 10.3942C2.10785 10.3854 3.08307 10.3831 4.0583 10.3942C4.56506 10.3987 4.77902 10.6337 4.77902 11.1327C4.77902 12.1528 4.77902 13.1728 4.77902 14.1929ZM1.92091 12.3634C2.31731 12.3679 2.53127 12.2215 2.53127 11.9443C2.53127 11.6782 2.31956 11.523 1.95695 11.5208C1.58758 11.5185 1.37812 11.6627 1.36686 11.9266C1.35334 12.1971 1.56055 12.359 1.92091 12.3634Z"></path>
                      <path d="M6.03755 4.91866C6.10737 4.58159 6.16593 4.18686 6.27178 3.80322C6.33935 3.55929 6.26277 3.41293 6.08034 3.26435C5.80557 3.04038 5.53079 2.80975 5.29881 2.54586C5.18395 2.41724 5.08034 2.17331 5.12989 2.03804C5.18169 1.90055 5.41593 1.78302 5.58935 1.74532C5.9362 1.66992 6.29431 1.63444 6.65016 1.61892C6.8889 1.60783 7.00827 1.51691 7.09385 1.30402C7.23349 0.955863 7.3844 0.609923 7.57133 0.286158C7.64791 0.153104 7.83259 -0.00434352 7.96322 9.16175e-05C8.11187 0.00674432 8.31007 0.148669 8.39115 0.286158C8.5916 0.629881 8.72449 1.0113 8.91368 1.36168C8.97223 1.46812 9.12088 1.57013 9.24476 1.59231C9.61863 1.66105 10.0038 1.66549 10.3731 1.74532C10.5466 1.78302 10.7808 1.90277 10.8326 2.04025C10.8821 2.17553 10.7785 2.41946 10.6637 2.54808C10.4227 2.81862 10.1366 3.0559 9.85512 3.28875C9.6907 3.42402 9.62989 3.55264 9.6862 3.76996C9.78304 4.13142 9.86413 4.49954 9.90241 4.87209C9.91818 5.03397 9.86187 5.28899 9.74926 5.35774C9.61638 5.43757 9.36412 5.41318 9.20422 5.34221C8.84836 5.18477 8.52178 4.96079 8.17043 4.79004C8.06683 4.73904 7.8934 4.74125 7.7898 4.79226C7.41818 4.9741 7.06683 5.19585 6.69746 5.38657C6.32809 5.57284 6.01503 5.37326 6.03755 4.91866Z"></path>
                      <path d="M0.7248 6.07866C0.801377 5.68615 0.877953 5.37791 0.916242 5.06523C0.929755 4.94992 0.882458 4.79469 0.803629 4.71042C0.61444 4.50197 0.366692 4.3423 0.186512 4.12942C0.0784038 4.0008 -0.0319566 3.78348 0.00858397 3.6482C0.0468723 3.51515 0.276602 3.34218 0.416242 3.34883C1.26985 3.38431 1.7766 3.01841 1.99507 2.20457C2.02885 2.07817 2.25633 1.91628 2.38471 1.92515C2.53561 1.93181 2.76985 2.08482 2.80363 2.21787C3.01309 3.02729 3.51985 3.37101 4.35768 3.34218C4.50408 3.33774 4.73831 3.51959 4.78786 3.66151C4.83066 3.78569 4.71804 4.04958 4.59417 4.12942C3.90949 4.5685 3.73381 5.12954 4.01985 5.87908C4.0739 6.01878 3.98381 6.30707 3.86219 6.39134C3.74282 6.4756 3.43876 6.4623 3.32165 6.36694C2.68201 5.85247 2.08967 5.88351 1.45678 6.37581C1.33967 6.46673 1.08741 6.46452 0.936512 6.40686C0.821647 6.36029 0.772098 6.15849 0.7248 6.07866Z"></path>
                      <path d="M15.9995 3.82362C15.9499 3.89458 15.8936 4.05646 15.781 4.12743C15.1076 4.55542 14.8779 5.10094 15.1842 5.86157C15.2405 6.00349 15.1639 6.30508 15.0468 6.37826C14.9094 6.46474 14.6008 6.45587 14.4747 6.35608C13.8598 5.86822 13.29 5.87044 12.6706 6.34721C12.54 6.44922 12.254 6.46031 12.0896 6.39378C11.8418 6.29177 11.8598 6.01901 11.9477 5.80613C12.236 5.10981 12.0535 4.5909 11.4206 4.17621C11.2765 4.08086 11.1616 3.83027 11.1661 3.65508C11.1729 3.39119 11.4387 3.30027 11.6729 3.32023C12.495 3.39119 12.9229 2.98981 13.1436 2.24915C13.1864 2.10279 13.4206 1.93425 13.5761 1.92316C13.7067 1.91429 13.9409 2.09613 13.9792 2.23362C14.1954 3.01864 14.6819 3.38232 15.5107 3.3291C15.772 3.31358 15.9634 3.4555 15.9995 3.82362Z"></path>
                    </svg>
                    <span className="font-normal text-base capitalize cursor-pointer">
                      Reviews
                    </span>
                  </Link>
                </div>
                <div className="group">
                  <Link
                    href="/profile#change_password"
                    className="flex gap-x-3 items-center text-qgray hover:text-qblack capitalize">
                    <svg
                      width="16"
                      height="19"
                      viewBox="0 0 16 19"
                      fill="none"
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.9919 6.43707V5.3498C12.9919 2.39616 10.5957 0 7.64208 0C4.68844 0 2.29227 2.39616 2.29227 5.3498V6.43707C0.900288 7.04304 0 8.41771 0 9.93435V14.5224C0.00346265 16.6311 1.71054 18.3417 3.82276 18.3451H11.4683C13.5771 18.3417 15.2876 16.6346 15.2911 14.5224V9.93781C15.2807 8.41771 14.3804 7.0465 12.9919 6.43707ZM8.40386 12.9953C8.40386 13.4178 8.06106 13.7606 7.63861 13.7606C7.21617 13.7606 6.87337 13.4178 6.87337 12.9953V11.4648C6.87337 11.0424 7.21617 10.6996 7.63861 10.6996C8.06106 10.6996 8.40386 11.0424 8.40386 11.4648V12.9953ZM11.4614 6.11505H3.81584V5.3498C3.81584 3.23758 5.52639 1.52703 7.63861 1.52703C9.75083 1.52703 11.4614 3.23758 11.4614 5.3498V6.11505Z"></path>
                    </svg>
                    <span className="font-normal text-base capitalize cursor-pointer">
                      Change Password
                    </span>
                  </Link>
                </div>

                <div className="group">
                  <div className="flex gap-x-3 items-center text-qgray hover:text-qblack capitalize">
                    <span>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.50224 15.7537C7.50224 16.0247 7.50895 16.2465 7.5 16.4683C7.4597 17.5682 6.52164 18.2515 5.4806 17.9155C4.00075 17.4383 2.52761 16.9387 1.05448 16.4392C0.380597 16.2107 0 15.6641 0 14.9405C0 10.4892 0 6.03569 0.00223881 1.58218C0.00223881 0.627852 0.629104 0.00955666 1.59403 0.00731646C4.28731 0.00283606 6.98284 -0.00164434 9.67612 0.000595862C11.0104 0.00283606 11.9798 0.961641 12 2.29904C12.0112 2.99126 12.0067 3.68124 12 4.37347C11.9955 4.90439 11.6933 5.25162 11.2478 5.25162C10.8022 5.25386 10.4955 4.90663 10.491 4.37571C10.4843 3.69693 10.4933 3.0159 10.4888 2.33712C10.4843 1.79276 10.209 1.50153 9.67388 1.49705C8.72463 1.48585 7.77761 1.49481 6.82836 1.49481C6.72313 1.49481 6.61791 1.49481 6.46791 1.49481C6.51492 1.55081 6.53284 1.59114 6.56418 1.60682C7.24254 1.91597 7.51119 2.46481 7.51119 3.1884C7.50672 6.72791 7.50895 10.2674 7.50895 13.8069C7.50895 13.9436 7.50895 14.0802 7.50895 14.2415C8.32164 14.2415 9.09179 14.2662 9.8597 14.2303C10.2649 14.2124 10.4888 13.8898 10.491 13.4396C10.4978 12.5031 10.4955 11.5645 10.4933 10.6259C10.4933 10.2854 10.594 10.0008 10.9119 9.83507C11.3888 9.58865 11.9754 9.89332 11.9888 10.4511C12.0179 11.5511 12.0493 12.6577 11.9664 13.7532C11.8746 14.9494 10.9052 15.7447 9.69403 15.7514C8.97537 15.7559 8.26343 15.7537 7.50224 15.7537Z"></path>
                        <path d="M13.4942 6.75005C13.4942 6.02423 13.5009 5.33425 13.492 4.64651C13.4875 4.27463 13.5927 3.96997 13.9532 3.81539C14.3136 3.66082 14.6046 3.79523 14.8688 4.06181C15.8002 5.0027 16.7405 5.93462 17.674 6.87326C18.1061 7.30786 18.1129 7.69094 17.6897 8.11882C16.7494 9.06642 15.8024 10.0073 14.8599 10.9549C14.6091 11.2058 14.327 11.3402 13.9755 11.1946C13.6129 11.0445 13.492 10.7533 13.4964 10.3769C13.5032 9.68695 13.4987 8.99473 13.4987 8.24875C13.3576 8.24875 13.2345 8.24875 13.1114 8.24875C12.2808 8.24875 11.4479 8.25099 10.6173 8.24651C10.0711 8.24427 9.75315 7.962 9.75987 7.4938C9.76435 7.03456 10.0912 6.75453 10.6352 6.75229C11.5666 6.75005 12.5024 6.75005 13.4942 6.75005Z"></path>
                      </svg>
                    </span>
                    <span
                      onClick={() => SocialLogin.logOut()}
                      className="font-normal text-base capitalize cursor-pointer">
                      Logout
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <ProfileDashboardRenderer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
