const debounce = (func: (e: any) => void) => {
  let timer: NodeJS.Timeout | null;

  return (...args: any) => {
    const context = this;

    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 500);
  };
};

export default debounce;
