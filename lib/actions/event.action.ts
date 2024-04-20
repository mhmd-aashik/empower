"use server";

import { revalidatePath } from "next/cache";


// import Event from "@/lib/database/models/event.model";
// import Category from "@/lib/database/models/category.model";

import {
  CreateEventParams,
//   UpdateEventParams,
//   DeleteEventParams,
//   GetAllEventsParams,
//   GetEventsByUserParams,
//   GetRelatedEventsByCategoryParams,
} from "@/types";
import { connectToDatabase } from "../mongoose";
import User from "@/database/user.model";
import Category from "@/database/category.model";
import Event from "@/database/event.model";

// const getCategoryByName = async (name: string) => {
//   return Category.findOne({ name: { $regex: name, $options: "i" } });
// };

const populateEvent = (query: any) => {
  return query
    .populate({
      path: "organizer",
      model: User,
      select: "_id firstName lastName",
    })
    .populate({ path: "category", model: Category, select: "_id name" });
};

// CREATE
export async function createEvent({ userId, event, path }: CreateEventParams) {
  try {
    await connectToDatabase();

    const organizer = await User.findById(userId);
    if (!organizer) throw new Error("Organizer not found");

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });
    revalidatePath(path);

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    console.log(error);
  }
}