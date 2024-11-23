/**
 * Since requests are too fast.
 * Loading status is not very visible.
 * So this function mocks a 500 ms duration of waiting for response.
 */
export const mockDelay = async (customDuration?: number) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, customDuration || 500);
  });
};
