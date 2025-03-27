function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="transform cursor-pointer rounded-md bg-red-100 p-2 text-sm duration-150 hover:bg-red-200 md:p-3 md:text-lg"
    >
      {text}
    </button>
  );
}

export default Button;
