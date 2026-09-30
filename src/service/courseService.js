'use server'
import { getApi } from "./getApi";

export const getCourse = async () => {
  return await getApi("/data/CourseData.json");
};
