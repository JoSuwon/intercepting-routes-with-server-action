'use server';

export async function duringThreeSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });
}
