/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/require-await */

export async function main(event) {
  // accessing environment variables 👇
  console.log('region 👉', process.env.region);
  console.log('availabilityZones 👉', process.env.availabilityZones);
  console.log('myEnvVariable 👉', process.env.myEnvVariable);

  return {body: JSON.stringify({message: 'SUCCESS'}), statusCode: 200};
}
