const Button = ({buttonText, clickHandler}) => {
    return(
        <>
            <button 
                onClick={clickHandler}
                className="gap-2.5 self-stretch px-4 py-4 mt-8 w-full text-base font-bold text-white uppercase whitespace-nowrap bg-black max-w-[328px] min-h-[48px] rounded-[36px]"
                type="button"
                aria-label={buttonText}
            >
                {buttonText}
            </button>
        </>
    )
}

export default Button;