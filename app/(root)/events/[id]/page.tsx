import React from "react";
import { getEventById } from "@/lib/actions/events.action";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import { formatDateTime } from "@/lib/utils";

const EventDetails = async ({ params: { id } }: SearchParamProps) => {
  const event = await getEventById(id);
  console.log(event);

  return (
    <section className="flex justify-center bg-[#020617] bg-dotted-pattern bg-contain">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:max-w-7xl">
        <Image
          src={event?.imageUrl}
          alt="event"
          width={1000}
          height={1000}
          className="h-full min-h-[300px] object-cover object-center"
        />

        <div className="flex w-full flex-col gap-8 p-5 md:p-10">
          <div className="flex flex-col gap-6">
            <h2 className="h2-bold text-slate-500">{event?.title}</h2>
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
              <div className="flex gap-3">
                <p className="p-bold-20 rounded-full bg-green-500/10 px-5 py-2 text-green-700 text-center">
                  {event.category}
                </p>

                <p className="p-medium-16 rounded-full bg-blue-800 px-4 py-2.5 text-gray-500 text-center ">
                  {`Age : ${event.age}`}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex gap-2 md:gap-3">
              <Image
                src="/assets/icons/calendar.svg"
                width={32}
                height={32}
                alt="calendar"
              />
              <div className="p-medium-16 lg:p-regular-20 flex flex-col flex-wrap items-center text-white   ">
                <p>
                  {formatDateTime(event.startDateTime).dateOnly} -{" "}
                  {formatDateTime(event.startDateTime).timeOnly}
                </p>
                <p>
                  {formatDateTime(event.endDateTime).dateOnly} -{" "}
                  {formatDateTime(event.endDateTime).timeOnly}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-start">
              <Image
                src={event?.organizer.photo}
                alt="organizer"
                width={32}
                height={32}
                className="rounded-full md:flex hidden"
              />
              <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                by{"  "}{" "}
                <span className="text-primary-500">
                  {event.organizer.firstName} {event.organizer.lastName}
                </span>
              </p>
            </div>
            <div className="p-regular-20 flex items-center gap-3">
              <Image
                src="/assets/icons/location.svg"
                width={32}
                height={32}
                alt="location"
              />
              <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="p-bold-20 text-white">What you will learn</p>
            <p className="p-medium-16 lg:p-regular-18 text-yellow-100">{event.description}</p>
            <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 underline">
              {event.url}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
