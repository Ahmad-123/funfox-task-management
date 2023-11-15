import { ButtonTypes } from "@types";

export const CustomButton = ({
  text,
  onClick,
  disabled = false,
  loading = false,
}: {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}): JSX.Element => {
  return (
    <>
      {loading ? (
        <div className=" w-[10rem] h-[2.875rem] bg-[#961A88] rounded-[0.375rem] flex justify-center items-center">
          <div className="animate-spin rounded-full h-5 w-5 border-b-4 border-white"></div>
        </div>
      ) : (
        <button
          disabled={disabled}
          //   type={type ? ButtonTypes.SUBMIT : ButtonTypes.BUTTON}
          className={`flex items-center w-[10rem] h-[2.875rem] justify-center  text-white text-[0.875rem] ${
            disabled && "bg-[#877FA3]"
          } bg-[#961A88] rounded-[0.375rem] hover:bg-[#961A88]`}
          onClick={onClick}
        >
          {text}
        </button>
      )}
    </>
  );
};
