export const debounce = (callback: (value: string) => Promise<void>, delay: number) => {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: [string]) => {
    clearTimeout(timer);
    timer = setTimeout(() => callback(...args), delay);
  }
}