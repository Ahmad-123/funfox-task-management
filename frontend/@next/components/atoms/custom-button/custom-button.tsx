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
          // disabled={disabled}
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
    // <LoadingButton
    //   loading={loading}
    //   disabled={disabled}
    //   type={type ? ButtonTypes.SUBMIT : ButtonTypes.BUTTON}
    //   sx={{
    //     backgroundColor: `${backgroundColor}`,
    //     borderRadius: "0.625rem",
    //     color: `${color}`,
    //     border: "none",
    //     fontSize: "0.875rem",
    //     fontFamily: "Poppins",
    //     fontWeight: 600,
    //     width: "10.75rem",
    //     height: "3rem",
    //     opacity: disabled ? "0.25" : "1",
    //     margin: { xl: 0, lg: 0, md: 0, sm: "1rem 0 0", xs: "1rem 0 0" },
    //     "&:hover": {
    //       backgroundColor: `${backgroundColor}`,
    //     },
    //     p: "0px 15px",
    //   }}
    //   onClick={onClick}
    // >
    //   {text}
    // </LoadingButton>
  );
};
